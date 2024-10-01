import { Link, NavLink } from '@remix-run/react';
import classNames from 'classnames';
import { CategoryLink } from '~/components/category-link/category-link';
import { FadeIn } from '~/components/visual-effects';
import { ROUTES } from '~/router/config';

import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    const navItemStyle = ({ isActive }: { isActive: boolean }) =>
        classNames(styles.navItem, {
            [styles.active]: isActive,
        });

    return (
        <footer className={classNames(styles.root, className)}>
            <FadeIn className={styles.navigation}>
                <nav>
                    <ul>
                        <li>
                            <CategoryLink categorySlug="all-products" className={navItemStyle}>
                                Shop All
                            </CategoryLink>
                        </li>
                        <li>
                            <CategoryLink
                                categorySlug="kitchen-essentials"
                                className={navItemStyle}
                            >
                                Kitchen
                            </CategoryLink>
                        </li>
                        <li>
                            <CategoryLink categorySlug="bath" className={navItemStyle}>
                                Bath
                            </CategoryLink>
                        </li>
                        <li>
                            <CategoryLink categorySlug="on-the-go" className={navItemStyle}>
                                On the Go
                            </CategoryLink>
                        </li>
                        <li>
                            <CategoryLink categorySlug="new-in" className={navItemStyle}>
                                New In
                            </CategoryLink>
                        </li>
                        <li>
                            <CategoryLink categorySlug="best-sellers" className={navItemStyle}>
                                Best Sellers
                            </CategoryLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.aboutUs.to()} className={navItemStyle}>
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <ul>
                    <li>
                        <NavLink to={ROUTES.termsAndConditions.to()} className={navItemStyle}>
                            Terms & Conditions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.privacyPolicy.to()} className={navItemStyle}>
                            Privacy Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.shippingPolicy.to()} className={navItemStyle}>
                            Shipping Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.refundPolicy.to()} className={navItemStyle}>
                            Refund Policy
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link
                            to="https://www.facebook.com/WixStudio"
                            className={styles.navItem}
                            target="_blank"
                        >
                            Facebook
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://www.instagram.com/wixstudio"
                            className={styles.navItem}
                            target="_blank"
                        >
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://www.pinterest.com/wixcom"
                            className={styles.navItem}
                            target="_blank"
                        >
                            Pinterest
                        </Link>
                    </li>
                </ul>
            </FadeIn>
            <FadeIn className={styles.bottomBar}>
                <Link to={ROUTES.home.to()} className={styles.logo}>
                    ReClaim
                </Link>
                <div className={styles.copyright}>
                    <span>© 2035 by ReClaim. Made with </span>
                    <Link to="https://www.codux.com/" className={styles.coduxLink}>
                        Codux™
                    </Link>
                </div>
            </FadeIn>
        </footer>
    );
};
