import {TbSettings} from 'react-icons/tb';

import {
  TbUsers,
  TbUserPlus,
  TbAt,
  TbEyeglassOff,
  TbUserOff,
  TbStar,
  TbSquareRoundedX,
} from 'react-icons/tb';
import {IconType} from 'react-icons';

import {useLocation} from 'react-router-dom';

// import { cn } from "@/lib/utils"
import {Button} from './deska-kit-base/button';
import {ScrollArea} from './deska-kit-base/scroll-area';
import {cn} from './twable-classnames';
import {Unread} from '../conversations/ConversationsProvider';
import React from 'react';
import {Badge} from './deska-kit-base/badge';
import {Inbox} from '../../types';
import {Link} from 'react-router-dom';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  unread: Unread;
  isAdminUser: boolean;
  inboxes?: Array<Inbox>;
}

export function ConversationSideBar({
  className,
  unread,
  inboxes,
  isAdminUser,
}: SidebarProps) {
  const unreadConversations = unread.conversations;

  return (
    <ScrollArea className=" h-screen px-2">
      <div className={cn('pb-12', className)}>
        <div className="space-y-4 py-4">
          <div className="pb-4">
            <h2 className="text-lg font-semibold tracking-tight">
              Coversations
            </h2>
            <div className="py-4">
              <RowItem
                iconComp={TbUsers}
                badgeCount={unreadConversations.open}
                href="/conversations/all"
              >
                All
              </RowItem>
              <RowItem
                href="/conversations/me"
                iconComp={TbUserPlus}
                badgeCount={unreadConversations.assigned}
              >
                Assigned to Me
              </RowItem>
              <RowItem
                href="/conversations/mentions"
                iconComp={TbAt}
                badgeCount={unreadConversations.mentioned}
              >
                Mention
              </RowItem>
              <RowItem
                href="/conversations/unread"
                iconComp={TbEyeglassOff}
                badgeCount={unreadConversations.unread}
              >
                Unread
              </RowItem>
              <RowItem
                href="/conversations/unassigned"
                iconComp={TbUserOff}
                badgeCount={unreadConversations.unassigned}
              >
                Unassigned
              </RowItem>
              <RowItem href="/conversations/priority" iconComp={TbStar}>
                Priority
              </RowItem>
              <RowItem
                href="/conversations/closed"
                iconComp={TbSquareRoundedX}
                badgeCount={unreadConversations.closed}
              >
                Closed
              </RowItem>
            </div>
          </div>
          <div className="pb-4">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-lg font-semibold tracking-tight">Inboxes</h2>

              {isAdminUser && (
                <Button variant="ghost" className=" h-9 w-8 p-2 " asChild>
                  <Link to="/inboxes">
                    <TbSettings className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
            <div className="space-y-1">
              {(inboxes || [])?.map((inbox) => (
                <RowItem
                  href={`/inboxes/${inbox.id}/conversations`}
                  key={inbox.id}
                  badgeCount={unread?.inboxes?.[inbox.id]}
                >
                  {inbox.name}
                </RowItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

const RowItem = ({
  children,
  className,
  iconComp,
  badgeCount,
  href,
}: React.PropsWithChildren<{
  className?: string;
  iconComp?: IconType;
  badgeCount?: number;
  href: string;
}>) => {
  const location = useLocation();

  const isActive = href?.toLowerCase() === location.pathname?.toLowerCase();
  return (
    <Button
      variant={isActive ? 'secondary' : 'ghost'}
      size="sm"
      className="w-full justify-between text-xs
    pl-2 pr-1
  "
      asChild
    >
      <Link to={href}>
        <div className="flex flex-row items-center justify-start">
          {iconComp &&
            // initialize the icon component
            // && <iconComp className="mr-2 h-4 w-4" />
            // can't use above because Property 'iconComp' does not exist on type 'JSX.IntrinsicElements'
            React.createElement(iconComp, {className: 'mr-2 h-4 w-4'})}
          {children}
        </div>
        {badgeCount && badgeCount > 0 ? (
          <Badge className="p-0 h-5 w-5  rounded-full text-[8px] justify-center">
            {badgeCount > 99 ? '99+' : badgeCount}
          </Badge>
        ) : null}
      </Link>
    </Button>
  );
};
