import "./Settings.css";

interface SettingsProps {
    userName: string;
    email: string;
    phoneNumber: string;
    twoFactorEnabled: boolean;
    firstName: string;
    lastName: string;
    onBack?: () => void;
}

export default function Settings({ 
    userName, 
    email, 
    phoneNumber, 
    twoFactorEnabled, 
    firstName, 
    lastName,
    onBack
}: SettingsProps) {
    return (
        <div className="settings-container">
            <div className="settings-header">
                <div 
                    onClick={onBack} 
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                    <span>←</span> Settings
                </div>
                <div className="settings-header-actions">
                    <span>✏️</span>
                    <span>⋮</span>
                </div>
            </div>

            <div className="settings-profile">
                <div className="settings-avatar">
                    <span style={{color: '#000', fontSize: '24px'}}>☯️</span>
                </div>
                <div className="settings-name">{firstName} {lastName}</div>
                <div className="settings-status">online</div>
            </div>

            <div className="settings-card">
                <div className="settings-item">
                    <div className="settings-item-icon">📞</div>
                    <div className="settings-item-content">
                        <span className="settings-item-title">{phoneNumber}</span>
                        <span className="settings-item-subtitle">Phone</span>
                    </div>
                </div>
                <div className="settings-item">
                    <div className="settings-item-icon">@</div>
                    <div className="settings-item-content">
                        <span className="settings-item-title">@{userName}</span>
                        <span className="settings-item-subtitle">Username</span>
                    </div>
                </div>
                <div className="settings-item">
                    <div className="settings-item-icon">✉️</div>
                    <div className="settings-item-content">
                        <span className="settings-item-title">{email}</span>
                        <span className="settings-item-subtitle">Email</span>
                    </div>
                </div>
            </div>

            <div className="settings-card">
                <div className="settings-item">
                    <div className="settings-item-icon">⚙️</div>
                    <div className="settings-item-content">
                        <span className="settings-item-title">General Settings</span>
                    </div>
                </div>
                <div className="settings-item">
                    <div className="settings-item-icon">🔔</div>
                    <div className="settings-item-content">
                        <span className="settings-item-title">Notifications</span>
                    </div>
                </div>
                <div className="settings-item">
                    <div className="settings-item-icon">🔒</div>
                    <div className="settings-item-content">
                        <span className="settings-item-title">Privacy and Security</span>
                    </div>
                    <div className="settings-item-value">
                        {twoFactorEnabled ? "2FA On" : ""}
                    </div>
                </div>
                <div className="settings-item">
                    <div className="settings-item-icon">📁</div>
                    <div className="settings-item-content">
                        <span className="settings-item-title">Chat Folders</span>
                    </div>
                </div>
                <div className="settings-item">
                    <div className="settings-item-icon">🌐</div>
                    <div className="settings-item-content">
                        <span className="settings-item-title">Language</span>
                    </div>
                    <div className="settings-item-value">English</div>
                </div>
            </div>

            <div className="settings-card">
                <div className="settings-item">
                    <div className="settings-item-icon">⭐</div>
                    <div className="settings-item-content">
                        <span className="settings-item-title">Telegram Premium</span>
                    </div>
                </div>
                <div className="settings-item">
                    <div className="settings-item-icon">🎁</div>
                    <div className="settings-item-content">
                        <span className="settings-item-title">Send a Gift</span>
                    </div>
                </div>
            </div>
        </div>
    );
}