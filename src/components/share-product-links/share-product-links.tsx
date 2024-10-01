import classNames from 'classnames';
import { FacebookIcon, PinterestIcon, WhatsAppIcon } from '../icons';
import styles from './share-product-links.module.scss';

interface ShareProductLinksProps {
    productCanonicalUrl: string;
    className?: string;
}

export const ShareProductLinks = ({ productCanonicalUrl, className }: ShareProductLinksProps) => {
    const productEncodedUrl = encodeURIComponent(productCanonicalUrl);
    return (
        <div className={classNames(styles.links, className)}>
            <a
                href={`https://api.whatsapp.com/send?text=${productEncodedUrl}`}
                target="_blank"
                rel="noreferrer"
            >
                <WhatsAppIcon className={styles.icon} />
            </a>

            <a
                href={`http://www.facebook.com/sharer.php?u=${productEncodedUrl}`}
                target="_blank"
                rel="noreferrer"
            >
                <FacebookIcon className={styles.icon} />
            </a>

            <a
                href={`http://pinterest.com/pin/create/button/?url=${productEncodedUrl}`}
                target="_blank"
                rel="noreferrer"
            >
                <PinterestIcon className={styles.icon} />
            </a>
        </div>
    );
};
