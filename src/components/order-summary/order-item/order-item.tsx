import { orders } from '@wix/ecom';
import type { SerializeFrom } from '@remix-run/node';
import { media } from '@wix/sdk';
import styles from './order-item.module.scss';
import { ImagePlaceholderIcon } from '~/components/icons';

interface OrderItemProps {
    item: SerializeFrom<orders.OrderLineItem>;
}

export const OrderItem = ({ item }: OrderItemProps) => {
    const productName = item.productName?.translated ?? item.productName?.original ?? '';
    const image = item.image ? media.getImageUrl(item.image) : undefined;

    return (
        <div className={styles.root}>
            <div className={styles.imageWrapper}>
                {image ? (
                    <img
                        className={styles.image}
                        src={image.url}
                        alt={image.altText ?? productName}
                    />
                ) : (
                    <ImagePlaceholderIcon className={styles.imagePlaceholderIcon} />
                )}
            </div>

            <div className={styles.main}>
                <div>
                    <div>{productName}</div>
                    <div className={styles.productDetails}>
                        <div>{item.price?.formattedAmount}</div>
                        {item.descriptionLines?.map(({ name, colorInfo, plainText }, index) => {
                            const displayName = name?.translated ?? name?.original;
                            const colorName = colorInfo?.translated ?? colorInfo?.original;
                            const value = plainText?.translated ?? plainText?.original;
                            return (
                                <div key={index}>
                                    {displayName}: {colorName ?? value}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.orderInfo}>
                    <div>Qty: {item.quantity}</div>
                    <div>{item.totalPriceBeforeTax?.formattedAmount}</div>
                </div>
            </div>
        </div>
    );
};
