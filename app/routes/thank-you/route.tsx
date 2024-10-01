import type { LoaderFunctionArgs } from '@remix-run/node';
import { isRouteErrorResponse, json, useLoaderData, useRouteError } from '@remix-run/react';
import { getEcomApi } from '~/api/ecom-api';
import { OrderDetails } from '~/api/types';
import { CategoryLink } from '~/components/category-link/category-link';
import { ErrorPage } from '~/components/error-page/error-page';
import { OrderSummary } from '~/components/order-summary/order-summary';
import { getErrorMessage } from '~/utils';
import styles from './route.module.scss';

export const loader = async ({
    request,
}: LoaderFunctionArgs): Promise<{ order?: OrderDetails }> => {
    const orderId = new URL(request.url).searchParams.get('orderId');
    // Show "Thank you" page even without order details.
    if (!orderId) return { order: undefined };

    const orderResponse = await getEcomApi().getOrder(orderId);
    if (orderResponse.status === 'failure') throw json(orderResponse.error);

    return { order: orderResponse.body };
};

export default function ThankYouPage() {
    const { order } = useLoaderData<typeof loader>();

    return (
        <div className={styles.root}>
            <h1 className="heading4">Thank You!</h1>
            <div className={styles.subtitle}>You&apos;ll receive a confirmation email soon.</div>

            {order && (
                <>
                    <div className={styles.orderNumber}>Order number: {order.number}</div>
                    <OrderSummary order={order} />
                </>
            )}

            <CategoryLink categorySlug="all-products" className={styles.link}>
                Continue Browsing
            </CategoryLink>
        </div>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();
    const title = isRouteErrorResponse(error) ? 'Failed to load order details' : 'Error';
    const message = getErrorMessage(error);
    return <ErrorPage title={title} message={message} />;
}
