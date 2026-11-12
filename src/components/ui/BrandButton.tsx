import { Link } from "react-router-dom";
import styles from "./BrandButton.module.css";

type BrandButtonProps = {
    to?: string;
    size?: "default" | "compact" | "footer";
    ariaLabel?: string;
};

export default function BrandButton({ to = "/", size = "default", ariaLabel = "Paired home" }: BrandButtonProps) {
    return (
        <Link className={`${styles["brand-button"]} ${styles[`brand-button--${size}`]}`} to={to} aria-label={ariaLabel}>
            <img className={styles["brand-button-mark"]} src="/favicon.svg" alt="" />
            <span className={styles["brand-button-name"]}>Paired</span>
        </Link>
    );
}
