import type { ReactNode } from "react";
import styles from "./RoundButton.module.css";

interface RoundButtonProps {
    icon: ReactNode;
    onClick: () => void;
    backgroundColor?: string;
    ariaLabel?: string;
}

export default function RoundButton({ 
    icon, 
    onClick, 
    backgroundColor = "transparent",
    ariaLabel,
}: RoundButtonProps) {
    return (
        <button 
            className={styles["round-button"]}
            onClick={onClick}
            aria-label={ariaLabel}
            style={{ backgroundColor }}
        >
            {icon}
        </button>
    );
}
