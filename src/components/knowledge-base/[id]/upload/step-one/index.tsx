'use client';
import React, {useState} from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';
// import type { File } from '@/models/datasets';
// import FilePreview from '../file-preview';
import FileUploader from '../file-uploader';
import EmptyDatasetCreationModal from '../empty-dataset-creation-modal';
// import Button from '../../../common/base/button';
import {Button} from '../../../../common/deska-kit-base/button';
import {
  TbFile,
  TbWorld,
  TbBrandGoogle,
  TbBrandNotion,
  TbBrandAsana,
} from 'react-icons/tb';

import cn from 'classnames';
import s from './index.module.css';
import {WebUploader} from '../web-uploader/web-uploader';
import toast from 'react-hot-toast';
import {
  preprocessDocument,
  uploadKnowledgeBaseDocuments,
} from '../../../../../api';

type IStepOneProps = {
  // datasetId?: string;
  file?: File;
  updateFile: (file?: File) => void;
  onStepChange: () => void;
};
type DataSourceType = 'FILE' | 'NOTION' | 'ASANA' | 'GOOGLE_DRIVE' | 'WEB';

const StepOne = ({
  // datasetId,
  onStepChange,
  file,
  updateFile,
}: IStepOneProps) => {
  const {collectionId} = useParams();
  const [dataSourceType, setDataSourceType] = useState<DataSourceType>('WEB');
  const [showModal, setShowModal] = useState(false);

  const modalShowHandle = () => setShowModal(true);

  const modalCloseHandle = () => setShowModal(false);

  const [rawUrls, setRawUrls] = useState<string>('');
  const [documents, setDocuments] = useState<any[]>([]);
  const history = useHistory();

  let uploadContent = null;
  switch (dataSourceType) {
    case 'WEB': {
      uploadContent = <WebUploader rawUrls={rawUrls} setRawUrls={setRawUrls} />;
      break;
    }
    case 'NOTION': {
      uploadContent = <WebUploader rawUrls={rawUrls} setRawUrls={setRawUrls} />;
      break;
    }
    case 'FILE': {
      uploadContent = <FileUploader onFileUpdate={updateFile} file={file} />;
      break;
    }
    default:
      break;
  }

  const [loadingStatus, setLoadingStatus] = useState<string>();

  const uploadDocuments = async (e: any) => {
    // parse urls
    let toastId = toast.loading('Fetching data from urls...');
    try {
      const urls = rawUrls
        ?.split('\n')
        .map((url) => url.trim())
        .filter((url) => url.length > 0)
        .map((url) => {
          const urlObj = new URL(url);
          return url.toString();
        });

      const docs = await preprocessDocument({
        urls,
        collectionId: 'test',
      });

      toast.dismiss(toastId);
      toastId = toast.loading(
        'Found ' + docs.length + ' documents. Processing...'
      );

      toast.dismiss(toastId);
      toastId = toast.loading('Indexing documents...');
      const uploadedResult = await uploadKnowledgeBaseDocuments({
        documents: docs.map((doc) => doc.docs).flat(),
        collectionId: collectionId || '',
      });

      toast.success('Successfully uploaded documents');
      history.push(`/knowledge-base/${collectionId}`);
    } catch (e) {
      toast.error('Failed to upload documents');
    } finally {
      toast.dismiss(toastId);
      setLoadingStatus('success');
    }
  };

  return (
    <div className="flex w-full h-full max-w-[800px] mx-auto">
      <div className="grow overflow-y-auto relative">
        <div className={s.stepHeader}>{'Choose your Data source'}</div>
        <div className={s.form}>
          <div className={s.dataSourceTypeList}>
            <div
              className={cn(
                s.dataSourceItem,
                dataSourceType === 'WEB' && s.active
              )}
              onClick={() => setDataSourceType('WEB')}
            >
              <TbWorld className={cn(s.datasetIcon)} />
              {'Web site'}
            </div>
            <div
              className={cn(
                'w-36',
                s.dataSourceItem,
                s.disabled,
                dataSourceType === 'FILE' && s.active
              )}
              // onClick={() => setDataSourceType('FILE')}
            >
              <span className={s.comingTag}>Coming soon</span>
              <TbFile className={cn(s.datasetIcon)} />
              {'File'}
            </div>
            <div
              className={cn(
                s.dataSourceItem,
                s.disabled,
                dataSourceType === 'GOOGLE_DRIVE' && s.active
              )}
              // onClick={() => setDataSourceType('GOOGLE_DRIVE')}
            >
              <span className={s.comingTag}>Coming soon</span>
              <TbBrandGoogle className={cn(s.datasetIcon)} />
              {'Google Drive'}
            </div>
            <div
              className={cn(
                s.dataSourceItem,
                s.disabled,
                dataSourceType === 'NOTION' && s.active
              )}
              // onClick={() => setDataSourceType('NOTION')}
            >
              <span className={s.comingTag}>Coming soon</span>
              <TbBrandNotion className={cn(s.datasetIcon)} />
              {'Notion'}
            </div>
            <div
              className={cn(
                s.dataSourceItem,
                s.disabled,
                dataSourceType === 'ASANA' && s.active
              )}
              // onClick={() => setDataSourceType('ASANA')}
            >
              <span className={s.comingTag}>Coming soon</span>
              <TbBrandAsana className={cn(s.datasetIcon)} />
              {'Asana'}
            </div>
          </div>

          {uploadContent}
          <Button
            disabled={dataSourceType === 'WEB' && !rawUrls?.trim()}
            // className={s.submitButton}
            variant={'default'}
            onClick={uploadDocuments}
          >
            {'Create collection'}
          </Button>
          {!collectionId && (
            <>
              <div className={s.dividerLine} />
              <div onClick={modalShowHandle} className={s.OtherCreationOption}>
                {'Create empty collection'}
              </div>
            </>
          )}
        </div>
        <EmptyDatasetCreationModal show={showModal} onHide={modalCloseHandle} />
      </div>

      {/* TODO: Use this in the future */}
      {/* {file && <FilePreview file={file} />} */}
    </div>
  );
};

export default StepOne;
