/* eslint-disable no-mixed-operators */
'use client';
import type {FC} from 'react';
import React, {useEffect, useState} from 'react';
import {TbTrash, TbWorld, TbFile, TbSettings} from 'react-icons/tb';
import dayjs from 'dayjs';
// @ts-ignore
import {pick} from 'lodash-es';
import {useHistory} from 'react-router-dom';
import cn from 'classnames';
import s from './documents.module.css';
import Popover from '../../../../common/base/popover';
import {asyncRunSafe} from '../../../../../lib/async-run-safe';
import {formatNumber} from '../../../../../lib/format-text';
import {modals} from '../../../../common/modal-manager/events';
import {TextareaWithLabel} from '../../../../common/deska-kit-base/textarea';
import {KnowledgeBaseArticle} from '../../../../../types/KnowledgeBaseArticle';

// TODO: FIXME: MOCK archiveDocument, deleteDiocument, disableDocument, enableDocument and return an empty promise
const archiveDocument = () => Promise.resolve();
const deleteDocument = () => Promise.resolve();
const disableDocument = () => Promise.resolve();
const enableDocument = () => Promise.resolve();

export const SettingsIcon: FC<{className?: string}> = ({className}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ''}
    >
      <path
        d="M2 5.33325L10 5.33325M10 5.33325C10 6.43782 10.8954 7.33325 12 7.33325C13.1046 7.33325 14 6.43782 14 5.33325C14 4.22868 13.1046 3.33325 12 3.33325C10.8954 3.33325 10 4.22868 10 5.33325ZM6 10.6666L14 10.6666M6 10.6666C6 11.7712 5.10457 12.6666 4 12.6666C2.89543 12.6666 2 11.7712 2 10.6666C2 9.56202 2.89543 8.66659 4 8.66659C5.10457 8.66659 6 9.56202 6 10.6666Z"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FilePlusIcon: FC<{className?: string}> = ({className}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ''}
    >
      <path
        d="M13.3332 6.99992V4.53325C13.3332 3.41315 13.3332 2.85309 13.1152 2.42527C12.9234 2.04895 12.6175 1.74299 12.2412 1.55124C11.8133 1.33325 11.2533 1.33325 10.1332 1.33325H5.8665C4.7464 1.33325 4.18635 1.33325 3.75852 1.55124C3.3822 1.74299 3.07624 2.04895 2.88449 2.42527C2.6665 2.85309 2.6665 3.41315 2.6665 4.53325V11.4666C2.6665 12.5867 2.6665 13.1467 2.88449 13.5746C3.07624 13.9509 3.3822 14.2569 3.75852 14.4486C4.18635 14.6666 4.7464 14.6666 5.8665 14.6666H7.99984M9.33317 7.33325H5.33317M6.6665 9.99992H5.33317M10.6665 4.66659H5.33317M11.9998 13.9999V9.99992M9.99984 11.9999H13.9998"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArchiveIcon: FC<{className?: string}> = ({className}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ''}
    >
      <path
        d="M2.66683 5.33106C2.55749 5.32824 2.47809 5.32191 2.40671 5.30771C1.87779 5.2025 1.46432 4.78904 1.35912 4.26012C1.3335 4.13132 1.3335 3.97644 1.3335 3.66667C1.3335 3.3569 1.3335 3.20201 1.35912 3.07321C1.46432 2.54429 1.87779 2.13083 2.40671 2.02562C2.53551 2 2.69039 2 3.00016 2H13.0002C13.3099 2 13.4648 2 13.5936 2.02562C14.1225 2.13083 14.536 2.54429 14.6412 3.07321C14.6668 3.20201 14.6668 3.3569 14.6668 3.66667C14.6668 3.97644 14.6668 4.13132 14.6412 4.26012C14.536 4.78904 14.1225 5.2025 13.5936 5.30771C13.5222 5.32191 13.4428 5.32824 13.3335 5.33106M6.66683 8.66667H9.3335M2.66683 5.33333H13.3335V10.8C13.3335 11.9201 13.3335 12.4802 13.1155 12.908C12.9238 13.2843 12.6178 13.5903 12.2415 13.782C11.8137 14 11.2536 14 10.1335 14H5.86683C4.74672 14 4.18667 14 3.75885 13.782C3.38252 13.5903 3.07656 13.2843 2.88482 12.908C2.66683 12.4802 2.66683 11.9201 2.66683 10.8V5.33333Z"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const useIndexStatus = () => {
  return {
    '': {color: 'gray', text: 'Unknown'}, // unknown
    queuing: {color: 'orange', text: 'Queueing'}, // waiting
    indexing: {color: 'blue', text: 'Indexing'}, // indexing splitting parsing cleaning
    paused: {color: 'orange', text: 'Parsed'}, // paused
    error: {color: 'red', text: 'Error'}, // error
    available: {color: 'green', text: 'Available'}, // completed，archived = false，enabled = true
    enabled: {color: 'green', text: 'Enabled'}, // completed，archived = false，enabled = true
    disabled: {color: 'gray', text: 'Disabled'}, // completed，archived = false，enabled = false
    archived: {color: 'gray', text: 'archived'}, // completed，archived = true
  };
};

