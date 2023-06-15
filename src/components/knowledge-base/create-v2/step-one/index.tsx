'use client';
import React, {useState} from 'react';

import type {File} from '@/models/datasets';
import FilePreview from '../file-preview';
import FileUploader from '../file-uploader';
import EmptyDatasetCreationModal from '../empty-dataset-creation-modal';
// import Button from '../../../common/base/button';
import {Button} from '../../../common/deska-kit-base/button';
import {
  TbFile,
  TbWorld,
  TbBrandGoogle,
  TbBrandNotion,
  TbBrandAsana,
} from 'react-icons/tb';

import cn from 'classnames';
import s from './index.module.css';

type IStepOneProps = {
  datasetId?: string;
  file?: File;
  updateFile: (file?: File) => void;
  onStepChange: () => void;
};
type DataSourceType = 'FILE' | 'NOTION' | 'ASANA' | 'GOOGLE_DRIVE' | 'WEB';

const StepOne = ({
  datasetId,
  onStepChange,
  file,
  updateFile,
}: IStepOneProps) => {
  const [dataSourceType, setDataSourceType] = useState<DataSourceType>('WEB');
  const [showModal, setShowModal] = useState(false);

  const modalShowHandle = () => setShowModal(true);

  const modalCloseHandle = () => setShowModal(false);

  const uploadContent = null;
  switch (dataSourceType) {
    case 'WEB':
      return <div className="flex w-full h-full">web</div>;
    case 'NOTION':
      return <div>NOTION</div>;
    case 'FILE':
      return <FileUploader onFileUpdate={updateFile} file={file} />;
    default:
      break;
  }

  return (
    <div className="flex w-full h-full">
      <div className="grow overflow-y-auto relative">
        <div className={s.stepHeader}>{'Step 1: Upload Datasource'}</div>
        <div className={s.form}>
          <div className={s.dataSourceTypeList}>
            {/* <div
              className={cn(
                s.dataSourceItem,
                s.disabled,
                dataSourceType === 'notion' && s.active
              )}
            // onClick={() => setDataSourceType('notion')}
            >
              <span className={s.comingTag}>Coming soon</span>
              <span className={cn(s.datasetIcon, s.notion)} />
              {'datasetCreation.stepOne.dataSourceType.notion'}
            </div> */}
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

          <Button
            disabled={!file}
            // className={s.submitButton}
            variant={'default'}
            onClick={onStepChange}
          >
            {'Finish upload'}
          </Button>
          {!datasetId && (
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
