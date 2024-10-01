import { cart } from '@wix/ecom';
import classNames from 'classnames';
import { useCart, useCartTotals } from '~/api/api-hooks';
import { calculateCartItemsCount } from '~/api/cart-helpers';
import { useEcomAPI } from '~/api/ecom-api-context-provider';
import { Drawer } from '~/components/drawer/drawer';
import { CloseIcon, LockIcon } from '~/components/icons';
import { CartItem } from './cart-item/cart-item';
import { useCartOpen } from './cart-open-context';

import styles from './cart.module.scss';

export const Cart = () => {
    const ecomAPI = useEcomAPI();
    const cartOpener = useCartOpen();
    const cart = useCart();
    const cartTotals = useCartTotals();

    const handleCheckout = async () => {
        const checkoutResponse = await ecomAPI.checkout();

        if (checkoutResponse.status === 'success') {
            window.location.href = checkoutResponse.body.checkoutUrl;
        } else {
            alert('Checkout failed.');
        }
    };

    const findLineItemPriceBreakdown = (item: cart.LineItem) => {
        return cartTotals.data?.calculatedLineItems.find(
            (calculatedItem) => calculatedItem.lineItemId === item._id,
        )?.pricesBreakdown;
    };

    const itemsCount = cart.data ? calculateCartItemsCount(cart.data) : 0;

    return (
        <Drawer open={cartOpener.isOpen} onClose={() => cartOpener.setIsOpen(false)}>
            <div className={styles.cart}>
                <div className={styles.header}>
                    <span className="heading6">
                        Cart ({itemsCount} {itemsCount === 1 ? 'item' : 'items'})
                    </span>

                    <button
                        className={styles.closeButton}
                        onClick={() => cartOpener.setIsOpen(false)}
                    >
                        <CloseIcon />
                    </button>
                </div>

                {cart.data && cart.data.lineItems.length > 0 ? (
                    <>
                        <div className={styles.cartItems}>
                            {cart.data.lineItems.map((item) => (
                                <CartItem
                                    key={item._id}
                                    item={item}
                                    priceBreakdown={findLineItemPriceBreakdown(item)}
                                />
                            ))}
                        </div>

                        <div className={styles.footer}>
                            {cart.data.subtotal && (
                                <>
                                    <div className={styles.subtotal}>
                                        <span>Subtotal</span>
                                        <span>{cart.data.subtotal.formattedConvertedAmount}</span>
                                    </div>
                                    <div className={styles.subtotalNote}>
                                        Taxes and shipping are calculated at checkout.
                                    </div>
                                </>
                            )}

                            <button
                                className={classNames(
                                    'button',
                                    'mutedPrimaryButton',
                                    styles.checkoutButton,
                                )}
                                onClick={handleCheckout}
                            >
                                Checkout
                            </button>

                            <div className={styles.secureCheckout}>
                                <LockIcon width={11} />
                                <span>Secure Checkout</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className={styles.emptyCartMessage}>Your cart is empty.</div>
                )}
            </div>
        </Drawer>
    );
};
