import React from 'react';
import {Button} from '../deska-kit-base/button';
import {ConfirmLabels} from './context';
import {useModals} from './use-modal';

export interface ConfirmModalProps {
  id?: string;
  children?: React.ReactNode;
  onCancel?(): void;
  onConfirm?(): void;
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  cancelProps?: {} & React.ComponentPropsWithoutRef<'button'>;
  confirmProps?: {} & React.ComponentPropsWithoutRef<'button'>;
  groupProps?: {};
  labels?: ConfirmLabels;
}

export function ConfirmModal({
  id,
  cancelProps,
  confirmProps,
  labels = {cancel: '', confirm: ''},
  closeOnConfirm = true,
  closeOnCancel = true,
  groupProps,
  onCancel,
  onConfirm,
  children,
}: ConfirmModalProps) {
  const {cancel: cancelLabel, confirm: confirmLabel} = labels;
  const ctx = useModals();

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof cancelProps?.onClick === 'function' && cancelProps?.onClick(event);
    typeof onCancel === 'function' && onCancel();
    closeOnCancel && ctx.closeModal(id);
  };

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof confirmProps?.onClick === 'function' && confirmProps?.onClick(event);
    typeof onConfirm === 'function' && onConfirm();
    closeOnConfirm && ctx.closeModal(id);
  };

  return (
    <>
      {children && <div className=" mb-4">{children}</div>}

      <div {...groupProps}>
        <Button variant="default" {...cancelProps} onClick={handleCancel}>
          {cancelProps?.children || cancelLabel}
        </Button>

        <Button {...confirmProps} onClick={handleConfirm}>
          {confirmProps?.children || confirmLabel}
        </Button>
      </div>
    </>
  );
}
