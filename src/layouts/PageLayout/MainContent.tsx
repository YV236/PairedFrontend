import type { ReactNode } from "react";
import styles from "./MainContent.module.css";

type Props = {
    children?: ReactNode;
    className?: string;
};

export default function MainContent({ children, className }: Props) {
    return (
        <main className={[styles["main-content"], className].filter(Boolean).join(" ")}>
            {children}
        </main>
    );
}
