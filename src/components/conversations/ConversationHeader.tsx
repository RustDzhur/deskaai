import React from 'react';
import {Box, Flex} from 'theme-ui';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import {
  colors,
  Button,
  Popconfirm,
  // Select,
  Text,
  Title,
  Tooltip,
} from '../common';
import {TbUser} from 'react-icons/tb';
import {
  CheckOutlined,
  StarOutlined,
  StarFilled,
  UploadOutlined,
  // UserOutlined,
} from '../icons';
import {Conversation, User} from '../../types';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../common/deska-kit-base/select';
import {Button as DeskaButton} from '../common/deska-kit-base/button';
import IconButton from '../common/IconButton';

// TODO: create date utility methods so we don't have to do this everywhere
dayjs.extend(utc);

const UNASSIGNED = 'unassigned';

const ConversationHeader = ({
  conversation,
  users,
  onAssignUser,
  onMarkPriority,
  onRemovePriority,
  onCloseConversation,
  onReopenConversation,
  onDeleteConversation,
}: {
  conversation: Conversation | null;
  users: Array<User>;
  onAssignUser: (conversationId: string, userId: string | null) => void;
  onMarkPriority: (conversationId: string) => void;
  onRemovePriority: (conversationId: string) => void;
  onCloseConversation: (conversationId: string) => void;
  onReopenConversation: (conversationId: string) => void;
  onDeleteConversation: (conversationId: string) => void;
}) => {
  if (!conversation) {
    // No point in showing the header if no conversation exists
    return null;
  }

  const {
    id: conversationId,
    assignee_id,
    status,
    priority,
    customer,
  } = conversation;
  const {name, email} = customer;
  const assigneeId = assignee_id ? String(assignee_id) : undefined;
  const hasBothNameAndEmail = !!(name && email);

  const handleAssignUser = (userId: string) => {
    const assigneeId = userId === UNASSIGNED ? null : String(userId);

    onAssignUser(conversationId, assigneeId);
  };

  return (
    <header
      id="chat-conversation-header"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 2rem',
        zIndex: 1,
        opacity: status === 'closed' ? 0.8 : 1,
      }}
    >
      <Flex
        py={3}
        px={4}
        backgroundColor={colors.bg}
        sx={{justifyContent: 'space-between', alignItems: 'center'}}
      >
        <Box>
          <Flex sx={{alignItems: 'center'}}>
            <Title
              level={4}
              style={{
                marginBottom: hasBothNameAndEmail ? 0 : 4,
                marginTop: hasBothNameAndEmail ? 0 : 4,
              }}
            >
              {name || email || 'Anonymous User'}
            </Title>
          </Flex>
          {hasBothNameAndEmail && (
            <Box style={{marginLeft: 1, lineHeight: 1.2}}>
              <Text type="secondary">{email}</Text>
            </Box>
          )}
        </Box>

        <Flex mx={-1}>
          <Box mx={1}>
            <Select>
              <SelectTrigger
                value={assigneeId ? String(assigneeId) : undefined}
                className="w-[180px] h-8"
              >
                <SelectValue placeholder="No assignee" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem value={UNASSIGNED}>No assignee</SelectItem>
                  {users.map((user: User) => {
                    const value = String(user.id);

                    return (
                      <SelectItem key={value} value={value}>
                        {user.full_name || user.email}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* <Select
              style={{ minWidth: 240 }}
              placeholder="No assignee"
              value={assigneeId ? String(assigneeId) : undefined}
              onSelect={handleAssignUser}
            >
              <Select.Option key={UNASSIGNED} value={UNASSIGNED}>
                No assignee
              </Select.Option>

              {users.map((user: User) => {
                const value = String(user.id);

                return (
                  <Select.Option key={value} value={value}>
                    <Flex sx={{ alignItems: 'center' }}>
                      <UserOutlined style={{ marginRight: 8, fontSize: 12 }} />
                      <Box>{user.full_name || user.email}</Box>
                    </Flex>
                  </Select.Option>
                );
              })}
            </Select> */}
          </Box>
          <Box mx={1}>
            {priority === 'priority' ? (
              <DeskaButton
                variant={'outline'}
                size="iconXs"
                onClick={() => onRemovePriority(conversationId)}
                aria-label="Remove priority"
              >
                <StarFilled style={{color: colors.gold}} />
              </DeskaButton>
            ) : (
              <DeskaButton
                onClick={() => onMarkPriority(conversationId)}
                variant={'outline'}
                size="iconXs"
                aria-label="Mark as priority"
              >
                <StarOutlined />
              </DeskaButton>
            )}
          </Box>

          {status === 'closed' ? (
            <Box mx={1}>
              <DeskaButton
                variant={'outline'}
                size="iconXs"
                onClick={() => onReopenConversation(conversationId)}
              >
                <UploadOutlined />
              </DeskaButton>
            </Box>
          ) : (
            <Box mx={1}>
              <DeskaButton
                variant={'outline'}
                size="iconXs"
                onClick={() => onCloseConversation(conversationId)}
              >
                <CheckOutlined />
              </DeskaButton>
            </Box>
          )}

          <Box mx={1}>
            <Popconfirm
              title="Are you sure you want to delete this conversation?"
              okText="Yes"
              cancelText="No"
              placement="leftBottom"
              onConfirm={() => onDeleteConversation(conversationId)}
            >
              <DeskaButton
                size="iconXs"
                variant={'outline'}
                aria-label="Delete conversation"
              >
                <DeleteOutlined />
              </DeskaButton>
            </Popconfirm>
          </Box>
        </Flex>
      </Flex>
    </header>
  );
};

export default ConversationHeader;
