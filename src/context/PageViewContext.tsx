import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type ContentArea = "left" | "main" | "right";
type MobileView = "left" | "main";

interface PageViewContextType {
    rightContent: ReactNode | null;
    mainContent: ReactNode | null;
    leftContent: ReactNode | null;
    mobileView: MobileView;
    activeChatId: string | null;
    setContent: (content: ReactNode | null, area: ContentArea) => void;
    closeContent: (area: ContentArea) => void;
    setMobileView: (view: MobileView) => void;
    setActiveChatId: (chatId: string | null) => void;
}

const PageViewContext = createContext<PageViewContextType | undefined>(undefined);

export function PageViewProvider({ children }: { children: ReactNode }) {
    const [rightContent, setRightContent] = useState<ReactNode | null>(null);
    const [mainContent, setMainContent] = useState<ReactNode | null>(null);
    const [leftContent, setLeftContent] = useState<ReactNode | null>(null);
    const [mobileView, setMobileView] = useState<MobileView>("left");
    const [activeChatId, setActiveChatId] = useState<string | null>(null);

    const setContent = useCallback((content: ReactNode | null, area: ContentArea) => {
        switch (area) {
            case "left":
                setLeftContent(content);
                break;
            case "main":
                setMainContent(content);
                break;
            case "right":
                setRightContent(content);
                break;
        }
    }, []);

    const closeContent = useCallback((area: ContentArea) => {
        setContent(null, area);
    }, [setContent]);

    return (
        <PageViewContext.Provider
            value={{
                rightContent,
                mainContent,
                leftContent,
                mobileView,
                activeChatId,
                setContent,
                closeContent,
                setMobileView,
                setActiveChatId,
            }}
        >
            {children}
        </PageViewContext.Provider>
    );
}

export function usePageView() {
    const context = useContext(PageViewContext);

    if (!context) {
        throw new Error("usePageView must be used within PageViewProvider");
    }

    return context;
}
