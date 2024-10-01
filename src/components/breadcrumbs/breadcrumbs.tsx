import React from 'react';
import { Link } from '@remix-run/react';
import { BreadcrumbData } from '~/router/types';
import styles from './breadcrumbs.module.scss';
import { ChevronRightIcon } from '~/components/icons';
import { ClientOnly } from 'remix-utils/client-only';

interface BreadcrumbsProps {
    breadcrumbs: BreadcrumbData[];
}

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
    return (
        <div className={styles.breadcrumbs}>
            {breadcrumbs.map((breadcrumb, index, arr) => {
                const content = (
                    <React.Fragment key={breadcrumb.to}>
                        <Link to={breadcrumb.to}>{breadcrumb.title}</Link>
                        {index !== arr.length - 1 && (
                            <ChevronRightIcon className={styles.separatorIcon} />
                        )}
                    </React.Fragment>
                );

                if (breadcrumb.clientOnly) {
                    return <ClientOnly key={breadcrumb.to}>{() => content}</ClientOnly>;
                }

                return content;
            })}
        </div>
    );
};
