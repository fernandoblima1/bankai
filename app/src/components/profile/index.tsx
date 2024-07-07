import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React, { useCallback, useContext } from "react";
import { MainNav } from "../main-nav";
import { ModeToggle } from "../ui/mode-toggle";
import { Icons } from "../icons";
import { buttonVariants } from "../ui/button";
import { AuthContext } from "@/contexts/AuthContext";

interface ProfileHeaderProps {
  name: string;
  email: string;
  imageUrl: string;
  isLoading: boolean;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  email,
  imageUrl,
  isLoading,
}) => {
  const { keycloak } = useContext(AuthContext);
  return (
    <header className="top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav username={name} isLoading={isLoading} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <button onClick={() => keycloak?.logout()}>Sair</button>
            </div>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};
