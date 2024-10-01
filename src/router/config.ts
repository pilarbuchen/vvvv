import { generatePath } from '@remix-run/react';

const HOME = '/';
const PRODUCTS = '/products/:categorySlug';
const PRODUCT_DETAILS = `/product-details/:productSlug`;
const ABOUT_US = '/about-us';
const TERMS_AND_CONDITIONS = '/terms-and-conditions';
const PRIVACY_POLICY = '/privacy-policy';
const SHIPPING_POLICY = '/shipping-policy';
const REFUND_POLICY = '/refund-policy';
const THANK_YOU = '/thank-you';

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    products: {
        path: PRODUCTS,
        to: (categorySlug: string) => generatePath(PRODUCTS, { categorySlug }),
    },
    productDetails: {
        path: PRODUCT_DETAILS,
        to: (productSlug: string) => generatePath(PRODUCT_DETAILS, { productSlug }),
    },
    aboutUs: { path: ABOUT_US, to: () => ABOUT_US },
    termsAndConditions: { path: TERMS_AND_CONDITIONS, to: () => TERMS_AND_CONDITIONS },
    privacyPolicy: { path: PRIVACY_POLICY, to: () => PRIVACY_POLICY },
    shippingPolicy: { path: SHIPPING_POLICY, to: () => SHIPPING_POLICY },
    refundPolicy: { path: REFUND_POLICY, to: () => REFUND_POLICY },
    thankYou: { path: THANK_YOU, to: () => THANK_YOU },
};
