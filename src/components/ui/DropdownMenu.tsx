import type { ReactNode } from "react";
import "./DropdownMenu.css";

export interface DropdownMenuItem {
    icon: ReactNode;
    title: string;
    onClick: () => void;
}

interface DropdownMenuProps {
    items: DropdownMenuItem[];
    onClose: () => void;
}

export default function DropdownMenu({ items, onClose }: DropdownMenuProps) {
    return (
        <>
            <div className="menu-backdrop" onClick={onClose} />
            
            <div className="dropdown-menu">
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className="dropdown-item" 
                        onClick={() => {
                            item.onClick();
                            onClose();
                        }}
                    >
                        <div className="dropdown-item-icon">{item.icon}</div>
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
        </>
    );
}