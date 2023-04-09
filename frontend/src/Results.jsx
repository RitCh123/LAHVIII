import React, {useState, useEffect} from 'react';

import { ChakraProvider, Input, InputGroup, Button, Text } from '@chakra-ui/react';

import { Card, CardHeader, CardBody, CardFooter, Box, Heading, Stack,StackDivider, VStack } from '@chakra-ui/react'

import { Badge } from '@chakra-ui/react'

const Results = () => {

  const [scores, setScores] = useState('')

  const [categories, setCategories] = useState('')

  var data = [
    "I hated the service at my local restaurant. The food tasted garbage, and I went outside to eat in the garden, but the entire plate just reeked.",
    "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.",
    "I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!"
  ]

  async function fetchAPI() {

    console.log("fetching...")

    const response = await fetch("https://temptinggrumpyexponent.anujpatnaik1.repl.co/api/score")

    const jsonData = await response.json();
    console.log("done")
    
    console.log(jsonData);

    setScores(jsonData);

    const resp = await fetch("https://temptinggrumpyexponent.anujpatnaik1.repl.co/api/categories")

    const json = await resp.json()

    console.log(json)

    setCategories(json)
  }

  useEffect(() => {

    fetchAPI();
    
  },[])

  

  const cards = data.map((i) => 
    
    
    <Box>
      <Heading size='xs' textTransform='uppercase'>
        Response
      </Heading>
      <Text pt='2' fontSize='sm'>
        {i}
      </Text>
    </Box>
    

    
  )

  const arr = [...Array(data.length).keys()];

  const modCards = arr.map((i) => 
     

     <Box bg={scores ? scores["score"][i] > 5 ? "tomato": scores["score"][i] > 3 ? "beige": "#F0FFFF": "white" }>
      <Heading size='xs' textTransform='uppercase'>
        Response Score: {scores ? scores["score"][i]: "Loading..."}
      </Heading>
      <Text pt='2' fontSize='sm'>
        {data[i]}
      </Text>
    </Box>
      
                           
  )

  const category = categories ? categories["categories"].map((i) => 

     <Text fontSize='xl' fontWeight='none'>
       {i[0].split("_").join(" ")} with confidence {parseInt(i[1]*100)}%
      <Badge ml='1' fontSize='0.8em' colorScheme='green'>
        Build
      </Badge>
    </Text>
    
  ): "Loading..."
  
  return (

    <ChakraProvider>
    <main style={{margin: "2%"}}>
      <Text fontSize="5xl" style={{textAlign: "center", marginBottom: "2%"}}>Sample Analysis</Text>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{width: "45%"}}>
          <Card>
            <CardHeader>
              <Heading size='md'>Summary</Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                {cards}
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div style={{width: "45%"}}>
          <div>
            <Text fontSize="3xl"><b>Sentiment Analysis</b></Text>
          <Card>
            
            <CardHeader>
              <Heading size='md'>Translated</Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                {modCards}
              </Stack>
            </CardBody>
          </Card>
        </div>
        </div>
      </div>
      <div style={{width: "45%"}}>
        <Text fontSize="3xl"><b>Categorical Analysis</b></Text>
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
        >
          {category}
      </VStack>
      </div>
      
    </main>
    </ChakraProvider>
    
  )
  
}

export default Results;
