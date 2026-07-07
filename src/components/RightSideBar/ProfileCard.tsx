import "./ProfileCard.css";

export interface ProfileInfoItem {
    icon: string;
    value: string;
    label: string;
    rightElement?: React.ReactNode;
}

interface ProfileCardProps {
    title: string;
    name: string;
    status: string;
    avatarIcon?: string;
    infoItems: ProfileInfoItem[];
    tabs: string[];
    onClose: () => void;
    onEdit: () => void;
}

export default function ProfileCard({
    title,
    name,
    status,
    avatarIcon = "👤",
    infoItems,
    tabs,
    onClose,
    onEdit
}: ProfileCardProps) {
    return (
        <div className="profile-card-container">
            <div className="profile-header">
                <button className="icon-btn" onClick={onClose}>✕</button>
                <h2 className="profile-header-title">{title}</h2>
                <button className="icon-btn edit-btn" onClick={onEdit}>✏️</button>
            </div>

            <div className="profile-main-info">
                <div className="profile-avatar">
                    <span>{avatarIcon}</span>
                </div>
                <h3 className="profile-name">{name}</h3>
                <span className="profile-status">{status}</span>
            </div>

            <div className="profile-info-block">
                {infoItems.map((item, index) => (
                    <div className="profile-info-item" key={index}>
                        <div className="info-icon">{item.icon}</div>
                        <div className="info-text">
                            <span className="info-value">{item.value}</span>
                            <span className="info-label">{item.label}</span>
                        </div>
                        {item.rightElement && (
                            <div className="info-right-action">{item.rightElement}</div>
                        )}
                    </div>
                ))}
            </div>

            <div className="profile-tabs">
                {tabs.map((tab, index) => (
                    <button 
                        key={index} 
                        className={`profile-tab ${index === 0 ? "active" : ""}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            
        </div>
    );
}