import { orders } from '@wix/ecom';
import { OrderItem } from './order-item/order-item';
import styles from './order-summary.module.scss';
import type { SerializeFrom } from '@remix-run/node';
import classNames from 'classnames';

export interface OrderSummaryProps {
    order: SerializeFrom<orders.Order & orders.OrderNonNullableFields>;
}

export const OrderSummary = ({ order }: OrderSummaryProps) => {
    const { lineItems, priceSummary, shippingInfo, billingInfo, buyerNote } = order;

    const deliveryContact = shippingInfo?.logistics?.shippingDestination?.contactDetails;
    const deliveryAddress = shippingInfo?.logistics?.shippingDestination?.address;
    const deliveryTime = shippingInfo?.logistics?.deliveryTime;

    const billingContact = billingInfo?.contactDetails;
    const billingAddress = billingInfo?.address;

    return (
        <div className={styles.root}>
            <div className={styles.section}>
                <div className={styles.orderItems}>
                    {lineItems.map((item) => (
                        <OrderItem key={item._id} item={item} />
                    ))}
                </div>

                <hr className={styles.divider} />

                <div className={styles.summary}>
                    {buyerNote && (
                        <div>
                            <div>Note</div>
                            <div className={styles.note}>{buyerNote}</div>
                        </div>
                    )}

                    <div className={styles.priceSummary}>
                        <div className={styles.priceDetails}>
                            <div className={styles.priceRow}>
                                <div>Subtotal</div>
                                <div>{priceSummary?.subtotal?.formattedAmount}</div>
                            </div>

                            <div className={styles.priceRow}>
                                <div>Delivery</div>
                                <div>
                                    {Number(priceSummary?.shipping?.amount) === 0
                                        ? 'Free'
                                        : priceSummary?.shipping?.formattedAmount}
                                </div>
                            </div>

                            <div className={styles.priceRow}>
                                <div>Sales Tax</div>
                                <div>{priceSummary?.tax?.formattedAmount}</div>
                            </div>
                        </div>

                        <hr className={styles.divider} />

                        <div className={classNames(styles.priceRow, styles.totalPrice)}>
                            <div>Total</div>
                            <div>{priceSummary?.total?.formattedAmount}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classNames(styles.section, styles.addressSection)}>
                <div>
                    <div>Delivery address</div>
                    <ul className={styles.addressData}>
                        {deliveryContact && <li>{contactToString(deliveryContact)}</li>}
                        {deliveryAddress && <li>{addressToString(deliveryAddress)}</li>}
                        {deliveryContact?.phone && <li>{deliveryContact?.phone}</li>}
                        {deliveryTime && <li className={styles.deliveryTime}>{deliveryTime}</li>}
                    </ul>
                </div>

                <div>
                    <div>Billing address</div>
                    <ul className={styles.addressData}>
                        {billingContact && <li>{contactToString(billingContact)}</li>}
                        {billingAddress && <li>{addressToString(billingAddress)}</li>}
                        {billingContact?.phone && <li>{billingContact.phone}</li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

function addressToString(address: orders.Address) {
    return [
        address.addressLine1,
        address.addressLine2,
        address.city,
        address.postalCode,
        address.country,
    ]
        .filter(Boolean)
        .join(', ');
}

function contactToString(contact: orders.FullAddressContactDetails) {
    return [contact.firstName, contact.lastName].filter(Boolean).join(' ');
}
