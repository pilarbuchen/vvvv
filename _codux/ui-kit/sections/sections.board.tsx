import { createBoard, Variant } from '@wixc3/react-board';
import { CategoryLink } from '~/components/category-link/category-link';
import { LabelWithArrow } from '~/components/label-with-arrow/label-with-arrow';
import ComponentWrapper from '_codux/board-wrappers/component-wrapper';
import { BackgroundParallax, FloatIn } from '~/components/visual-effects';
import { FeaturedProductsSection } from '~/components/featured-products-section/featured-products-section';
import { Kit } from '../ui-kit-utils/kit';

import styles from './sections.board.module.scss';

export default createBoard({
    name: 'Sections',
    Board: () => (
        <ComponentWrapper>
            <Kit category="Core Components" title="Sections" className={styles.container}>
                <Kit.Section>
                    <Kit.Item>
                        <Variant name="Hero Banner">
                            <div className="heroBanner">
                                <img
                                    src="https://static.wixstatic.com/media/32aab9_2c3c65e142434906992aedb17db53566~mv2.jpg"
                                    className="heroBannerImage"
                                    alt=""
                                />
                                <div className="heroBannerOverlay">
                                    <div className="heroBannerSubtitle">ReClaim</div>
                                    <h1 className="heroBannerTitle">Reuse. Repurpose. Relove.</h1>
                                    <CategoryLink categorySlug="all-products">
                                        <LabelWithArrow>Shop Collections</LabelWithArrow>
                                    </CategoryLink>
                                </div>
                            </div>
                        </Variant>
                        <Kit.Description>Hero Banner</Kit.Description>
                    </Kit.Item>

                    <Kit.Item>
                        <Variant name="Promotional">
                            <BackgroundParallax
                                className="floatingCardBackground"
                                backgroundImageUrl="https://static.wixstatic.com/media/c837a6_cae4dbe5a7ee4637b7d55d9bd5bd755d~mv2.png/v1/fill/w_1178,h_974,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_cae4dbe5a7ee4637b7d55d9bd5bd755d~mv2.png"
                            >
                                <FloatIn direction="up">
                                    <div className="floatingCard">
                                        <div className="floatingCardHeader">Happy Holidays</div>
                                        <div className="floatingCardContent">
                                            <h2 className="floatingCardTitle">The holiday</h2>
                                            <div className="floatingCardDescription">
                                                Home essentials for
                                                <br /> sustainable living
                                            </div>
                                        </div>
                                        <CategoryLink categorySlug="all-products">
                                            <LabelWithArrow>Buy a gift</LabelWithArrow>
                                        </CategoryLink>
                                    </div>
                                </FloatIn>
                            </BackgroundParallax>
                        </Variant>
                        <Kit.Description>Promotional</Kit.Description>
                    </Kit.Item>

                    <Kit.Item>
                        <Variant name="Featured Products">
                            <FeaturedProductsSection
                                categorySlug="new-in"
                                title="New In"
                                description="Embrace a sustainable lifestyle with our newest drop-ins."
                            />
                        </Variant>
                        <Kit.Description>Featured Products</Kit.Description>
                    </Kit.Item>
                </Kit.Section>
            </Kit>
        </ComponentWrapper>
    ),
    environmentProps: {
        windowWidth: 1070,
        windowHeight: 1800,
    },
    isSnippet: true,
});
