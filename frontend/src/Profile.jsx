import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Avatar name={user.name} src={user.picture} style={{marginRight: "5%"}} />

    )
  );
};

export default Profile;
