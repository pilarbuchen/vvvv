import { collections } from '@wix/stores';
import { Product } from '@wix/stores_products';
import classNames from 'classnames';
import useSWR from 'swr';
import { getEcomApi } from '~/api/ecom-api';
import { CollectionDetails, isEcomSDKError } from '~/api/types';
import { ProductCard, ProductCardSkeleton } from '~/components/product-card/product-card';
import { ProductLink } from '~/components/product-link/product-link';
import { FadeIn, Reveal } from '~/components/visual-effects';

import styles from './featured-products-section.module.scss';

interface FeaturedProductsData {
    category: collections.Collection;
    products: Product[];
}

const getFeaturedProducts = async (
    categorySlug: string,
    limit: number,
): Promise<FeaturedProductsData | null> => {
    const api = getEcomApi();

    let category: CollectionDetails | undefined;
    const response = await api.getCategoryBySlug(categorySlug);
    if (response.status === 'success') {
        category = response.body;
    } else {
        const error = response.error;
        if (isEcomSDKError(error) && error.details.applicationError.code === 404) {
            const response = await api.getCategoryBySlug('all-products');
            if (response.status === 'success') {
                category = response.body;
            } else {
                throw error;
            }
        } else {
            throw error;
        }
    }

    const productsResponse = await api.getProductsByCategory(category.slug!, limit);
    if (productsResponse.status === 'failure') throw productsResponse.error;
    return { category, products: productsResponse.body };
};

interface FeaturedProductsSectionProps {
    categorySlug: string;
    title?: string;
    description?: JSX.Element | string;
    productCount?: number;
    className?: string;
}

export const FeaturedProductsSection = (props: FeaturedProductsSectionProps) => {
    const { title, description, productCount = 4, categorySlug, className } = props;

    const { data } = useSWR(`/category/${categorySlug}/featured/limit/${productCount}`, () =>
        getFeaturedProducts(categorySlug, productCount),
    );

    return (
        <div className={classNames(styles.root, className)}>
            <FadeIn className={styles.header}>
                <h1 className={styles.headerTitle}>{title ?? data?.category.name}</h1>
                <div className={styles.headerDescription}>
                    {description ?? data?.category.description}
                </div>
            </FadeIn>
            <Reveal direction="down" className={styles.productsRow}>
                {data
                    ? data.products.map((product) => (
                          <ProductLink key={product._id} productSlug={product.slug!}>
                              <ProductCard
                                  name={product.name!}
                                  imageUrl={product.media?.mainMedia?.image?.url}
                                  price={product.priceData?.formatted?.price}
                                  discountedPrice={product.priceData?.formatted?.discountedPrice}
                                  ribbon={product.ribbon ?? undefined}
                              />
                          </ProductLink>
                      ))
                    : Array.from({ length: productCount }).map((_, i) => (
                          <ProductCardSkeleton key={i} />
                      ))}
            </Reveal>
        </div>
    );
};
