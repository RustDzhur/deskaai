'use client';

import {forwardRef, useState} from 'react';
import classNames from 'classnames';

import style from './list.module.css';
import {Link} from 'react-router-dom';
import {TbPlus} from 'react-icons/tb';

import {useCreateCollectionDialog} from './create-collection-dialog';
import {Button} from '../common/deska-kit-base/button';

const CreateAppCard = forwardRef<HTMLAnchorElement>((_, ref) => {
  const [showNewAppDialog, setShowNewAppDialog] = useState(false);
  const [setOpen] = useCreateCollectionDialog((state) => [state.setOpen]);

  return (
    <button
      ref={ref}
      className={classNames(style.listItem, style.newItemCard)}
      onClick={() => setOpen(true)}
    >
      <div className={style.itemTitle}>
        <span
          className={classNames(
            'flex items-center justify-center w-8 h-8 border-border border-[1px] rounded-lg ',
            'grow-0 shrink-0 block bg-center bg-contain transition-colors duration-200 ease-in-out'
          )}
        >
          {/* <span
            className={classNames(style.newItemIconImage, style.newItemIconAdd)}
          /> */}

          <TbPlus size={24} />
        </span>
        <div
          className={classNames(
            style.listItemHeading,
            style.newItemCardHeading
          )}
        >
          {'Create new Collection'}
        </div>
      </div>
      <div className={style.listItemDescription}>
        {
          'Import data from in any format to give your bot knowledge on any topic.'
        }
      </div>
      {/* <div className='text-xs text-gray-500'>{('app.createFromConfigFile')}</div> */}
    </button>
  );
});

export default CreateAppCard;
