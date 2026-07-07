import type { ReactNode } from "react";
import "./MainContent.css";

type Props = {
    children?: ReactNode;
};

export default function MainContent({ children }: Props) {
    return (
        <main className="main-content">
            {children}
        </main>
    );
}