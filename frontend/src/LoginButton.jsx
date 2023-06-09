import React from 'react';

import { useAuth0 } from "@auth0/auth0-react";

import { ChakraProvider, Input, InputGroup, Button, Text } from '@chakra-ui/react';

const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Login</Button>;
  
}

export default LoginButton;
