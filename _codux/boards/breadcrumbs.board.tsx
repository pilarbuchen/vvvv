import { createBoard } from '@wixc3/react-board';
import { Breadcrumbs } from '~/components/breadcrumbs/breadcrumbs';
import ComponentWrapper from '../board-wrappers/component-wrapper';

export default createBoard({
    name: 'Breadcrumbs',
    Board: () => (
        <ComponentWrapper>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        title: 'Home',
                        to: '/',
                    },
                    {
                        title: 'All Products',
                        to: '/products/all-products',
                    },
                    {
                        title: 'Lemongrass Natural Soap',
                        to: '/product-details/lemongrass-natural-soap',
                    },
                ]}
            />
        </ComponentWrapper>
    ),
    environmentProps: {
        windowWidth: 400,
        windowHeight: 100,
    },
});
