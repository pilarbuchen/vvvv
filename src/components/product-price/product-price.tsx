import classNames from 'classnames';
import styles from './product-price.module.scss';

interface ProductPriceProps {
    price?: string;
    discountedPrice?: string;
    className?: string;
}

export const ProductPrice = ({ price, discountedPrice, className }: ProductPriceProps) => {
    const hasDiscount = discountedPrice && price !== discountedPrice;
    return (
        <div className={classNames(styles.root, className)}>
            {hasDiscount && <span className={styles.beforeDiscount}>{price}</span>}
            <span>{hasDiscount ? discountedPrice : price}</span>
        </div>
    );
};
