import type { ReactNode } from "react";
import styles from "./Section.module.css";

export interface SectionItemData {
    icon: ReactNode;
    text: string;
    underText?: string;
    onClick: () => void;
}

interface SectionProps {
    items: SectionItemData[];
}

export default function Section({ items }: SectionProps) {
    return (
        <div className={styles["section-container"]}>
            {items.map((item, index) => (
                <div
                    key={index} 
                    className={styles["section-item"]}
                    onClick={() => {
                        item.onClick();
                    }}
                >
                    <div className={styles["section-item-icon"]}>{item.icon}</div>
                    
                    <div className={styles["section-item-text-container"]}>
                        <span>{item.text}</span>
                        {item.underText && <small>{item.underText}</small>}
                    </div>
                </div>
            ))}
        </div>
    );
}
