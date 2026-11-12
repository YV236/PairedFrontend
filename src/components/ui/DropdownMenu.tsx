import type { ReactNode } from "react";
import styles from "./DropdownMenu.module.css";

export interface DropdownMenuItem {
    icon: ReactNode;
    title: string;
    onClick: () => void;
}

interface DropdownMenuProps {
    items: DropdownMenuItem[];
    onClose: () => void;
    align?: "left" | "right";
}

export default function DropdownMenu({ items, onClose, align = "right" }: DropdownMenuProps) {
    return (
        <>
            <div className={styles["menu-backdrop"]} onClick={onClose} />
            
            <div className={`${styles["dropdown-menu"]} ${styles[`align-${align}`]}`}>
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className={styles["dropdown-item"]}
                        onClick={() => {
                            item.onClick();
                            onClose();
                        }}
                    >
                        <div className={styles["dropdown-item-icon"]}>{item.icon}</div>
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
        </>
    );
}
