import styles from './spinner.module.scss';

interface SpinnerProps {
    size: number;
}

export const Spinner = ({ size }: SpinnerProps) => {
    return (
        <svg viewBox="0 0 50 50" width={size} height={size} className={styles.spinner}>
            <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="1"
                className={styles.circle}
            ></circle>
        </svg>
    );
};
