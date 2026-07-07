import type { ReactNode } from "react";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";
import "./PageLayout.css";

type PageLayoutProps = {
    left: ReactNode;
    main?: ReactNode;
    right?: ReactNode;
};

export default function PageLayout({
    left,
    main,
    right,
}: PageLayoutProps) {

    return (
        <div className="page-layout">
            <LeftSidebar>{left}</LeftSidebar>

            {main && <MainContent>{main}</MainContent>}

            {right && <RightSidebar>{right}</RightSidebar>}
        </div>
    );
}
