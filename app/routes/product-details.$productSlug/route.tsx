import type { LoaderFunctionArgs } from '@remix-run/node';
import {
    isRouteErrorResponse,
    json,
    useLoaderData,
    useNavigate,
    useRouteError,
} from '@remix-run/react';
import { products } from '@wix/stores';
import classNames from 'classnames';
import { useState } from 'react';
import { useAddToCart } from '~/api/api-hooks';
import { getEcomApi } from '~/api/ecom-api';
import { EcomApiErrorCodes } from '~/api/types';
import { Accordion } from '~/components/accordion/accordion';
import { Breadcrumbs } from '~/components/breadcrumbs/breadcrumbs';
import { useCartOpen } from '~/components/cart/cart-open-context';
import { ErrorPage } from '~/components/error-page/error-page';
import { ProductImages } from '~/components/product-images/product-images';
import { ProductPrice } from '~/components/product-price/product-price';
import { QuantityInput } from '~/components/quantity-input/quantity-input';
import { ShareProductLinks } from '~/components/share-product-links/share-product-links';
import { ROUTES } from '~/router/config';
import { BreadcrumbData, RouteHandle } from '~/router/types';
import { getErrorMessage, removeQueryStringFromUrl } from '~/utils';
import { useBreadcrumbs } from '~/router/use-breadcrumbs';
import styles from './route.module.scss';

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
    const productSlug = params.productSlug;
    if (!productSlug) {
        throw new Error('Missing product slug');
    }
    const productResponse = await getEcomApi().getProductBySlug(productSlug);
    if (productResponse.status === 'failure') {
        throw json(productResponse.error);
    }

    return {
        product: productResponse.body,
        canonicalUrl: removeQueryStringFromUrl(request.url),
    };
};

interface ProductDetailsLocationState {
    fromCategory?: {
        name: string;
        slug: string;
    };
}

export const handle: RouteHandle<typeof loader, ProductDetailsLocationState> = {
    breadcrumbs: (match, location) => {
        const fromCategory = location.state?.fromCategory;

        const breadcrumbs: BreadcrumbData[] = [
            {
                title: match.data.product.name!,
                to: ROUTES.productDetails.to(match.data.product.slug!),
            },
        ];

        if (fromCategory) {
            breadcrumbs.unshift({
                title: fromCategory.name,
                to: ROUTES.products.to(fromCategory.slug),
                clientOnly: true,
            });
        }

        return breadcrumbs;
    },
};

export default function ProductDetailsPage() {
    const { product, canonicalUrl } = useLoaderData<typeof loader>();
    const breadcrumbs = useBreadcrumbs();

    const cartOpener = useCartOpen();
    const { trigger: addToCart, isMutating: isAddingToCart } = useAddToCart();

    const [quantity, setQuantity] = useState(1);

    const handleAddToCartClick = () => {
        addToCart(
            {
                id: product._id!,
                quantity,
            },
            {
                onSuccess: () => cartOpener.setIsOpen(true),
            },
        );
    };

    const isOutOfStock = product.stock?.inventoryStatus === products.InventoryStatus.OUT_OF_STOCK;

    return (
        <div className={styles.page}>
            <Breadcrumbs breadcrumbs={breadcrumbs} />

            <div className={styles.content}>
                <ProductImages media={product.media} />

                <div>
                    <h1 className={styles.productName}>{product.name}</h1>
                    {product.sku && <p className={styles.sku}>SKU: {product.sku}</p>}

                    {product.priceData && (
                        <ProductPrice
                            className={styles.price}
                            price={product.priceData.formatted?.price}
                            discountedPrice={product.priceData.formatted?.discountedPrice}
                        />
                    )}

                    {product.description && (
                        <div
                            className={styles.description}
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        />
                    )}

                    <div className={styles.quantity}>
                        <label htmlFor="quantity" className={styles.quantityLabel}>
                            Quantity
                        </label>
                        <QuantityInput id="quantity" value={quantity} onChange={setQuantity} />
                    </div>

                    <button
                        className={classNames('button', 'primaryButton', styles.addToCartButton)}
                        onClick={handleAddToCartClick}
                        disabled={isOutOfStock || isAddingToCart}
                    >
                        {isOutOfStock ? 'Out of stock' : 'Add to Cart'}
                    </button>

                    {product.additionalInfoSections &&
                        product.additionalInfoSections.length > 0 && (
                            <Accordion
                                className={styles.additionalInfoSections}
                                items={product.additionalInfoSections.map((section) => ({
                                    title: section.title!,
                                    content: section.description ? (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: section.description,
                                            }}
                                        />
                                    ) : null,
                                }))}
                            />
                        )}

                    <ShareProductLinks
                        className={styles.socialLinks}
                        productCanonicalUrl={canonicalUrl}
                    />
                </div>
            </div>
        </div>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();
    const navigate = useNavigate();

    let title = 'Error';
    let message = getErrorMessage(error);

    if (isRouteErrorResponse(error) && error.data.code === EcomApiErrorCodes.ProductNotFound) {
        title = 'Product Not Found';
        message = "Unfortunately a product page you trying to open doesn't exist";
    }

    return (
        <ErrorPage
            title={title}
            message={message}
            actionButtonText="Back to shopping"
            onActionButtonClick={() => navigate(ROUTES.products.to('all-products'))}
        />
    );
}
