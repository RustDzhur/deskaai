import {Button} from '../common/deska-kit-base/button';
import {TbArrowLeft, TbMessage} from 'react-icons/tb';
import {ScrollArea} from '../common/deska-kit-base/scroll-area';
import {CreateCollectionDialog} from './create-collection-dialog';
import {cn} from '../common/twable-classnames';
import {useHistory} from 'react-router-dom';

export const KnowledgeBaseLayout = ({
  children,
  className,
  bodyClassName,
}: {
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}) => {
  const history = useHistory();
  const location = history.location;

  // if pathname is '/knowledge-base'
  const isKnowledgeBaseLocation =
    location.pathname?.toLowerCase() === '/knowledge-base';

  // if end with /upload
  const isUploadLocation = location.pathname?.toLowerCase().endsWith('/upload');

  return (
    <div className="flex flex-col h-screen w-full">
      <nav
        className={cn(
          ` h-14 border-border border-b-[1px] px-4
          flex flex-row items-center
          `,
          className,
          isKnowledgeBaseLocation ? 'justify-end' : 'justify-between'
        )}
      >
        {!isKnowledgeBaseLocation ? (
          <Button
            size="xs"
            variant={'ghost'}
            className="flex flex-row gap-2"
            onClick={() => {
              if (isUploadLocation) {
                // go back from '/knowledge-base/:collectionId/upload' to '/knowledge-base/:collectionId'
                // can't use history.goBack() because it will go back to '/knowledge-base'
                history.push(location.pathname.replace('/upload', ''));
                return;
              } else {
                history.push('/knowledge-base');
              }
            }}
          >
            <TbArrowLeft />
            {isUploadLocation ? 'Back' : 'Knowledge Base'}
          </Button>
        ) : null}

        <Button
          size="xs"
          variant={'secondaryOutline'}
          className="flex flex-row gap-2"
        >
          <TbMessage />
          Feedback
        </Button>
      </nav>

      <section className={cn('px-12 flex-1 overflow-auto', bodyClassName)}>
        {/* <ScrollArea> */}
        {children}
        {/* </ScrollArea> */}
      </section>

      <CreateCollectionDialog />
    </div>
  );
};
