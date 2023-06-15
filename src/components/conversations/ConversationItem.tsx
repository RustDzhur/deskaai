import React from 'react';
import {Box, Flex} from 'theme-ui';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import {colors, Text} from '../common';
import {Badge} from '../common/deska-kit-base/badge';
import {UserOutlined, StarFilled} from '../icons';
import {formatShortRelativeTime} from '../../utils';
import {Conversation, Message} from '../../types';
import {
  getUserIdentifier,
  getUserProfilePhoto,
  isUnreadConversation,
} from './support';
import {useAuth} from '../auth/AuthProvider';
import {SenderAvatar} from './ChatMessage';

dayjs.extend(utc);

const formatConversation = (
  conversation: Conversation,
  messages: Array<Message> = []
) => {
  const recent = messages[messages.length - 1];
  const ts = recent ? recent.created_at : conversation.created_at;
  const created = dayjs.utc(ts);
  const date = formatShortRelativeTime(created);

  return {
    ...conversation,
    date: dayjs().diff(created, 'second') < 10 ? 'Just now' : date,
    preview: recent && recent.body ? recent.body : '...',
    agent: recent && recent.user ? recent.user : null,
    messages: messages,
  };
};

const ConversationItem = ({
  conversation,
  messages,
  color,
  isHighlighted,
  isCustomerOnline,
  onSelectConversation,
}: {
  conversation: Conversation;
  messages: Array<Message>;
  color: string;
  isHighlighted?: boolean;
  isCustomerOnline?: boolean;
  onSelectConversation: (id: string) => void;
}) => {
  const {currentUser} = useAuth();
  const formatted = formatConversation(conversation, messages);
  const {id, priority, status, customer, date, preview, agent} = formatted;
  const {name, email} = customer;
  const isPriority = priority === 'priority';
  const isClosed = status === 'closed';
  const isRead = !isUnreadConversation(conversation, currentUser);
  const agentAvatarPhotoUrl = agent ? getUserProfilePhoto(agent) : null;

  return (
    <Box
      id={`ConversationItem--${id}`}
      p={3}
      sx={{
        opacity: isClosed ? 0.8 : 1,
        // borderBottom: '1px solid #f0f0f0',
        // borderLeft: isHighlighted ? `2px solid ${colors.primaryAccent}` : null,
        background: isHighlighted ? colors.brand3 : null,
        cursor: 'pointer',
      }}
      className=" border-b border-border hover:bg-brand-6"
      onClick={() => onSelectConversation(id)}
    >
      <Flex mb={3} sx={{justifyContent: 'space-between', alignItems: 'center'}}>
        <Flex sx={{alignItems: 'center'}}>
          <Box mr={2}>
            <Flex
              sx={{
                bg: isPriority && color === colors.gold ? colors.bg : color,
                opacity: 0.6,
                height: 24,
                width: 24,
                fontSize: 24,
                borderRadius: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
              }}
            >
              {isPriority ? (
                <StarFilled style={{fontSize: 12, color: colors.gold}} />
              ) : (
                <UserOutlined style={{fontSize: 12, color: colors.white}} />
              )}
            </Flex>
          </Box>
          <Text
            strong
            style={{
              maxWidth: isCustomerOnline || date.length > 4 ? 156 : 164,
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {name || email || 'Anonymous User'}
          </Text>
        </Flex>

        {isRead ? (
          isCustomerOnline ? (
            <Badge>Online</Badge>
          ) : (
            <p className="leading-7">{date}</p>
          )
        ) : (
          <Badge>processing</Badge>
        )}
      </Flex>

      <Flex sx={{alignItems: 'center'}}>
        {!!agent && (
          <SenderAvatar
            sx={{opacity: agentAvatarPhotoUrl ? 0.8 : 0.4, bg: colors.gray[0]}}
            isAgent
            size={16}
            name={getUserIdentifier(agent)}
            avatarPhotoUrl={agentAvatarPhotoUrl}
            color={color}
          />
        )}
        <Box
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '90%',
          }}
        >
          {isRead ? (
            <p className="leading-7 text-secondary-foreground">{preview}</p>
          ) : (
            <p className="leading-7 font-bold">{preview}</p>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default ConversationItem;
