import React from "react";
import { ProfileHeader } from "../profile";

interface ProfileProps {
  name: string;
  email: string;
  imageUrl: string;
}

export const Header: React.FC<ProfileProps> = ({ name, email, imageUrl }) => {
  return (
    <div>
      <ProfileHeader name={name} email={email} imageUrl={imageUrl} />
    </div>
  );
};

export default Header;
