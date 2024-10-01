import { CategoryLink } from '~/components/category-link/category-link';
import { FeaturedProductsSection } from '~/components/featured-products-section/featured-products-section';
import { LabelWithArrow } from '~/components/label-with-arrow/label-with-arrow';
import { BackgroundParallax, FadeIn, FloatIn } from '~/components/visual-effects';

export default function HomePage() {
    return (
        <>
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

            <div className="textBannerSection">
                <FadeIn className="textBanner">
                    <div className="textBannerSubtitle">Products of the highest standards</div>
                    <div className="textBannerTitle">
                        Essential home collections for sustainable living
                    </div>
                    <CategoryLink categorySlug="all-products">
                        <LabelWithArrow>Shop Collections</LabelWithArrow>
                    </CategoryLink>
                </FadeIn>
            </div>

            <div className="cardsSection">
                <CategoryLink categorySlug="kitchen-essentials" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/c837a6_c05a03f48fbd49e7b5046d1b18c930eb~mv2.jpg/v1/fill/w_547,h_730,q_90/c837a6_c05a03f48fbd49e7b5046d1b18c930eb~mv2.jpg"
                        alt=""
                    />
                    <div className="linkCardTitle">Kitchen</div>
                </CategoryLink>
                <CategoryLink categorySlug="bath" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/c837a6_269f35d6ccff4321b7ed1e65c2835c61~mv2.jpg/v1/fill/w_548,h_730,q_90/c837a6_269f35d6ccff4321b7ed1e65c2835c61~mv2.jpg"
                        alt=""
                    />
                    <div className="linkCardTitle">Bath</div>
                </CategoryLink>
                <CategoryLink categorySlug="on-the-go" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/c837a6_d38d8d08196d477ba49efff880d5b918~mv2.jpg/v1/fill/w_547,h_730,q_90/c837a6_d38d8d08196d477ba49efff880d5b918~mv2.jpg"
                        alt=""
                    />
                    <div className="linkCardTitle">On the Go</div>
                </CategoryLink>
            </div>

            <FeaturedProductsSection
                className="alternateBackground"
                categorySlug="new-in"
                title="New In"
                description="Embrace a sustainable lifestyle with our newest drop-ins."
            />

            <BackgroundParallax
                className="floatingCardBackground"
                backgroundImageUrl="https://static.wixstatic.com/media/c837a6_cae4dbe5a7ee4637b7d55d9bd5bd755d~mv2.png/v1/fill/w_1178,h_974,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_cae4dbe5a7ee4637b7d55d9bd5bd755d~mv2.png"
            >
                <FloatIn direction="up">
                    <div className="floatingCard">
                        <div className="floatingCardHeader">Happy Holidays</div>
                        <div className="floatingCardContent">
                            <h2 className="floatingCardTitle">The holidays best sellers</h2>
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

            <FeaturedProductsSection
                categorySlug="best-sellers"
                title="Best Sellers"
                description="When quality is eco-friendly. Explore our top picks."
            />
        </>
    );
}
