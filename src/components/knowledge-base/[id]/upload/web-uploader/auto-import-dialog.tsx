// import { Label, Input } from "theme-ui"
import {Button} from '../../../../common/deska-kit-base/button';
import {Label} from '../../../../common/deska-kit-base/label';
import {Input} from '../../../../common/deska-kit-base/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../../common/deska-kit-base/dialog';
import {fetchUrlSitemaps} from '../../../../../api';
import {useState} from 'react';
import {set} from 'lodash';

export const AutoImportDialogTrigger = ({
  setRawUrls,
}: {
  setRawUrls: (urls: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={'secondaryOutline'}>Auto Import</Button>
      </DialogTrigger>

      <AutoImportDialog setRawUrls={setRawUrls} setOpenDialog={setOpen} />
    </Dialog>
  );
};

export const AutoImportDialog = ({
  setRawUrls,
  setOpenDialog,
}: {
  setRawUrls: (urls: string) => void;
  setOpenDialog: (open: boolean) => void;
}) => {
  const [sitemapUrl, setSitemapUrl] = useState<string>('');
  const [fetching, setFetching] = useState<boolean>(false);
  const uploadDocuments = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    // parse urls
    // const urls = rawUrls
    //   ?.split('\n')
    //   .map((url) => url.trim())
    //   .filter((url) => url.length > 0)
    //   .map((url) => {
    //     const urlObj = new URL(url)
    //     return {
    //       url,
    //       host: urlObj.host,
    //       path: urlObj.pathname,
    //     }
    //   })
    // setRawUrls(urls.join('\n'));

    setFetching(true);
    fetchUrlSitemaps({
      url: sitemapUrl,
    })
      .then((res) => {
        setRawUrls(res.urls?.join('\n'));
        // setDocuments(documents);
        console.log(res);
        if (res && res.urls?.length) {
          console.log(res.urls.join('\n'));
          setRawUrls(res.urls.join('\n'));
        }
        setOpenDialog(false);
      })
      .catch((err) => {
        alert('Error: ' + err.message);
      })
      .finally(() => {
        setFetching(false);
      });
  };
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Auto Website Import</DialogTitle>
        <DialogDescription>
          Paste a single link to your web site to import data automatically.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={uploadDocuments}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="name" className="text-right">
              Website URL
            </Label>
            <Input
              id="websiteUrl"
              type="url"
              placeholder="e.g domng.net"
              className="col-span-3"
              value={sitemapUrl}
              onChange={(e) => setSitemapUrl(e.target.value)}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" loading={fetching}>
            Auto import
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};
