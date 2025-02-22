import {
  GoogleGenerativeAI
} from "@google/generative-ai";

const apiKey = "AIzaSyB6H9MXALOO7VBh-FojZRIBtSIz8HwJEEA";

const MODEL_NAME = "gemini-2.0-flash";

async function run(prompt){
  const genAI=new GoogleGenerativeAI(apiKey);
  const model=genAI.getGenerativeModel({model:MODEL_NAME});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
const chat = model.startChat({
  generationConfig,
});

  const result = await chat.sendMessage(prompt);
  const response =result.response;
  console.log(response.text());
  return response.text();
}

export default run;