import { NavLink, NavLinkProps } from '@remix-run/react';
import { ROUTES } from '~/router/config';

export interface CategoryLinkProps extends Omit<NavLinkProps, 'to'> {
    categorySlug: string;
}

export const CategoryLink = ({ categorySlug, children, ...rest }: CategoryLinkProps) => {
    return (
        <NavLink to={ROUTES.products.to(categorySlug)} {...rest}>
            {children}
        </NavLink>
    );
};
