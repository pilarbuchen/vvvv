import { createBoard } from '@wixc3/react-board';
import { LabelWithArrow } from '~/components/label-with-arrow/label-with-arrow';

export default createBoard({
    name: 'Text Banner',
    Board: () => (
        <div className="textBannerSection">
            <div className="textBanner">
                <div className="textBannerSubtitle">Products of the highest standards</div>
                <div className="textBannerTitle">
                    Essential home collections for sustainable living
                </div>
                <a href="about:blank">
                    <LabelWithArrow>Shop Collections</LabelWithArrow>
                </a>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 600,
        windowHeight: 260,
    },
});
