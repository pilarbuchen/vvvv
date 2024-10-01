import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Link Cards',
    Board: () => (
        <div className="cardsSection">
            <a className="linkCard" href="about:blank">
                <img
                    className="linkCardBackground"
                    src="https://static.wixstatic.com/media/c837a6_c05a03f48fbd49e7b5046d1b18c930eb~mv2.jpg/v1/fill/w_547,h_730,q_90/c837a6_c05a03f48fbd49e7b5046d1b18c930eb~mv2.jpg"
                    alt=""
                />
                <div className="linkCardTitle">Kitchen</div>
            </a>
            <a className="linkCard" href="about:blank">
                <img
                    className="linkCardBackground"
                    src="https://static.wixstatic.com/media/c837a6_269f35d6ccff4321b7ed1e65c2835c61~mv2.jpg/v1/fill/w_548,h_730,q_90/c837a6_269f35d6ccff4321b7ed1e65c2835c61~mv2.jpg"
                    alt=""
                />
                <div className="linkCardTitle">Bath</div>
            </a>
            <a className="linkCard" href="about:blank">
                <img
                    className="linkCardBackground"
                    src="https://static.wixstatic.com/media/c837a6_d38d8d08196d477ba49efff880d5b918~mv2.jpg/v1/fill/w_547,h_730,q_90/c837a6_d38d8d08196d477ba49efff880d5b918~mv2.jpg"
                    alt=""
                />
                <div className="linkCardTitle">On the Go</div>
            </a>
        </div>
    ),
    environmentProps: {
        windowWidth: 800,
        windowHeight: 390,
    },
});
