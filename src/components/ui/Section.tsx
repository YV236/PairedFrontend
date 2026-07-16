import type { ReactNode } from "react";
import "./Section.css";

export interface SectionItemData {
    icon: ReactNode;
    text: string;
    underText?: string;
    onClick: () => void;
}

interface SectionProps {
    items: SectionItemData[];
}

export default function Section({ items }: SectionProps) {
    return (
        <div className="section-container">
            {items.map((item, index) => (
                <div
                    key={index} 
                    className="section-item"
                    onClick={() => {
                        item.onClick();
                    }}
                >
                    <div className="section-item-icon">{item.icon}</div>
                    
                    <div className="section-item-text-container">
                        <span>{item.text}</span>
                        {item.underText && <small>{item.underText}</small>}
                    </div>
                </div>
            ))}
        </div>
    );
}