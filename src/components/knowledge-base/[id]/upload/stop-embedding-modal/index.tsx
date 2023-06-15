'use client';
import React from 'react';

import Modal from '../../../../common/base/modal';
import Button from '../../../../common/base/button';

import cn from 'classnames';
import s from './index.module.css';

type IProps = {
  show: boolean;
  onConfirm: () => void;
  onHide: () => void;
};

const StopEmbeddingModal = ({show = false, onConfirm, onHide}: IProps) => {
  const submit = () => {
    onConfirm();
    onHide();
  };

  return (
    <Modal
      isShow={show}
      onClose={onHide}
      className={cn(s.modal, '!max-w-[480px]', 'px-8')}
    >
      <div className={s.icon} />
      <span className={s.close} onClick={onHide} />
      <div className={s.title}>{'datasetCreation.stepThree.modelTitle'}</div>
      <div className={s.content}>
        {'datasetCreation.stepThree.modelContent'}
      </div>
      <div className="flex flex-row-reverse">
        <Button className="w-24 ml-2" type="primary" onClick={submit}>
          {'datasetCreation.stepThree.modelButtonConfirm'}
        </Button>
        <Button className="w-24" onClick={onHide}>
          {'datasetCreation.stepThree.modelButtonCancel'}
        </Button>
      </div>
    </Modal>
  );
};

export default StopEmbeddingModal;
