import type { ReactNode } from "react";
import styles from "./LeftSidebar.module.css";

type Props = {
    children?: ReactNode;
    className?: string;
};

export default function LeftSidebar({ children, className }: Props) {
    return (
        <aside className={[styles["left-sidebar"], className].filter(Boolean).join(" ")}>
            {children}
        </aside>
    );
}
