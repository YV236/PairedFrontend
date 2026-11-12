import type { ReactNode } from "react";
import styles from "./RightSideBar.module.css";

type Props = {
    children?: ReactNode;
};

export default function RightSidebar({ children }: Props) {
    return (
        <aside className={styles["right-sidebar"]}>
            {children}
        </aside>
    );
}
