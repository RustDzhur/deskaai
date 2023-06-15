'use client';
// import { useSelectedLayoutSegment } from 'next/navigation'
import classNames from 'classnames';
import {Link, useLocation} from 'react-router-dom';

export default function NavLink({
  name,
  href,
  iconMap,
}: {
  name: string;
  href: string;
  iconMap: {selected: any; normal: any};
}) {
  // const segment = useSelectedLayoutSegment()
  // TODO: FIX ME: IS ACTIVE should't be false always
  // const isActive = href.toLowerCase().split('/')?.pop() === segment?.toLowerCase()
  const location = useLocation();
  const isActive =
    href?.toLocaleLowerCase() === location.pathname?.toLocaleLowerCase();
  const NavIcon = isActive ? iconMap.selected : iconMap.normal;

  return (
    <Link
      // prefetch
      key={name}
      to={href}
      className={classNames(
        isActive
          ? 'bg-brand-6 text-slate-200 font-semibold'
          : 'text-slate-400 hover:bg-brand-6 hover:text-slate-200',
        'group flex items-center rounded-md px-2 py-2 text-sm font-normal'
      )}
    >
      <NavIcon
        className={classNames(
          'mr-2 h-4 w-4 flex-shrink-0',
          isActive ? 'text-slate-200' : 'text-gray-700'
        )}
        aria-hidden="true"
      />
      {name}
    </Link>
  );
}
