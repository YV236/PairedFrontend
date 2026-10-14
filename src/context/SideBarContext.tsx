import { createContext, useContext, useState, type ReactNode } from "react";

interface SidebarContextType {
    rightContent: ReactNode | null;
    setRightContent: (content: ReactNode | null) => void;
    closeRightSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [rightContent, setRightContent] = useState<ReactNode>(null);

    return (
        <SidebarContext.Provider value={{ 
            rightContent, 
            setRightContent, 
            closeRightSidebar: () => setRightContent(null) 
        }}>
            {children}
        </SidebarContext.Provider>
    );
}

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) throw new Error("useSidebar must be used within SidebarProvider");
    return context;
};