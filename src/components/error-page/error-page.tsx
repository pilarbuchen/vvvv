import { FC } from 'react';

import styles from './error-page.module.scss';

export interface ErrorPageProps {
    title: string;
    message?: string;
    actionButtonText?: string;
    onActionButtonClick?: () => void;
}

export const ErrorPage: FC<ErrorPageProps> = ({
    title,
    message,
    actionButtonText,
    onActionButtonClick,
}) => {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{title}</h1>
            {message && <div className={styles.message}>{message}</div>}
            {actionButtonText ? (
                <button className="button primaryButton" onClick={onActionButtonClick}>
                    {actionButtonText}
                </button>
            ) : null}
        </div>
    );
};
