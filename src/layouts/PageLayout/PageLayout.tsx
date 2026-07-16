import { useEffect, useState, type ReactNode } from "react";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";
import "./PageLayout.css";

type PageLayoutProps = {
    left: ReactNode;
    main?: ReactNode;
    right?: ReactNode;
};

export default function PageLayout({ left, main, right }: PageLayoutProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile) {
        return (
            <div className="page-layout">
                {main ? (
                    <MainContent>{main}</MainContent>
                ) : (
                    <LeftSidebar>{left}</LeftSidebar>
                )}
                
                {right && (
                    <RightSidebar>{right}</RightSidebar>
                )}
            </div>
        );
    }

    return (
        <div className="page-layout">
            <LeftSidebar>{left}</LeftSidebar>
            <div className="divider"/>
            {main && <MainContent>{main}</MainContent>}
            {right && <RightSidebar>{right}</RightSidebar>}
        </div>
    );
}