import type { DataInputsItem } from "@/components/ui/DataInputs"
import DataInputs from "@/components/ui/DataInputs";
import RoundButton from "@/components/ui/RoundButton";
import type { SectionItemData } from "@/components/ui/Section";
import Section from "@/components/ui/Section";
import UserAvatar from "@/components/ui/UserAvatar";
import { FaLongArrowAltLeft, FaRegCheckCircle } from "react-icons/fa";
import { LuCake } from "react-icons/lu";
import "./EditProfile.css"


export default function EditProfile(){
    const userMock = {
        userName: "YV",
        userNickname: "vnnk"
    }

    const profileData: DataInputsItem[] = [
        {
            upTitle: "User main data",
            insideTitle: "First name",
            maxSymbols: 50,
            initialValue: userMock.userName
        },
        {
            insideTitle: "Lastname name (optional)",
        },
        {
            insideTitle: "Bio",
            maxSymbols: 50,
        },
    ];

    const userNickname: DataInputsItem[] = [
        {
            upTitle: "Nickname",
            insideTitle: "NickName (optional)",
            initialValue: userMock.userNickname
        }
    ];

    const actions: SectionItemData[] = [
        {
            icon: <LuCake/> ,
            text: "Birthday",
            onClick: () => console.log("Birthday popup opened")
        }
    ]

    const submition: SectionItemData[] = [
        {
            icon: <FaRegCheckCircle  />,
            text: "Submit",
            onClick: () => console.log("Submition clicked")
        }
    ]

    return(
        <>
            <div className="edit-profile-header">
                <RoundButton 
                    icon={<FaLongArrowAltLeft />}
                    onClick={() => console.log("go back pressed")}
                />
                <span style={{marginLeft: "1rem"}}> Edit profile </span>
            </div>
            
            <div className="edit-profile-content">
                <div className="edit-profile-image">
                    <UserAvatar userName={userMock.userName}/>
                </div>
                <DataInputs items={profileData} />
                <Section items={actions} />
                <DataInputs items={userNickname} />
            </div>

            <div className="edit-profile-footer">
                <Section items={submition} />
            </div>
        </>
    );
}