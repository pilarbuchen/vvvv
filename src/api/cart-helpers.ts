import ecom from '@wix/ecom';

export function findItemIdInCart(
    cart: ecom.cart.Cart & ecom.cart.CartNonNullableFields,
    catalogItemId: string,
    options?: Record<string, string>,
) {
    return cart.lineItems.find((it) => {
        if (it.catalogReference?.catalogItemId !== catalogItemId) {
            return false;
        }
        const catalogOptions = it.catalogReference?.options?.options;
        const optionsLength = options ? Object.keys(options).length : 0;
        const catalogOptionsLength = catalogOptions ? Object.keys(catalogOptions).length : 0;
        if (optionsLength !== catalogOptionsLength) {
            return false;
        }
        if (!options || !catalogOptions) {
            return true;
        }
        for (const optionName of Object.keys(options)) {
            if (options[optionName] !== catalogOptions[optionName]) {
                return false;
            }
        }
        return true;
    });
}

export function calculateCartItemsCount(cart: ecom.cart.Cart): number {
    return cart.lineItems?.reduce((total, item) => total + item.quantity!, 0) ?? 0;
}
