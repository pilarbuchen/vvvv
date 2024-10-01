import { products } from '@wix/stores';
import styles from './product-images.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { ImagePlaceholderIcon } from '../icons';
import { getClickableElementAttributes } from '~/utils';

interface ProductImagesProps {
    media?: products.Media;
}

export const ProductImages = ({ media }: ProductImagesProps) => {
    const [selectedImage, setSelectedImage] = useState<products.MediaItem | undefined>(
        media?.mainMedia,
    );

    const imageItems = media?.items?.filter((item) => item.image !== undefined);

    return (
        <div>
            <div className={styles.mainImageWrapper}>
                {selectedImage && selectedImage.image ? (
                    <img
                        className={styles.mainImage}
                        src={selectedImage.image.url}
                        alt={selectedImage.image.altText ?? ''}
                    />
                ) : (
                    <ImagePlaceholderIcon className={styles.imagePlaceholderIcon} />
                )}
            </div>

            {imageItems && imageItems.length > 0 && (
                <div className={styles.thumbnails}>
                    {imageItems.map((item) => (
                        <div
                            key={item._id}
                            className={classNames(styles.thumbnail, {
                                [styles.selected]: selectedImage && selectedImage._id === item._id,
                            })}
                            {...getClickableElementAttributes(() => setSelectedImage(item))}
                        >
                            <img
                                className={styles.thumbnailImage}
                                src={item.image!.url}
                                alt={item.image!.altText ?? ''}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
