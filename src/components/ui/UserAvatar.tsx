import styles from "./UserAvatar.module.css";

interface UserAvatarProps {
    imageUrl?: string;
    userName: string;
}

const getDynamicGradient = (name: string) => {
    if (!name) return "linear-gradient(135deg, #a7f078, #55c27f)";
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const positiveHash = Math.abs(hash);
    const minHue = 44;
    const maxHue = 115; 
    
    const hue1 = minHue + (positiveHash % (maxHue - minHue));
    const hue2 = hue1 + 40; 
    
    const color1 = `hsl(${hue1}, 54%, 57%)`;
    const color2 = `hsl(${hue2}, 54%, 57%)`;

    return `linear-gradient(135deg, ${color1}, ${color2})`;
};

const getInitials = (name: string) => {
    if (!name) return "?";
    
    const words = name.trim().split(/\s+/);
    
    if (words.length >= 2) {
        return (words[0][0] + words[1][0]).toUpperCase();
    }
    
    return name.substring(0, 2).toUpperCase();
};

export default function UserAvatar({ imageUrl, userName }: UserAvatarProps) {
    const initials = getInitials(userName);
    
    const backgroundGradient = getDynamicGradient(userName);

    return (
        <div 
            className={styles["avatar-section"]}
            style={!imageUrl ? { background: backgroundGradient } : undefined}
        >
            {imageUrl ? (
                <img src={imageUrl} alt={userName} className={styles["avatar-image"]} />
            ) : (
                <span className={styles["avatar-initial"]}>{initials}</span>
            )}
        </div>
    );
}