// status item for list
export const StatusItem: FC<{
  status: DocumentDisplayStatus;
  reverse?: boolean;
  scene?: 'list' | 'detail';
  textCls?: string;
}> = ({status, reverse = false, scene = 'list', textCls = ''}) => {
  const DOC_INDEX_STATUS_MAP = useIndexStatus();
  const localStatus =
    status?.toLowerCase() as keyof typeof DOC_INDEX_STATUS_MAP;
  return (
    <div
      className={cn(
        'flex items-center',
        reverse ? 'flex-row-reverse' : '',
        scene === 'detail' ? s.statusItemDetail : ''
      )}
    >
      {/* <Indicator color={DOC_INDEX_STATUS_MAP[localStatus]?.color as IndicatorProps['color']} className={reverse ? 'ml-2' : 'mr-2'} /> */}
      <span className={cn('text-slate-400 text-sm', textCls)}>
        {DOC_INDEX_STATUS_MAP[localStatus || '']?.text}
      </span>
    </div>
  );
};

type OperationName = 'delete' | 'archive' | 'enable' | 'disable';

// operation action for list and detail
export const OperationAction: FC<{
  detail: {
    enabled: boolean;
    archived: boolean;
    id: string;
  };
  doc: KnowledgeBaseArticle;
  datasetId: string;
  onUpdate: () => void;
  scene?: 'list' | 'detail';
  className?: string;
}> = ({datasetId, detail, onUpdate, scene = 'list', className = '', doc}) => {
  const {id, enabled = false, archived = false} = detail || {};
  const [showModal, setShowModal] = useState(false);
  // const { notify } = useContext(ToastContext)

  const isListScene = scene === 'list';

  const onOperate = async (operationName: OperationName) => {
    let opApi = deleteDocument;
    switch (operationName) {
      case 'archive':
        opApi = archiveDocument;
        break;
      case 'enable':
        opApi = enableDocument;
        break;
      case 'disable':
        opApi = disableDocument;
        break;
      default:
        opApi = deleteDocument;
        break;
    }
    const [e] = await asyncRunSafe<any>(
      opApi({datasetId, documentId: id}) as Promise<any>
    );
    if (!e)
      alert(
        JSON.stringify({
          type: 'success',
          message: 'common.actionMsg.modifiedSuccessfully',
        })
      );
    else
      alert(
        JSON.stringify({
          type: 'error',
          message: 'common.actionMsg.modificationFailed',
        })
      );
    onUpdate();
  };

  return (
    <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
      {/* {isListScene && (
        <>
          {archived ? (
            <Tooltip
              selector={`list-switch-${id}`}
              content={'warning' as string}
              className="!font-semibold"
            >
              <div>
                <Switch
                  defaultValue={false}
                  onChange={() => { }}
                  disabled={true}
                  size="md"
                />
              </div>
            </Tooltip>
          ) : (
            <Switch
              defaultValue={enabled}
              onChange={(v) => onOperate(v ? 'enable' : 'disable')}
              size="md"
            />
          )}
          <Divider className="!ml-4 !mr-2 !h-3" type="vertical" />
        </>
      )} */}
      <Popover
        htmlContent={
          <div className="w-full py-1">
            {/* {!isListScene && (
              <>
                <div className="flex justify-between items-center mx-4 pt-2">
                  <span className={cn(s.actionName, 'font-medium')}>
                    {!archived && enabled
                      ? 'datasetDocuments.list.index.enable'
                      : 'datasetDocuments.list.index.disable'}
                  </span>
                  <Tooltip
                    selector={`detail-switch-${id}`}
                    content={'Warning' as string}
                    className="!font-semibold"
                    disabled={!archived}
                  >
                    <div>
                      <Switch
                        defaultValue={archived ? false : enabled}
                        onChange={(v) =>
                          !archived && onOperate(v ? 'enable' : 'disable')
                        }
                        disabled={archived}
                        size="md"
                      />
                    </div>
                  </Tooltip>
                </div>
                <div className="mx-4 pb-1 pt-0.5 text-xs text-gray-500">
                  {!archived && enabled
                    ? 'datasetDocuments.list.index.enableTip'
                    : 'datasetDocuments.list.index.disableTip'}
                </div>
                <Divider />
              </>
            )} */}
            {/* <div className={s.actionItem}>
            <SettingsIcon />
            <span className={s.actionName}>{('datasetDocuments.list.action.settings')}</span>
          </div>
          <div className={s.actionItem} onClick={() => router.push(`/datasets/${datasetId}/documents/create`)}>
            <FilePlusIcon />
            <span className={s.actionName}>{('datasetDocuments.list.action.uploadFile')}</span>
          </div>
          <Divider className='my-1' /> */}
            {!archived && (
              <div
                className={s.actionItem}
                // onClick={() => onOperate('archive')}
                onClick={() => {
                  previewContent(doc);
                }}
              >
                <ArchiveIcon />
                <span className={s.actionName}>{'View'}</span>
              </div>
            )}
            <div
              className={cn(s.actionItem, s.deleteActionItem, 'group')}
              // onClick={() => setShowModal(true)}
              onClick={() => onOperate('delete')}
            >
              <TbTrash
                className={
                  'w-4 h-4 stroke-current text-gray-500 stroke-2 group-hover:text-red-500'
                }
              />
              <span className={cn(s.actionName, 'group-hover:text-red-500')}>
                {'Delete'}
              </span>
            </div>
          </div>
        }
        trigger="click"
        position="br"
        btnElement={
          <div className={cn(s.actionIcon, s.commonIcon)}>
            <TbSettings />
          </div>
        }
        btnClassName={(open) =>
          cn(
            isListScene ? s.actionIconWrapperList : s.actionIconWrapperDetail,
            open ? '!bg-gray-100 !shadow-none' : '!bg-transparent'
          )
        }
        className={`!w-[200px] h-fit !z-20 ${className}`}
      />
      {/* {showModal && (
        <Modal
          isShow={showModal}
          onClose={() => setShowModal(false)}
          className={s.delModal}
          closable
        >
          <div>
            <div className={s.warningWrapper}>
              <ExclamationCircleIcon className={s.warningIcon} />
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-1">
              {'Are you sure you want to delete this document?'}
            </div>
            <div className="text-sm text-gray-500 mb-10">
              {'datasetDocuments.list.delete.content'}
            </div>
            <div className="flex gap-2 justify-end">
              <Button onClick={() => setShowModal(false)}>
                {'Cancel'}
              </Button>
              <Button
                type="warning"
                onClick={() => onOperate('delete')}
                className="border-red-700 border-[0.5px]"
              >
                {'Ok'}
              </Button>
            </div>
          </div>
        </Modal>
      )} */}
    </div>
  );
};

