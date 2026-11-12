import type { ReactNode } from "react";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";
import "./PageLayout.css";

type PageLayoutProps = {
    left: ReactNode;
    main?: ReactNode;
    right?: ReactNode;
    mobileView: "left" | "main";
};

export default function PageLayout({ left, main, right, mobileView }: PageLayoutProps) {
    return (
        <div className={`page-layout mobile-view-${mobileView}`}>
            <LeftSidebar>{left}</LeftSidebar>
            <div className="divider"/>
            {main && <MainContent>{main}</MainContent>}
            {right && <RightSidebar>{right}</RightSidebar>}
        </div>
    );
}
