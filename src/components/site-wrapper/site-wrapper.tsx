import { Cart } from '../cart/cart';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import styles from './site-wrapper.module.scss';

export const SiteWrapper = ({ children }: React.PropsWithChildren) => {
    return (
        <div className={styles.root}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />

            <Cart />
        </div>
    );
};
