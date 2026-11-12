import { RxCross1 } from "react-icons/rx";
import RoundButton from "../ui/RoundButton";
import styles from "./ProfileCard.module.css";
import { GoPencil } from "react-icons/go";
import UserAvatar from "../ui/UserAvatar";
import type { ReactNode } from "react";
import Section from "../ui/Section";

export interface ProfileInfoItem {
    icon: ReactNode;
    text: string;
    underText: string;
    onClick: () => void;
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
    infoItems,
    tabs,
    onClose,
    onEdit
}: ProfileCardProps) {
    return (
        <div className={styles["profile-card-container"]}>
            <div className={styles["profile-header"]}>
                <RoundButton icon={<RxCross1 />} onClick={onClose} />
                <h2 className={styles["profile-header-title"]}>{title}</h2>
                <RoundButton icon={<GoPencil />} onClick={onEdit} />
            </div>

            <div className={styles["profile-main-info"]}>
                <div className={styles["profile-avatar"]}><UserAvatar userName={name} /></div>
                <h3 className={styles["profile-name"]}>{name}</h3>
                <span className={styles["profile-status"]}>{status}</span>
            </div>

            <Section items={infoItems} />

            <div className={styles["profile-tabs"]}>
                {tabs.map((tab, index) => (
                    <button 
                        key={index} 
                        className={`${styles["profile-tab"]} ${index === 0 ? styles.active : ""}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            
        </div>
    );
}
