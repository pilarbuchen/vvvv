import { createBoard, Variant } from '@wixc3/react-board';
import { CartIcon, FacebookIcon, PinterestIcon, WhatsAppIcon } from '~/components/icons';
import { LabelWithArrow } from '~/components/label-with-arrow/label-with-arrow';
import { TrashIcon } from '../../../src/components/icons/trash-icon';
import { LockIcon } from '../../../src/components/icons/lock-icon';
import { ErrorIcon } from '../../../src/components/icons/error-icon';
import { MenuIcon } from '../../../src/components/icons/menu-icon';
import { ChevronRightIcon } from '../../../src/components/icons/chevron-right-icon';
import { ArrowRightIcon } from '../../../src/components/icons/arrow-right-icon';
import { Kit } from '../ui-kit-utils/kit';

import styles from './buttons.board.module.scss';

export default createBoard({
    name: 'Buttons & Icons',
    Board: () => (
        <Kit category="Core Components" title="Buttons & Icons">
            <Kit.Section title="Buttons" className={styles.demoWidth}>
                <Kit.Item>
                    <Variant name="Primary Button">
                        <button className="button primaryButton">Add to Cart</button>
                    </Variant>
                    <Kit.Description>Primary Button</Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Primary Muted Button">
                        <button className="button mutedPrimaryButton">Add to Cart</button>
                    </Variant>
                    <Kit.Description>Primary Muted Button</Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Secondary Button">
                        <button className="button secondary">Add to Cart</button>
                    </Variant>
                    <Kit.Description>Secondary Button</Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Label With Arrow">
                        <LabelWithArrow>Shop Now</LabelWithArrow>
                    </Variant>
                    <Kit.Description>Label With Arrow</Kit.Description>
                </Kit.Item>
            </Kit.Section>

            <Kit.Section title="Icons">
                <div className={styles.itemsGroup}>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Cart Icon">
                                <CartIcon count={3} />
                            </Variant>
                        </div>
                        <Kit.Description>Cart</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Trash Icon">
                                <TrashIcon className={styles.trashIcon} />
                            </Variant>
                        </div>
                        <Kit.Description>Trash</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Lock Icon">
                                <LockIcon className={styles.lockIcon} />
                            </Variant>
                        </div>
                        <Kit.Description>Lock</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Error Icon">
                                <ErrorIcon className={styles.errorIcon} />
                            </Variant>
                        </div>
                        <Kit.Description>Error</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Menu Icon">
                                <MenuIcon className={styles.menuIcon} />
                            </Variant>
                        </div>
                        <Kit.Description>Menu</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Chevron Icon">
                                <ChevronRightIcon className={styles.chevronRightIcon} />
                            </Variant>
                        </div>
                        <Kit.Description>Chevron</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Arrow Icon">
                                <ArrowRightIcon className={styles.arrowRightIcon} />
                            </Variant>
                        </div>
                        <Kit.Description>Arrow</Kit.Description>
                    </Kit.Item>
                </div>
            </Kit.Section>

            <Kit.Section title="Social">
                <div className={styles.itemsGroup}>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="WhatsApp">
                                <WhatsAppIcon className="smallIcon" />
                            </Variant>
                        </div>
                        <Kit.Description>WhatsApp</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Facebook">
                                <FacebookIcon className="smallIcon" />
                            </Variant>
                        </div>
                        <Kit.Description>Facebook</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <div className={styles.icon}>
                            <Variant name="Pinterest">
                                <PinterestIcon className="smallIcon" />
                            </Variant>
                        </div>
                        <Kit.Description>Pinterest</Kit.Description>
                    </Kit.Item>
                </div>
            </Kit.Section>
        </Kit>
    ),
    environmentProps: {
        windowWidth: 430,
        windowHeight: 700,
    },
    isSnippet: true,
});
