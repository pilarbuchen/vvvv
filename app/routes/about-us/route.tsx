import { FadeIn, Reveal } from '~/components/visual-effects';
import styles from './route.module.scss';

export default function AboutUsPage() {
    return (
        <div className={styles.root}>
            <Reveal direction="up" duration={3} className={styles.aboutSection}>
                <h1 className={styles.title}>We are ReClaim</h1>
                <div className={styles.subtitle}>A women-owned local business</div>
                <div className={styles.description}>
                    This is the space to introduce visitors to the business or brand. Briefly
                    explain who&#39;s behind it, what it does and what makes it unique. Share its
                    core values and what this site has to offer.
                </div>
            </Reveal>
            <FadeIn duration={2}>
                <img
                    className={styles.image}
                    src="https://static.wixstatic.com/media/c837a6_825d7dbd2e634114906169b9674b56fa~mv2.jpg"
                    alt=""
                />
            </FadeIn>
        </div>
    );
}
