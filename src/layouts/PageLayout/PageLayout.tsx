import type { ReactNode } from "react";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";
import styles from "./PageLayout.module.css";

type PageLayoutProps = {
    left: ReactNode;
    main?: ReactNode;
    right?: ReactNode;
    mobileView: "left" | "main";
};

export default function PageLayout({ left, main, right, mobileView }: PageLayoutProps) {
    const hideMainOnMobile = mobileView === "left" ? styles["mobile-hidden"] : undefined;
    const hideLeftOnMobile = mobileView === "main" ? styles["mobile-hidden"] : undefined;

    return (
        <div className={styles["page-layout"]}>
            <LeftSidebar className={hideLeftOnMobile}>{left}</LeftSidebar>
            <div className={styles.divider}/>
            {main && <MainContent className={hideMainOnMobile}>{main}</MainContent>}
            {right && <RightSidebar>{right}</RightSidebar>}
        </div>
    );
}
