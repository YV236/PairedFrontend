import type { ReactNode } from "react";

type Props = {
    children?: ReactNode;
};

export default function RightSidebar({ children }: Props) {
    return (
        <aside className="right-sidebar">
            {children}
        </aside>
    );
}