import React from 'react';
import type {FC} from 'react';
import NavLink from './navLink';
import AppBasic from './basic';
import {useKnowledgeBaseStore} from '../../../store/knowledge-base.store';

export type IAppDetailNavProps = {
  iconType?: 'app' | 'dataset';
  title: string;
  desc: string;
  icon: string;
  icon_background: string;
  description?: string;
  navigation: Array<{
    name: string;
    href: string;
    icon: any;
    selectedIcon: any;
  }>;
  extraInfo?: React.ReactNode;
};

const AppSidebar: FC<IAppDetailNavProps> = ({
  title,
  desc,
  icon,
  icon_background,
  navigation,
  extraInfo,
  iconType = 'app',
}) => {
  return (
    <div
      id="knowledge-base-sidebar"
      className="flex flex-col w-56 overflow-y-auto bg-bg border-r border-border shrink-0"
    >
      <div className="flex flex-shrink-0 p-4">
        <AppBasic
          iconType={iconType}
          icon={icon}
          icon_background={icon_background}
          name={title}
          type={desc}
        />
      </div>
      <nav className="flex-1 p-4 space-y-1 bg-bg">
        {navigation.map((item, index) => {
          return (
            <NavLink
              key={index}
              iconMap={{selected: item.selectedIcon, normal: item.icon}}
              name={item.name}
              href={item.href}
            />
          );
        })}
        {extraInfo ?? null}
      </nav>
    </div>
  );
};

export default React.memo(AppSidebar);
