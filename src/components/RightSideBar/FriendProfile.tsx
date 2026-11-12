import ProfileCard from "./ProfileCard";

type Props = {
    onClose: () => void;
};

export default function FriendProfile({ onClose }: Props) {
    const handleEditFriend = () => {
        console.log("Відкрито модалку для зміни імені контакту");
    };

    return (
        <ProfileCard 
            title="User Info"
            name="Васінька"
            status="last seen recently"
            avatarIcon="🌊"
            infoItems={[
                { icon: "@", text: "@v_shh1", underText: "Username", onClick: () => {} },
                { icon: "🔔", text: "Notifications", underText: "Manage alerts", onClick: () => {} },
            ]}
            tabs={["Media", "Files", "Links", "Music", "Voice"]}
            onClose={onClose}
            onEdit={handleEditFriend}
        />
    );
}
