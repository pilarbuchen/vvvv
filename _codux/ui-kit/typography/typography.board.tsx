import { createBoard, Variant } from '@wixc3/react-board';
import { Kit } from '../ui-kit-utils/kit';

export default createBoard({
    name: 'Typography',
    Board: () => (
        <Kit category="Foundation" title="Typography">
            <Kit.Section title="Heading">
                <Kit.Item>
                    <Variant name="Heading1">
                        <h1 className="heading1">Heading 1</h1>
                    </Variant>
                    <Kit.Description>
                        <b>--heading1:</b> Marcellus / 80px / 1
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Heading2">
                        <h2 className="heading2">Heading 2</h2>
                    </Variant>
                    <Kit.Description>
                        <b>--heading2:</b> Marcellus / 55px / 1.1
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Heading3">
                        <h3 className="heading3">Heading 3</h3>
                    </Variant>
                    <Kit.Description>
                        <b>--heading3:</b> Marcellus / 42px / 1.2
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Heading4">
                        <h4 className="heading4">Heading 4</h4>
                    </Variant>
                    <Kit.Description>
                        <b>--heading4:</b> Marcellus / 40px / 1.2
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Heading5">
                        <h5 className="heading5">Heading 5</h5>
                    </Variant>
                    <Kit.Description>
                        <b>--heading5:</b> Marcellus / 20px / 1.3
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Heading6">
                        <h6 className="heading6">Heading 6</h6>
                    </Variant>
                    <Kit.Description>
                        <b>--heading6:</b> Figtree (400) / 20px / 1.4
                    </Kit.Description>
                </Kit.Item>
            </Kit.Section>

            <Kit.Section title="Paragraph">
                <Kit.Item>
                    <Variant name="Paragraph1">
                        <div className="paragraph1">
                            We ignite opportunity by setting the world in motion. 0123456789
                        </div>
                    </Variant>
                    <Kit.Description>
                        <b>--paragraph1:</b> Figtree (400) / 16px / 1.5
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Paragraph2">
                        <div className="paragraph2">
                            We ignite opportunity by setting the world in motion. 0123456789
                        </div>
                    </Variant>
                    <Kit.Description>
                        <b>--paragraph2:</b> Figtree (400) / 15px / 1.6
                    </Kit.Description>
                </Kit.Item>
                <Kit.Item>
                    <Variant name="Paragraph3">
                        <div className="paragraph3">
                            We ignite opportunity by setting the world in motion. 0123456789
                        </div>
                    </Variant>
                    <Kit.Description>
                        <b>--paragraph3:</b> Figtree (400) / 14px / 1.6
                    </Kit.Description>
                </Kit.Item>
            </Kit.Section>
        </Kit>
    ),
    environmentProps: {
        windowWidth: 450,
        windowHeight: 700,
    },
    isSnippet: true,
});
