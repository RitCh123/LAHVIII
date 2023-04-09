import React, { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import decryptText from './encrypt/decrypt.js';

import { Form, useFormAnswers } from "@quillforms/renderer-core";

import "@quillforms/renderer-core/build-style/style.css";

import { registerCoreBlocks } from "@quillforms/react-renderer-utils";

import { registerBlockType } from '@quillforms/blocks';

import { ChakraProvider, Input, InputGroup, Button, Text } from '@chakra-ui/react';






// /**
//  * QuillForms Depndencies
//  */


// import { ChakraProvider, Textarea } from '@chakra-ui/react'




// registerCoreBlocks();

// export default function Survey() {

//   const [searchParams] = useSearchParams();

//   const description = decryptText(searchParams.get("description"));

//   const type = searchParams.get("type");

//   const numQuestions = searchParams.get("numQuestions");


//   // try setting all the blocks to numQuestions using map() and set up questions the same

//   registerBlockType("input-custom", {
//     "supports": {
//       "editable": true, // If the block has an answer or not.
//     },
//     // The custom attributes for the block.
//     "attributes": {
      
//     },
  
//       // Block display, this should be a react component. 
//     "display": () => {
//       return (
//         <>
//           <ChakraProvider>
    
//             <Textarea placeholder='Here is a sample placeholder' style={{resize: "none", fontSize: "1em", height: "15vh"}} />
            
//           </ChakraProvider>
//         </>
//       )
//     }
//   })

//   const [totalBlocks, setTotalBlocks] = useState([])
  
   
  
//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <Form
//         formId="2"
        
//         formObj={{
//           blocks: [
//             {
//               name: "short-text",
//               id: "first-question",
//               attributes: {
//                 classnames: "asdsa",
//                 nextBtnLabel: "Great",
//                 attachment: {
//                   type: "image",
//                   url:
//                     "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
//                 },
//                 defaultValue: "aaa",
//                 layout: "split-right",
//                 required: true,
//                 label: "Let's start with your name"
//               }
//             },
//             {
//               name: "multiple-choice",
//               id: "gqr1294c",
//               attributes: {
//                 required: true,
//                 multiple: true,
//                 verticalAlign: false,
//                 label: "Which subjects do you love the most?",
//                 choices: [
//                   {
//                     label: "Physics",
//                     value: "physics"
//                   },
//                   {
//                     label: "Math",
//                     value: "math"
//                   },
//                   {
//                     label: "English",
//                     value: "english"
//                   },
//                   {
//                     label: "Biology",
//                     value: "biology"
//                   }
//                 ]
//               }
//             },
//             {
//               name: "statement",
//               id: "g91imf1023",
//               attributes: {
//                 label: "You are doing great so far!",
//                 buttonText: "Continue",
//                 quotationMarks: true
//               }
//             },
//             {
//               name: "website",
//               id: "bv91em9123",
//               attributes: {
//                 required: true,
//                 multiple: true,
//                 label: "Please insert your website url!"
//               }
//             }
//           ],
//           settings: {
//             animationDirection: "vertical",
//             disableWheelSwiping: false,
//             disableNavigationArrows: false,
//             disableProgressBar: false
//           },
//           theme: {
//             font: "Roboto",
//             buttonsBgColor: "#9b51e0",
//             logo: {
//               src: ""
//             },
//             questionsColor: "#000",
//             answersColor: "#0aa7c2",
//             buttonsFontColor: "#fff",
//             buttonsBorderRadius: 25,
//             errorsFontColor: "#fff",
//             errorsBgColor: "#f00",
//             progressBarFillColor: "#000",
//             progressBarBgColor: "#ccc"
//           }
//         }}
//         beforeGoingNext={({
//           setIsFieldValid,
//           setIsPending,
//           currentBlockId,
//           answers,
//           setFieldValidationErr,
//           setIsCurrentBlockSafeToSwipe,
//           goToField,
//           goNext
//         }) => {
//           if (
//             currentBlockId === "first-question" &&
//             answers[currentBlockId].value === "aaa"
//           ) {
//             setIsFieldValid(currentBlockId, false);
//             setFieldValidationErr(currentBlockId, "This is a test");
//             setIsCurrentBlockSafeToSwipe(false);
//           } else {
//             setIsFieldValid(currentBlockId, true);
//             setFieldValidationErr(currentBlockId, "");
//             setIsCurrentBlockSafeToSwipe(true);
//             goNext();
//           }
//         }}
        
//         onSubmit={(data, { completeForm, setIsSubmitting, goToBlock, setSubmissionErr }) => {
          
//           setTimeout(() => {
            
//             setIsSubmitting(false);
            
//             completeForm();
            
//           }, 500);
//         }}
//       />
//     </div>
//   )
  
// }


// import { Form } from "@quillforms/renderer-core";
// import "@quillforms/renderer-core/build-style/style.css";
// import { registerCoreBlocks } from "@quillforms/react-renderer-utils";

registerCoreBlocks();


const App = () => {

  // const [questionU, setQuestionU] = useState();

  const [answer, setAnswer] = useState('');



  const [searchParams] = useSearchParams();


  const description = decryptText(searchParams.get("description"));

  const type = searchParams.get("type");


  const numQuestions = searchParams.get("numQuestions");

  // const getQuestions = () => {

  
  //   const questions = [...Array(parseInt(numQuestions)).keys()]
  
    
  
  //   let questionPairs = []
  
  
  //   questions.forEach((item, index) => {
  //     questionPairs.push({
  //       name: "short-text",
  //       id: String.valueOf(item),
  //       attributes: {
  //         classnames: "asdsa",
  //         nextBtnLabel: "Next",
  //         required: true,
  //         label: "What would you like to suggest?"
  //       }
  //     })
  //   })
  
  //   // setQuestionU({
  //   //     name: "short-text",
  //   //     id: "String.valueOf(item)",
  //   //     attributes: {
  //   //       classnames: "asdsa",
  //   //       nextBtnLabel: "Next",
  //   //       required: true,
  //   //       label: "What would you like to suggest?"
  //   //     }
  //   // })

  //   return questionPairs;
  // }

  const [questions, setQuestions] = useState([
    {
      name: "short-text",
      id: "387nsd6",
      attributes: {
        classnames: "example",
        nextBtnLabel: "Next",
        required: true,
        label: "How would you describe your overall experience with the business?"
  }}] , () => {

    console.log(this.state.questions)
    
  });

  const [i, setI] = useState(1);

  const [response, setResponse] = useState('');

  async function fetchQuestions(resp) {

     let url = await fetch('https://lhvii-backend.forestgump.repl.co/' + resp)
      let responseJson = await url.json()
      setResponse(responseJson);
      
  }

  const [data, setData] = useState('')

  // useEffect(() => {
  //   const questionPairs = [];
  
  //   for (let i = 0; i < 1; i++) {
  //     questionPairs.push({
  //       name: "short-text",
  //       id: String(i),
  //       attributes: {
  //         classnames: "example",
  //         nextBtnLabel: "Next",
  //         required: true,
  //         label: "What would you like to suggest?"
  //       }
  //     });
  //   }
  
  //   setQuestions(questionPairs);
  // }, [numQuestions]);

  

  useEffect(() => {

    fetchQuestions("You are a local business owner. You want to ask each and every survey questions that are very insightful and long. Ask me ONE QUESTION that is around 3-4 sentences that you would ask to a customer that is insightful and improve the feedback given to your business and NOTHING ELSE. Please consider the customer's previous response when asking the very long question. ");

    
  }, [])

  
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Form
        formId="2"
        formObj={{
          blocks: questions,
          settings: {
            animationDirection: "vertical",
            disableWheelSwiping: false,
            disableNavigationArrows: false,
            disableProgressBar: false
          },
          theme: {
            font: "Roboto",
            buttonsBgColor: "#9b51e0",
            logo: {
              src: ""
            },
            questionsColor: "#000",
            answersColor: "#0aa7c2",
            buttonsFontColor: "#fff",
            buttonsBorderRadius: 25,
            errorsFontColor: "#fff",
            errorsBgColor: "#f00",
            progressBarFillColor: "#000",
            progressBarBgColor: "#ccc"
          }
        }}
        beforeGoingNext={({
          setIsFieldValid,
          setIsPending,
          currentBlockId,
          answers,
          setFieldValidationErr,
          setIsCurrentBlockSafeToSwipe,
          goToField,
          goNext
        }) => {

          setAnswer(answers[currentBlockId].value);

          

          

          if (i < numQuestions) {
            fetchQuestions("Continue the conversation. I responded: " + answer+ ". Ask me a question that addressed the problem in the response and asks what the company can do to fix it.")
            setQuestions([...questions, {
              name: "long-text",
              id: String(Math.random() * 1000000),
              attributes: {
                classnames: "example",
                nextBtnLabel: "Next",
                required: true,
                label: response['data']
              }
            }])
            
            
          }
          console.log(i)
          goNext();
        }}
        onSubmit={(data, { completeForm, setIsSubmitting }) => {
          setTimeout(() => {
            setIsSubmitting(false);
            setI(i + 1);
            completeForm();
            
          }, 500);
        }}
      />
    </div>
  );
};

export default App;
