import type { ReactNode } from "react";
import "./LeftSidebar.css"

type Props = {
    children?: ReactNode;
};

export default function LeftSidebar({ children }: Props) {
    return (
        <aside className="left-sidebar">
            {children}
        </aside>
    );
}