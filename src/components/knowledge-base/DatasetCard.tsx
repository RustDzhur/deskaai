'use client';

import {Link} from 'react-router-dom';
import type {MouseEventHandler} from 'react';
import {useCallback, useState} from 'react';
import style from './list.module.css';
import Confirm from '../common/base/confirm';
import AppIcon from '../common/base/app-icon';
import classNames from 'classnames';
import {TbFile} from 'react-icons/tb';
import {KnowledgeBaseCollection} from '../../types/KnowledgeBaseCollection';

export type DatasetCardProps = {
  collection: KnowledgeBaseCollection;
  onDelete?: () => void;
};

const DatasetCard = ({collection, onDelete}: DatasetCardProps) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const onConfirmDelete = useCallback(async () => {
    try {
      if (onDelete) onDelete();
    } catch (e: any) {
      alert({
        type: 'error',
        message: `${'collection.datasetDeleteFailed'}${
          'message' in e ? `: ${e.message}` : ''
        }`,
      });
    }
    setShowConfirmDelete(false);
  }, [collection.id]);

  return (
    <>
      <Link to={`/knowledge-base/${collection.id}`} className={style.listItem}>
        <div className={style.itemTitle}>
          <AppIcon size="small" />
          <div className={style.listItemHeading}>
            <div className={style.listItemHeadingContent}>
              {collection.name}
            </div>
          </div>
          {/* <span className={style.deleteAppIcon} onClick={onDeleteClick} /> */}
        </div>
        <div className={style.listItemDescription}>
          {collection.description}
        </div>
        <div
          className={classNames(style.listItemFooter, style.datasetCardFooter)}
        >
          <span className={'flex flex-row justify-start items-center gap-2'}>
            <TbFile size={12} />
            {collection.document_count || 0}
            {' documents'}
          </span>
          {/* <span className={style.listItemStats}>
            <span
              className={classNames(style.listItemFooterIcon, style.textIcon)}
            />
            {Math.round(collection.word_count / 1000)}
            {'collection.wordCount'}
          </span> */}
          {/* <span className={style.listItemStats}>
            <span
              className={classNames(
                style.listItemFooterIcon,
                style.applicationIcon
              )}
            />
            {collection.app_count}
            {'collection.appCount'}
          </span> */}
        </div>

        {showConfirmDelete && (
          <Confirm
            title={'collection.deleteDatasetConfirmTitle'}
            content={'collection.deleteDatasetConfirmContent'}
            isShow={showConfirmDelete}
            onClose={() => setShowConfirmDelete(false)}
            onConfirm={onConfirmDelete}
            onCancel={() => setShowConfirmDelete(false)}
          />
        )}
      </Link>
    </>
  );
};

export default DatasetCard;
