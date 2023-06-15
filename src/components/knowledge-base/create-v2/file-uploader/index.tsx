'use client';
import React, {useState, useRef, useEffect, useCallback} from 'react';

import type {File as FileEntity} from '@/models/datasets';
// import { useContext } from 'use-context-selector';
// import { ToastContext } from '../../../common/base/toast';
// import Button from '../../../common/base/button';
import {Button} from '../../../common/deska-kit-base/button';

// import { upload } from '@/service/base'

import cn from 'classnames';
import s from './index.module.css';

// {
//   id: string;
//   name: string;
//   size: number;
//   extension: string;
//   mime_type: string;
//   created_by: string;
//   created_at: number;
// }
// mock promise and return a file object
const upload = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '1',
        name: 'test',
        size: 100,
        extension: 'pdf',
        mime_type: 'application/pdf',
        created_by: '1',
        created_at: Date.now(),
      });
    }, 1000);
  });

type IFileUploaderProps = {
  file?: FileEntity;
  onFileUpdate: (file?: FileEntity) => void;
};

const ACCEPTS = ['.pdf', '.html', '.htm', '.md', '.markdown', '.txt'];

const MAX_SIZE = 15 * 1024 * 1024;

const FileUploader = ({file, onFileUpdate}: IFileUploaderProps) => {
  // const { notify } = useContext(ToastContext);
  const [dragging, setDragging] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const fileUploader = useRef<HTMLInputElement>(null);
  const uploadPromise = useRef<any>(null);
  const [currentFile, setCurrentFile] = useState<File>();
  const [uploading, setUploading] = useState(false);
  const [percent, setPercent] = useState(0);

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.target !== dragRef.current && setDragging(true);
  };
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.target === dragRef.current && setDragging(false);
  };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (!e.dataTransfer) {
      return;
    }
    const files = [...e.dataTransfer.files];
    if (files.length > 1) {
      alert({
        type: 'error',
        message: 'datasetCreation.stepOne.uploader.validation.count',
      });
      return;
    }
    onFileUpdate();
    fileUpload(files[0]);
  };

  const selectHandle = () => {
    if (fileUploader.current) {
      fileUploader.current.click();
    }
  };
  const removeFile = () => {
    if (fileUploader.current) {
      fileUploader.current.value = '';
    }
    setCurrentFile(undefined);
    onFileUpdate();
  };
  const fileChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('fileChangeHandle', e.target.files);
    const currentFile = e.target.files?.[0];
    onFileUpdate();
    fileUpload(currentFile);
  };
  const fileUpload = async (file?: File) => {
    if (!file) {
      return;
    }
    if (!isValid(file)) {
      return;
    }
    setCurrentFile(file);
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    // store for abort
    const currentXHR = new XMLHttpRequest();
    uploadPromise.current = currentXHR;
    try {
      const result = (await upload({
        xhr: currentXHR,
        data: formData,
        onprogress: onProgress,
      })) as FileEntity;
      onFileUpdate(result);
      setUploading(false);
    } catch (xhr: any) {
      setUploading(false);
      // abort handle
      if (xhr.readyState === 0 && xhr.status === 0) {
        if (fileUploader.current) {
          fileUploader.current.value = '';
        }
        setCurrentFile(undefined);
        return;
      }
      alert(
        JSON.stringify({
          type: 'error',
          message: 'datasetCreation.stepOne.uploader.failed',
        })
      );
      return;
    }
  };
  const onProgress = useCallback(
    (e: ProgressEvent) => {
      if (e.lengthComputable) {
        const percent = Math.floor((e.loaded / e.total) * 100);
        setPercent(percent);
      }
    },
    [setPercent]
  );
  const abort = () => {
    const currentXHR = uploadPromise.current;
    currentXHR.abort();
  };

  // utils
  const getFileType = (currentFile: File) => {
    if (!currentFile) {
      return '';
    }
    const arr = currentFile.name.split('.');
    return arr[arr.length - 1];
  };
  const getFileName = (name: string) => {
    const arr = name.split('.');
    return arr.slice(0, -1).join();
  };
  const getFileSize = (size: number) => {
    if (size / 1024 < 10) {
      return `${(size / 1024).toFixed(2)}KB`;
    }
    return `${(size / 1024 / 1024).toFixed(2)}MB`;
  };
  const isValid = (file: File) => {
    const {size} = file;
    const ext = `.${getFileType(file)}`;
    const isValidType = ACCEPTS.includes(ext);
    if (!isValidType) {
      alert({
        type: 'error',
        message: 'datasetCreation.stepOne.uploader.validation.typeError',
      });
    }
    const isValidSize = size <= MAX_SIZE;
    if (!isValidSize) {
      alert({
        type: 'error',
        message: 'datasetCreation.stepOne.uploader.validation.size',
      });
    }
    return isValidType && isValidSize;
  };

  useEffect(() => {
    dropRef.current?.addEventListener('dragenter', handleDragEnter);
    dropRef.current?.addEventListener('dragover', handleDragOver);
    dropRef.current?.addEventListener('dragleave', handleDragLeave);
    dropRef.current?.addEventListener('drop', handleDrop);
    return () => {
      dropRef.current?.removeEventListener('dragenter', handleDragEnter);
      dropRef.current?.removeEventListener('dragover', handleDragOver);
      dropRef.current?.removeEventListener('dragleave', handleDragLeave);
      dropRef.current?.removeEventListener('drop', handleDrop);
    };
  }, []);

  return (
    <div className={s.fileUploader}>
      <input
        ref={fileUploader}
        style={{display: 'none'}}
        type="file"
        id="fileUploader"
        accept={ACCEPTS.join(',')}
        onChange={fileChangeHandle}
        multiple
      />
      <div className={s.title}>{'Upload a PDF or image (5mb max)'}</div>
      <div ref={dropRef}>
        {!currentFile && !file && (
          <div className={cn(s.uploader, dragging && s.dragging)}>
            <span>{'Upload'}</span>
            <label className={s.browse} onClick={selectHandle}>
              {'browse'}
            </label>
            {dragging && <div ref={dragRef} className={s.draggingCover} />}
          </div>
        )}
      </div>
      {currentFile && (
        <div className={cn(s.file, uploading && s.uploading)}>
          {uploading && (
            <div className={s.progressbar} style={{width: `${percent}%`}} />
          )}
          <div className={cn(s.fileIcon, s[getFileType(currentFile)])} />
          <div className={s.fileInfo}>
            <div className={s.filename}>
              <span className={s.name}>{getFileName(currentFile.name)}</span>
              <span className={s.extension}>{`.${getFileType(
                currentFile
              )}`}</span>
            </div>
            <div className={s.fileExtraInfo}>
              <span className={s.size}>{getFileSize(currentFile.size)}</span>
              <span className={s.error}></span>
            </div>
          </div>
          <div className={s.actionWrapper}>
            {uploading && (
              <>
                <div className={s.percent}>{`${percent}%`}</div>
                <div className={s.divider} />
                <div className={s.buttonWrapper}>
                  <Button
                    className={cn(s.button, 'ml-2 !h-8 bg-slate-300')}
                    onClick={abort}
                  >
                    {'Cancel'}
                  </Button>
                </div>
              </>
            )}
            {!uploading && (
              <>
                <div className={s.buttonWrapper}>
                  <Button
                    variant={'default'}
                    className={cn(s.button, 'ml-2 !h-8 bg-slate-300')}
                    onClick={selectHandle}
                  >
                    Change
                  </Button>
                  <div className={s.divider} />
                  <button className={s.remove} onClick={removeFile} />
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {!currentFile && file && (
        <div className={cn(s.file)}>
          <div className={cn(s.fileIcon, s[file.extension])} />
          <div className={s.fileInfo}>
            <div className={s.filename}>
              <span className={s.name}>{getFileName(file.name)}</span>
              <span className={s.extension}>{`.${file.extension}`}</span>
            </div>
            <div className={s.fileExtraInfo}>
              <span className={s.size}>{getFileSize(file.size)}</span>
              <span className={s.error}></span>
            </div>
          </div>
          <div className={s.actionWrapper}>
            <div className={s.buttonWrapper}>
              <Button
                className={cn(s.button, 'ml-2 !h-8 bg-background')}
                onClick={selectHandle}
              >
                {'change'}
              </Button>
              <div className={s.divider} />
              <div className={s.remove} onClick={removeFile} />
            </div>
          </div>
        </div>
      )}
      <div className={s.tip}>{'10mb max file size'}</div>
    </div>
  );
};

export default FileUploader;