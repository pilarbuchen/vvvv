import classNames from 'classnames';
import { NavLink } from '@remix-run/react';
import { ROUTES } from '~/router/config';
import { CategoryLink } from '../category-link/category-link';
import styles from './navigation-menu.module.scss';

interface NavigationMenuProps {
    className?: string;
    vertical?: boolean;
}

export const NavigationMenu = ({ className, vertical = false }: NavigationMenuProps) => {
    const menuItemStyle = ({ isActive }: { isActive: boolean }) =>
        classNames(styles.menuItem, {
            [styles.active]: isActive,
        });

    return (
        <nav className={className}>
            <ul className={classNames(styles.menuList, { [styles.vertical]: vertical })}>
                <li>
                    <CategoryLink categorySlug="all-products" className={menuItemStyle}>
                        Shop All
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink categorySlug="kitchen-essentials" className={menuItemStyle}>
                        Kitchen
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink categorySlug="bath" className={menuItemStyle}>
                        Bath
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink categorySlug="on-the-go" className={menuItemStyle}>
                        On the Go
                    </CategoryLink>
                </li>
                <li>
                    <NavLink to={ROUTES.aboutUs.to()} className={menuItemStyle}>
                        About Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
