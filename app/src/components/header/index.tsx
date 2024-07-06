import React from "react";
import { ProfileHeader } from "../profile";

interface ProfileProps {
  name: string;
  email: string;
  imageUrl: string;
}

export const Header: React.FC<ProfileProps> = ({ name, email, imageUrl }) => {
  return <div></div>;
};

export default Header;
