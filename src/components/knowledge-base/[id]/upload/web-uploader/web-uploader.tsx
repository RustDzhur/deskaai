import {useState} from 'react';
import {Button} from '../../../../common/deska-kit-base/button';
import {TextareaWithLabel} from '../../../../common/deska-kit-base/textarea';
import {AutoImportDialogTrigger} from './auto-import-dialog';

export const WebUploader = ({
  rawUrls,
  setRawUrls,
}: {
  rawUrls: any;
  setRawUrls: (urls: string) => void;
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-8">
        <AutoImportDialogTrigger setRawUrls={setRawUrls} />
        <p className="text-sm text-muted-foreground ml-2">
          Paste a single link to your web site to import data automatically.
        </p>
      </div>

      <TextareaWithLabel
        label="URLS"
        placeholder={`notion.so/domng/123
http(s)://docs.promptlayer.com/getting-started`}
        className="w-full h-32"
        footer="Paste your document URL here to import data. 1 URL per line."
        value={rawUrls}
        onChange={(e) => setRawUrls(e.target.value)}
      />
    </div>
  );
};
