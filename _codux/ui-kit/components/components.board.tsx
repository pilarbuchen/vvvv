import { createBoard, Variant } from '@wixc3/react-board';
import { Accordion } from '~/components/accordion/accordion';
import { ProductCard } from '~/components/product-card/product-card';
import { QuantityInput } from '~/components/quantity-input/quantity-input';
import classNames from 'classnames';
import { CategoryLink } from '~/components/category-link/category-link';
import ComponentWrapper from '_codux/board-wrappers/component-wrapper';
import { Kit } from '../ui-kit-utils/kit';

import styles from './components.board.module.scss';

export default createBoard({
    name: 'Components & Elements',
    Board: () => (
        <ComponentWrapper>
            <Kit category="Core Components" title="Components & Elements">
                <Kit.Section title="Input">
                    <Kit.Item>
                        <Variant name="Number Input">
                            <QuantityInput value={6} onChange={() => {}} />
                        </Variant>
                        <Kit.Description>Number Input</Kit.Description>
                    </Kit.Item>
                </Kit.Section>

                <Kit.Section title="Accordion">
                    <Kit.Item>
                        <Variant name="Accordion">
                            <Accordion
                                items={[
                                    {
                                        title: 'Product Info',
                                        content: 'Content',
                                    },
                                    {
                                        title: 'Return & Refund Policy',
                                        content: 'Content',
                                    },
                                    {
                                        title: 'Shipping Info ',
                                        content: 'Content',
                                    },
                                ]}
                                className={styles.demoWidth}
                            />
                        </Variant>
                        <Kit.Description>Accordion</Kit.Description>
                    </Kit.Item>
                </Kit.Section>

                <Kit.Section title="Labels">
                    <Kit.Item>
                        <Variant name="Ribbon">
                            <span className="ribbon">Sale</span>
                        </Variant>
                        <Kit.Description>Ribbon</Kit.Description>
                    </Kit.Item>
                </Kit.Section>

                <Kit.Section title="Cards">
                    <Kit.Item className={styles.demoWidth}>
                        <Variant name="Product Card">
                            <ProductCard
                                name="Bamboo Toothbrush"
                                imageUrl="https://static.wixstatic.com/media/c837a6_18152edaef9940ca88f446ae94b48a47~mv2.jpg/v1/fill/w_824,h_1098,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_18152edaef9940ca88f446ae94b48a47~mv2.jpg"
                                ribbon="NEW"
                                price="$6"
                                discountedPrice="$5.5"
                            />
                        </Variant>
                        <Kit.Description>Product Card</Kit.Description>
                    </Kit.Item>
                    <Kit.Item className={styles.demoWidth}>
                        <Variant name="Link Card">
                            <CategoryLink
                                categorySlug="all-products"
                                className={classNames('linkCard', styles.linkCard)}
                            >
                                <img
                                    className="linkCardBackground"
                                    src="https://static.wixstatic.com/media/c837a6_c05a03f48fbd49e7b5046d1b18c930eb~mv2.jpg/v1/fill/w_547,h_730,q_90/c837a6_c05a03f48fbd49e7b5046d1b18c930eb~mv2.jpg"
                                    alt=""
                                />
                                <div className="linkCardTitle">All Products</div>
                            </CategoryLink>
                        </Variant>
                        <Kit.Description>Link Card</Kit.Description>
                    </Kit.Item>
                </Kit.Section>
            </Kit>
        </ComponentWrapper>
    ),
    environmentProps: {
        windowWidth: 400,
        windowHeight: 800,
    },
    isSnippet: true,
});
