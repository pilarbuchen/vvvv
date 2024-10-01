import {
    isRouteErrorResponse,
    Links,
    Meta,
    type MetaFunction,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useNavigate,
    useRouteError,
} from '@remix-run/react';
import { useEffect, useRef } from 'react';
import { EcomAPIContextProvider } from '~/api/ecom-api-context-provider';
import { CartOpenContextProvider } from '~/components/cart/cart-open-context';
import { ErrorPage } from '~/components/error-page/error-page';
import { SiteWrapper } from '~/components/site-wrapper/site-wrapper';
import { ROUTES } from '~/router/config';
import { RouteHandle } from '~/router/types';
import { getErrorMessage } from '~/utils';

import '~/styles/reset.scss';
import '~/styles/colors.scss';
import '~/styles/typography.scss';
import '~/styles/common.scss';
import '~/styles/index.scss';

export const meta: MetaFunction = () => {
    return [{ title: 'ReClaim: Home Goods Store' }];
};

export async function loader() {
    return {
        ENV: {
            WIX_CLIENT_ID: process?.env?.WIX_CLIENT_ID,
        },
    };
}

export const handle: RouteHandle = {
    breadcrumbs: () => [{ title: 'Home', to: ROUTES.home.path }],
};

export function Layout({ children }: React.PropsWithChildren) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

function ContentWrapper({ children }: React.PropsWithChildren) {
    return (
        <EcomAPIContextProvider>
            <CartOpenContextProvider>
                <SiteWrapper>{children}</SiteWrapper>
            </CartOpenContextProvider>
        </EcomAPIContextProvider>
    );
}

export default function App() {
    const data = useLoaderData<typeof loader>();

    if (typeof window !== 'undefined' && typeof window.ENV === 'undefined') {
        window.ENV = data.ENV;
    }

    return (
        <ContentWrapper>
            <Outlet />
        </ContentWrapper>
    );
}

export function ErrorBoundary() {
    const locationRef = useRef<string | undefined>(
        typeof window !== 'undefined' ? window.location.href : undefined,
    );

    const error = useRouteError();

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.location.href !== locationRef.current) {
                locationRef.current = window.location.href;
                clearInterval(interval);
                // force full page reload after navigating from error boundary
                // to fix remix issue with style tags disappearing
                window.location.reload();
            }
        }, 100);
    }, []);

    const navigate = useNavigate();

    const isPageNotFoundError = isRouteErrorResponse(error) && error.status === 404;

    return (
        <ContentWrapper>
            <ErrorPage
                title={isPageNotFoundError ? 'Page Not Found' : 'Oops, something went wrong'}
                message={isPageNotFoundError ? undefined : getErrorMessage(error)}
                actionButtonText="Back to shopping"
                onActionButtonClick={() => navigate(ROUTES.products.to('all-products'))}
            />
        </ContentWrapper>
    );
}
