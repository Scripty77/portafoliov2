import React from "react";
import CustomAvatar from "./CustomAvatar";
import TextAvatar from "./TextAvatar";
import ProfileContainer from "./ProfileContainer";

const ProfileCard: React.FC = () => {
  return (
    <ProfileContainer Padding={2}>
      <CustomAvatar />
      <TextAvatar />
    </ProfileContainer>
  );
};

export default ProfileCard;