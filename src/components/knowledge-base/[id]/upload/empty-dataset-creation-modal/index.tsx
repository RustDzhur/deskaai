'use client';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

// import { useContext } from 'use-context-selector'
import Modal from '../../../../common/base/modal';
import Input from '../../../../common/base/input';
import Button from '../../../../common/base/button';

// import { ToastContext } from '../../../common/base/toast'
// import { createEmptyDataset } from '@/service/datasets'

import cn from 'classnames';
import s from './index.module.css';

const createEmptyDataset = () => Promise.resolve();

type IProps = {
  show: boolean;
  onHide: () => void;
};

const EmptyDatasetCreationModal = ({show = false, onHide}: IProps) => {
  const [inputValue, setInputValue] = useState('');

  // const { notify } = useContext(ToastContext)
  const router = useHistory();

  const submit = async () => {
    if (!inputValue) {
      alert({
        type: 'error',
        message: 'datasetCreation.stepOne.modal.nameNotEmpty',
      });
      return;
    }
    if (inputValue.length > 40) {
      alert({
        type: 'error',
        message: 'datasetCreation.stepOne.modal.nameLengthInvaild',
      });
      return;
    }
    try {
      const dataset = await createEmptyDataset({name: inputValue});
      onHide();
      router.push(`/datasets/${dataset.id}/documents`);
    } catch (err) {
      alert({type: 'error', message: 'datasetCreation.stepOne.modal.failed'});
      return;
    }
  };

  return (
    <Modal
      isShow={show}
      onClose={onHide}
      className={cn(s.modal, '!max-w-[520px]', 'px-8')}
    >
      <div className={s.modalHeader}>
        <div className={s.title}>{'datasetCreation.stepOne.modal.title'}</div>
        <span className={s.close} onClick={onHide} />
      </div>
      <div className={s.tip}>{'datasetCreation.stepOne.modal.tip'}</div>
      <div className={s.form}>
        <div className={s.label}>{'datasetCreation.stepOne.modal.input'}</div>
        <Input
          className="!h-8"
          value={inputValue}
          placeholder={'datasetCreation.stepOne.modal.placeholder' || ''}
          onChange={setInputValue}
        />
      </div>
      <div className="flex flex-row-reverse">
        <Button className="w-24 ml-2" type="primary" onClick={submit}>
          {'datasetCreation.stepOne.modal.confirmButton'}
        </Button>
        <Button className="w-24" onClick={onHide}>
          {'datasetCreation.stepOne.modal.cancelButton'}
        </Button>
      </div>
    </Modal>
  );
};

export default EmptyDatasetCreationModal;
