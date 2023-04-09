import React, {useState} from 'react';



import { Form, useFormAnswers } from "@quillforms/renderer-core";

import "@quillforms/renderer-core/build-style/style.css";

import { registerCoreBlocks } from "@quillforms/react-renderer-utils";

import { registerBlockType } from '@quillforms/blocks';

import { ChakraProvider, Input, InputGroup, Button, Text } from '@chakra-ui/react';

import LoginButton from './LoginButton.jsx';

import LogoutButton from './LogoutButton.jsx';

import Profile from './Profile.jsx'

//fonts
import '@fontsource/raleway/400.css';

import '@fontsource/open-sans/700.css';

//import encryption methods

import encryptText from './encrypt/encrypt.js';


import { useAuth0 } from "@auth0/auth0-react";



registerCoreBlocks();

registerBlockType("thankyou-screen", {
  "supports": {
    "editable": true, // If the block has an answer or not.
  },
  // The custom attributes for the block.
  "attributes": {
    "name": {
      "type": "website",
      "default": ""
    },
    "message": {
      "type": "long-text",
      "default": "Thank you. Below, you can access your survey through this link!"
    },
    "autoRedirect":{"type":"boolean","default":false},
    "autoRedirectUrl":{"type":"string","default":""},
    "autoRedirectLag":{"type":"number","default":0.5},
    "showButton":{"type":"boolean","default":true},
    "buttonText":{"type":"string","default":"Again"},
    "buttonMode":{"type":"string","default":"reload","enum":["reload","redirect"]},
    "redirectUrl":{"type":"string","default":""},
    "redirectOnSameWindow":{"type":"boolean","default":true},
  },
  
  // Block display, this should be a react component. 
  "display": ({ id, next, attributes, setIsValid, setIsAnswered, setValidationErr, showNextBtn,blockWithError, val, setVal, showErrMsg }) => {
    const formAnswers = useFormAnswers();

    const description = encryptText(formAnswers['kd12edg']['value']);

    const type = formAnswers['gqr1294c']['value'];

    const numQuestions = formAnswers['tys5437q']['value'];

    const url = "https://weekly-coding-1-21.forestgump.repl.co/get/?description=" + description + "&type=" + type + "&numQuestions=" + numQuestions;

    const [copy, setCopy] = useState(false);

    const value = url;

    const handleClick = () => {
      setCopy(true);
      console.log(value);
      navigator.clipboard.writeText(value);
    }


    return (
      <main style={{}}>
        <ChakraProvider>
          
          <div style={{margin: "1.5%", textAlign: "center", verticalAlign: "center", lineHeight: "100px"}}>
            <div style={{marginBottom: "1.5%"}}>
              <Text fontSize='4xl'>Access the link to your survey: </Text>
            </div>
            <InputGroup size='md'>
              <Input placeholder='Basic usage' style={{padding: '20px', color: "black"}} size='lg' value={url} disabled={true} />
              <Button h="5vh" size='lg' onClick={handleClick} style={{marginLeft: "2vw"}}>
                {copy ? "Copied": "Copy"}
              </Button>
            </InputGroup>
          </div>
          
        </ChakraProvider>
      </main>
      
    ) // This is just an example. Please see the full example on Codesandbox in the link below.
  }
})


const App = () => {

  const {isAuthenticated} = useAuth0();

  
  return (
    <ChakraProvider>
    
    <div style={{ width: "100%", height: "100vh"}}>
      <div style={{display: "flex", flex: 1, justifyContent: "space-between", width: "100%", margin: "2vw"}}>
          <div style={{display: "flex", justifyItems: "left", flex: 1}}>
            {isAuthenticated ? <LogoutButton />: <LoginButton />}
          </div>
            
          <Profile />
        </div>
      
      <Form
        formId="1"
        formObj={{
          blocks: [
            {
              name: "welcome-screen",
              id: "jg1401r",
              attributes: {
                label: "Create a form",
                description: "To gather information about the nature for your form, please answer a few questions.",
                attachment: {
                  type: "image",
                  url:
                    "https://quillforms.com/wp-content/uploads/2022/01/4207-ai-1.jpeg"
                }
              }
            },
            {
              name: "long-text",
              id: "kd12edg",
              attributes: {
                required: true,
                label: "Provide a descripton of your business."
              }
            },
            {
              name: "multiple-choice",
              id: "gqr1294c",
              attributes: {
                required: true,
                multiple: true,
                verticalAlign: false,
                label: "What type of survey are you interested in?",
                choices: [
                  {
                    label: "Customer Feedback",
                    value: "customer feedback"
                  },
                  {
                    label: "Questionnaire",
                    value: "questionnaire"
                  },
                  {
                    label: "Online Survey",
                    value: "online survey"
                  },
                  {
                    label: "Product Management",
                    value: "product management"
                  }
                ]
              }
            },
            {
              name: "number",
              id: "tys5437q",
              attributes: {

                label: "How many questions would you like the survey to be?",

                required: true,
                "setMin": true, // Default: false
                "min": 1, // Default: 0
                "setMax": false, // Default: false
              }
            },
            {
              "id":"dnvlorq4n",
              "name":"thankyou-screen",
              "attributes": {
                "autoRedirect":false,
                "autoRedirectUrl":"",
                "autoRedirectLag":0.5,
                "showButton":true,
                "buttonText":"View Pricing",
                "buttonMode":"redirect",
                "redirectUrl":"https:\/\/quillforms.com\/#pricing",
                "redirectOnSameWindow":true,
                "attachment":[],
                "description":"",
                "label":"Thank you {{field:kylujjxu0}},\n\nHope you have liked Quill Forms \ud83d\ude42",
                "customHTML":"",
                "layout":"stack",
                "attachmentFocalPoint": {
                  "x":0.5,"y":0.5
                },
                "attachmentFancyBorderRadius":false,
                "attachmentBorderRadius":"0px",
                "attachmentMaxWidth":"none"
              }}
          ],
        }}
        
        onSubmit={(data, { completeForm, setIsSubmitting, goToBlock, setSubmissionErr }) => {
          
          setTimeout(() => {
            
            setIsSubmitting(false);
            
            completeForm();
            
          }, 500);
        }}
      />
    </div>
    </ChakraProvider>
    )
}

export default App;
