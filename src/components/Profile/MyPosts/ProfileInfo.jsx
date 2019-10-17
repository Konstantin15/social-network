import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if(!props.userProfile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src={props.userProfile.photos.large} alt=""/>
                <ProfileStatusWithHooks  status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div>Кто я: {props.userProfile.aboutMe}</div>
                <div>Мои любимые соцю сети:{" "}
                    {props.userProfile.contacts.facebook},{" "}
                    {props.userProfile.contacts.vk},{" "}
                    {props.userProfile.contacts.twitter},{" "}
                    {props.userProfile.contacts.instagram}
                </div>
            </div>
        </div>
    )

}

export default ProfileInfo;