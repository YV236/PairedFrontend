import { useState } from "react";
import "./DataInputs.css";

export interface DataInputsItem {
    upTitle?: string;
    insideTitle: string;
    maxSymbols?: number;
    initialValue?: string;
}

interface DataInputsProps {
    items: DataInputsItem[];
}

function SingleInput({ item }: { item: DataInputsItem }) {
    const [text, setText] = useState(item.initialValue || "");

    return (
        <div className="data-input-item">
            <div className="data-input-header">
                <span className="data-input-label">{item.upTitle}</span>
                {item.maxSymbols && (<span className="data-input-counter">
                    {item.maxSymbols - text.length}
                </span>)}
            </div>
            
            <input
                type="text"
                className="data-input-field"
                placeholder={item.insideTitle}
                maxLength={item.maxSymbols}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}

export default function DataInputs({ items }: DataInputsProps) {
    return (
        <div className="data-input-container">
            {items.map((item, index) => (
                <SingleInput key={index} item={item} />
            ))}
        </div>
    );
}