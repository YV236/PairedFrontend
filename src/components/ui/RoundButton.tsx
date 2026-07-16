import type { ReactNode } from "react";
import "./RoundButton.css";

interface RoundButtonProps {
    icon: ReactNode;
    onClick: () => void;
    backgroundColor?: string;
}

export default function RoundButton({ 
    icon, 
    onClick, 
    backgroundColor = "transparent"
}: RoundButtonProps) {
    return (
        <button 
            className="round-button" 
            onClick={onClick}
            style={{ backgroundColor }}
        >
            {icon}
        </button>
    );
}