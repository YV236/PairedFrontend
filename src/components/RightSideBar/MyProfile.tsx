import ProfileCard from "./ProfileCard";

type Props = {
    onClose: () => void;
};

export default function MyProfile({ onClose }: Props) {
    const handleEditSelf = () => {
        console.log("Перехід на сторінку редагування власного профілю");
    };

    return (
        <ProfileCard 
            title="My Profile"
            name="YV"
            status="online"
            avatarIcon="☯️"
            infoItems={[
                { icon: "📞", value: "+380 66 453 56 31", label: "Phone" },
                { icon: "@", value: "@y_vnnk", label: "Username" },
            ]}
            tabs={["Posts", "Gifts", "Story Archive"]}
            onClose={onClose}
            onEdit={handleEditSelf}
        />
    );
}