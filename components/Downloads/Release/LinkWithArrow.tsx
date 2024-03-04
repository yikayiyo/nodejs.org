import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import type { FC, PropsWithChildren } from 'react';

import Link from '@/components/Link';

type AccessibleAnchorProps = { href?: string };

const LinkWithArrow: FC<PropsWithChildren<AccessibleAnchorProps>> = ({
  children,
  ...props
}) => (
  <Link {...props}>
    {children}
    <ArrowUpRightIcon className="ml-1 inline w-3 fill-neutral-600 dark:fill-neutral-400" />
  </Link>
);
export default LinkWithArrow;
