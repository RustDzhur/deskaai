import React from 'react';
// import { getLocaleOnServer } from '@/i18n/server'
// import { useTranslation } from '@/i18n/i18next-serverside-config'
import Form from '../../form';

type Props = {
  params: {datasetId: string};
};

const Settings = async ({params: {datasetId}}: Props) => {
  // const locale = getLocaleOnServer()
  // const { t } = await useTranslation(locale, 'dataset-settings')

  return (
    <div className="bg-white h-full">
      <div className="px-6 py-3">
        <div className="mb-1 text-lg font-semibold text-gray-900">
          {'title'}
        </div>
        <div className="text-sm text-gray-500">{'desc'}</div>
      </div>
      <div>
        <Form datasetId={datasetId} />
      </div>
    </div>
  );
};

export default Settings;
