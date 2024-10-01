import styles from './label-with-arrow.module.scss';
import { ArrowRightIcon } from '~/components/icons';
import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

export const LabelWithArrow: FC<HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div {...props} className={classNames(styles.root, className)}>
            <div className={styles.label} aria-hidden>
                {children}
            </div>
            <div className={styles.label}>{children}</div>
            <ArrowRightIcon className={styles.icon} />
        </div>
    );
};
