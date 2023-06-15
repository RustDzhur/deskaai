import React from 'react';
import {Box, Flex} from 'theme-ui';
import {Button, Text} from '../common';
import ConversationItem from './ConversationItem';
import ConversationClosing from './ConversationClosing';
import {getColorByUuid} from './support';
import {Conversation} from '../../types';
import {isScrolledIntoView, sleep} from '../../utils';
import {useNotifications} from './NotificationsProvider';
import {ScrollArea} from '../common/deska-kit-base/scroll-area';
import {useLocation} from 'react-router-dom';
import Loading from '../common/base/loading';

const ConversationsPreviewList = ({
  loading,
  selectedConversationId,
  conversations = [],
  hasMoreConversations,
  isConversationClosing,
  onSelectConversation,
  onLoadMoreConversations,
}: {
  loading: boolean;
  selectedConversationId: string | null;
  conversations: Array<Conversation>;
  hasMoreConversations?: boolean;
  isConversationClosing: (conversationId: string) => boolean;
  onSelectConversation: (conversationId: string | null) => any;
  onLoadMoreConversations: () => Promise<void>;
}) => {
  const [isFetchingMore, setFetchingMore] = React.useState(false);
  const {isCustomerOnline} = useNotifications();

  const location = useLocation();
  React.useEffect(() => {
    if (
      selectedConversationId &&
      conversations.map((c) => c.id).indexOf(selectedConversationId) !== -1
    ) {
      // Scrolls to highlighted ConversationItem component if not visible
      const el = document.getElementById(
        `ConversationItem--${selectedConversationId}`
      );

      if (!isScrolledIntoView(el)) {
        el?.scrollIntoView(false);
      }
    }
    // eslint-disable-next-line
  }, [selectedConversationId]);

  const handleLoadMoreConversations = async () => {
    setFetchingMore(true);

    await sleep(400);
    await onLoadMoreConversations();
    await sleep(400);

    setFetchingMore(false);
  };

  return (
    <ScrollArea id="conversation-preview-list" className="flex-1">
      {!loading && conversations.length ? (
        conversations.map((conversation) => {
          const {
            id: conversationId,
            customer_id: customerId,
            // NB: we only care about the most recent message
            messages = [],
          } = conversation;
          const isOnline = isCustomerOnline(customerId);
          const isActive =
            location.pathname?.split('/')?.pop() === conversationId;

          const isHighlighted =
            conversationId === selectedConversationId || isActive;

          const isClosing = isConversationClosing(conversationId);
          const color = getColorByUuid(customerId);

          if (isClosing) {
            return (
              <ConversationClosing
                key={conversationId}
                isHighlighted={isHighlighted}
              />
            );
          }

          return (
            <ConversationItem
              key={conversationId}
              conversation={conversation}
              messages={messages}
              isHighlighted={isHighlighted}
              isCustomerOnline={isOnline}
              color={color}
              onSelectConversation={onSelectConversation}
            />
          );
        })
      ) : (
        <div className="flex flex-row justify-center items-center my-3">
          <Text type="secondary">
            {loading ? <Loading /> : 'No conversations'}
          </Text>
        </div>
      )}

      {!loading && conversations.length > 0 && !!hasMoreConversations && (
        <Flex px={2} sx={{justifyContent: 'center'}}>
          <Button
            type="text"
            style={{width: '100%'}}
            loading={isFetchingMore}
            onClick={handleLoadMoreConversations}
          >
            Load more...
          </Button>
        </Flex>
      )}
    </ScrollArea>
  );
};

export default ConversationsPreviewList;
