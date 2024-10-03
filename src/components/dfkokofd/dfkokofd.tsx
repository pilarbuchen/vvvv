import cx from 'classnames';
import styles from './dfkokofd.module.scss';

export interface DfkokofdProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Dfkokofd = ({ className }: DfkokofdProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <button className="button primaryButton">Add to Cart</button>Dfkokofd
        </div>
    );
};
