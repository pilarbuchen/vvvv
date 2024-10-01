import { createBoard } from '@wixc3/react-board';
import { ErrorPage } from '~/components/error-page/error-page';

export default createBoard({
    name: 'Error Page',
    Board: () => (
        <ErrorPage
            title="Page Not Found"
            message="Looks like the page you're trying to visit doesn't exist"
            actionButtonText="Back to shopping"
        />
    ),
    environmentProps: {
        windowHeight: 400,
        windowWidth: 650,
    },
});
