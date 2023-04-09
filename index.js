const { Configuration, OpenAIApi } = require("openai");



// import { HumanChatMessage, SystemChatMessage } from "langchain/schema";


// const chat = new ChatOpenAI({ openAIApiKey: "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", temperature: 0.9, modelName: "gpt-3.5-turbo" });

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);






const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')



const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}





// const run = async (text) => {
//   const responseA = await chat.call([
//     new HumanChatMessage(
//       text
//     ),
//   ]);
//   return responseA;
// }


const app = express();



async function run(text) {

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: text,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
    stop: ["You:"],
  });

  return response;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.get('/:response', (req, res) => {
  
  run(req.params.response).then((e) => {
    res.json({"data": e.data.choices[0].text})
  })
  
  
});

app.listen(3000, '0.0.0.0');

