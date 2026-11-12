import { MdArrowOutward } from "react-icons/md"
import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

type LinkButtonProps = {
    to: string;
    value: string;
    variant?: "primary" | "outline";
    size?: "default" | "compact";
    className?: string;
    ariaLabel?: string;
};

export default function LinkButton({
    to,
    value,
    variant = "primary",
    size = "default",
    className = "",
    ariaLabel,
}: LinkButtonProps) {
    const classes = [styles["link-button"], styles[`link-button--${variant}`], styles[`link-button--${size}`], className]
        .filter(Boolean)
        .join(" ");

    return (
        <Link className={classes} to={to} aria-label={ariaLabel}>
            <span className={styles["link-button-value"]}>{value}</span>
            <span className={styles["link-button-icon"]} aria-hidden="true"><MdArrowOutward /></span>
        </Link>
    );
}
