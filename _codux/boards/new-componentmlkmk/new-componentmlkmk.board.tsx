import { createBoard } from '@wixc3/react-board';
import { NewComponentmlkmk } from '../../../src/components/new-componentmlkmk/new-componentmlkmk';

export default createBoard({
    name: 'NewComponentmlkmk',
    Board: () => <NewComponentmlkmk />,
    environmentProps: {
        windowWidth: 1024,
    },
});
