import { MdAlternateEmail, MdPhone } from "react-icons/md";
import ProfileCard from "./ProfileCard";

type Props = {
    onClose: () => void;
};

//todo: ПОДУМАТИ НАД ТИМ ЧИ ПОТРІБЕН ВЗАГАЛІ ЦЕЙ КОМПОНЕНТ, ЧИ НАПИСАТИ ЯКИЙСЬ ВЕБХУК, КОТРИЙ БУДЕ БРАТИ ДАНІ ЗА ID І ВИМАЛЬОВУВАТИ,
//ТОМУ ЯК Є СЕНС ЦЬОМУ КОМПОНЕНТІ, ЩОБ МОЖНА БУЛО РОЗРІЗНЯТИ ХТО ЦЕ, ПРОТЕ ХЗ
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
                { icon: <MdPhone />, text: "+380 66 453 56 31", underText: "Phone", onClick: () => { navigator.clipboard.writeText("phone number") } },
                { icon: <MdAlternateEmail />, text: "@y_vnnk", underText: "Username", onClick: () => { navigator.clipboard.writeText("nickName") } },
            ]}
            tabs={["Posts", "Gifts", "Story Archive"]}
            onClose={onClose}
            onEdit={handleEditSelf}
        />
    );
}