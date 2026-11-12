import { useTheme } from "@/context/ThemeProvider";
import RoundButton from "@/components/ui/RoundButton";
import { FaLongArrowAltLeft, FaRegMoon } from "react-icons/fa";
import { MdLanguage, MdPhone, MdAlternateEmail } from "react-icons/md";
import Section, { type SectionItemData } from "@/components/ui/Section" 
import { CiSun } from "react-icons/ci";
import UserAvatar from "@/components/ui/UserAvatar";
import { GoPencil } from "react-icons/go";
import { TbDotsVertical } from "react-icons/tb";
import { useState } from "react";
import DropdownMenu, { type DropdownMenuItem } from "@/components/ui/DropdownMenu";
import { IoLogOutOutline } from "react-icons/io5";
import styles from "./Settings.module.css";

interface SettingsProps {
    userName: string;
    email: string;
    phoneNumber: string;
    twoFactorEnabled: boolean;
    firstName: string;
    lastName: string;
    onBack: () => void;
}

export default function Settings({ 
    firstName, 
    lastName,
    phoneNumber,
    userName,
    onBack
}: SettingsProps) {

    const { theme, toggleTheme } = useTheme();
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const profileData: SectionItemData[] = [
        {
            icon: <MdPhone />,
            text: phoneNumber,
            underText: "Phone",
            onClick: () => { navigator.clipboard.writeText(phoneNumber) }
        },
        {
            icon: <MdAlternateEmail />,
            text: userName,
            underText: "Username",
            onClick: () => { navigator.clipboard.writeText(phoneNumber) }
        }
    ];

    const generalSettings: SectionItemData[] = [
        {
            icon: theme === "dark" ? <FaRegMoon /> : <CiSun />,
            text: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
            onClick: toggleTheme
        },
        {
            icon: <MdLanguage />,
            text: "Language",
            underText: "English",
            onClick: () => console.log("Language settings opened")
        }
    ];

    const menuItems: DropdownMenuItem[] =[
        {
            icon: <IoLogOutOutline />,
            title: "Log out",
            onClick: () => console.log("User logged out")
        }
    ]

    return (
        <>
            <div className={styles["settings-header"]}>
                <div className={styles["settings-title-group"]}>
                    <RoundButton 
                        icon={<FaLongArrowAltLeft />}
                        onClick={onBack}
                        ariaLabel="Go back"
                    />
                    <span> Settings </span>
                </div>
                <div className={styles["settings-header-actions"]}>
                    <RoundButton 
                        icon={<GoPencil />}
                        onClick={()=>console.log("pencil click")}
                    />
                    <div style={{ position: "relative" }}>
                        <RoundButton
                            icon={<TbDotsVertical />}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                        {isMenuOpen && (
                            <DropdownMenu
                                items={menuItems}
                                onClose={() => setIsMenuOpen(false)}
                                align="right"
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className={styles["settings-profile"]}>
                <div className={styles["settings-avatar"]}><UserAvatar userName={firstName ?? userName}/></div>
                <div className={styles["settings-name"]}>{firstName} {lastName}</div>
                <div className={styles["settings-status"]}>Online</div>{/*Add online status in future*/}
            </div>

            <Section items={profileData}/>
            <Section items={generalSettings} />
            
        </>
    );
}
