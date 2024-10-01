import { NavLink, NavLinkProps } from '@remix-run/react';
import { ROUTES } from '~/router/config';

export interface ProductLinkProps extends Omit<NavLinkProps, 'to'> {
    productSlug: string;
}

export const ProductLink = ({ productSlug, children, ...rest }: ProductLinkProps) => {
    return (
        <NavLink to={ROUTES.productDetails.to(productSlug)} {...rest}>
            {children}
        </NavLink>
    );
};
