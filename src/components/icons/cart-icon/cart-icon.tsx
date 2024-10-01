import classNames from 'classnames';
import styles from './cart-icon.module.scss';

interface CartIconProps {
    className?: string;
    count: number;
}

export const CartIcon = (props: CartIconProps) => {
    return (
        <div className={classNames(styles.root, props.className)}>
            <div className={styles.handle}></div>
            <div className={styles.bag}>{props.count}</div>
        </div>
    );
};