export const renderTdValue = (
  value: string | number | null,
  isEmptyStyle = false
) => {
  return (
    <div
      className={cn(
        isEmptyStyle ? 'text-gray-400' : 'text-slate-400',
        s.tdValue
      )}
    >
      {value ?? '-'}
    </div>
  );
};

const renderCount = (count: number | undefined) => {
  if (!count) return renderTdValue(0, true);

  if (count < 1000) return count;

  return `${formatNumber((count / 1000).toFixed(1))}k`;
};

type IDocumentListProps = {
  documents: DocumentListResponse['data'];
  datasetId: string;
  onUpdate: () => void;
};

const previewContent = (doc: KnowledgeBaseArticle) =>
  modals.openConfirmModal({
    title: 'Please confirm your action',
    children: <TextareaWithLabel>{doc?.content?.trim()}</TextareaWithLabel>,
    labels: {confirm: 'Confirm', cancel: 'Cancel'},
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

/**
 * Document list component including basic information
 */
const DocumentList: FC<IDocumentListProps> = ({
  documents = [],
  datasetId,
  onUpdate,
}) => {
  // const router = useRouter()
  const navigate = useHistory();
  const [localDocs, setLocalDocs] =
    useState<DocumentListResponse['data']>(documents);
  const [enableSort, setEnableSort] = useState(false);

  useEffect(() => {
    setLocalDocs(documents);
  }, [documents]);

  const onClickSort = () => {
    setEnableSort(!enableSort);
    if (!enableSort) {
      const sortedDocs = [...localDocs].sort((a, b) =>
        dayjs(a.created_at).isBefore(dayjs(b.created_at)) ? -1 : 1
      );
      setLocalDocs(sortedDocs);
    } else {
      setLocalDocs(documents);
    }
  };

  return (
    <>
      <table
        className={`w-full border-collapse border-0 text-sm mt-3 ${s.documentTable}`}
      >
        <thead className="h-8 leading-normal border-b border-border text-gray-500 font-medium text-xs uppercase">
          <tr>
            {/* <td className="w-12">#</td> */}
            <td>{'Document name'}</td>
            <td className="w-24">{'Word count'}</td>
            {/* <td className="w-24">{'hit count'}</td> */}
            {/* <td className="w-44">
              <div className="flex justify-between items-center">
                {'Upload time'}
                <ArrowDownIcon
                  className={cn(
                    'h-3 w-3 stroke-current stroke-2 cursor-pointer',
                    enableSort ? 'text-gray-500' : 'text-gray-300'
                  )}
                  onClick={onClickSort}
                />
              </div>
            </td> */}
            <td className="w-40">{'status'}</td>
            <td className="w-20">{'action'}</td>
          </tr>
        </thead>
        <tbody className="text-slate-400">
          {localDocs.map((doc: KnowledgeBaseArticle) => {
            const suffix = doc.title; //.title.split('.').pop() || 'txt';
            return (
              <tr
                key={doc.id}
                className={
                  'border-b border-border h-8 hover:bg-brand-6 cursor-pointer'
                }
                onClick={() => {
                  previewContent(doc);
                }}
              >
                {/* <td className="text-left align-middle text-gray-500 text-xs">
                  {doc.position}
                </td> */}
                <td className={s.tdValue}>
                  {/* <div
                    className={cn(
                      s[
                      `${doc?.data_source_info?.upload_file?.extension ??
                      suffix
                      }Icon`
                      ],
                      s.commonIcon,
                      'mr-1.5'
                    )}
                  ></div> */}
                  <ExtensionIconMap doc={doc} />
                  <span>
                    {doc?.title?.replace(/\.[^/.]+$/, '')}
                    {/* <span className="text-gray-500">{suffix}</span> */}
                  </span>
                </td>
                <td>{renderCount(doc.content?.length)}</td>
                {/* <td>{renderCount(doc.hit_count)}</td> */}
                {/* <td className="text-gray-500 text-[13px]">
                  {dayjs
                    .unix(doc.created_at)
                    .format('UTC' as string)}
                </td> */}
                <td>
                  <StatusItem status={doc.display_status} />
                </td>
                <td>
                  <OperationAction
                    datasetId={datasetId}
                    doc={doc}
                    detail={doc as any}
                    onUpdate={onUpdate}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const ExtensionIconMap = ({doc}: {doc: KnowledgeBaseArticle}) => {
  switch (doc?.source_type) {
    case 'WEB':
      return <TbWorld />;
    default:
      return <TbFile />;
  }
};

export {DocumentList};
