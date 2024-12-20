import React from 'react';
import CustomAvatar from './CustomAvatar';
import TextAvatar from './TextAvatar';
import ProfileContainer from './ProfileContainer';

const ProfileCard: React.FC = () => {
    return (
        <ProfileContainer padding={18}>
            <CustomAvatar />
            <TextAvatar />
        </ProfileContainer>
    );
};

export default ProfileCard;
