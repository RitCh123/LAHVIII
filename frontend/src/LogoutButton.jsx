import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { ChakraProvider, Input, InputGroup, Button, Text } from '@chakra-ui/react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} style={{marginLeft: "2.5%"}}>
      Logout
    </Button>
  );
};

export default LogoutButton;
