import express from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateImage = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: 'Hello' }],
    //   model: 'gpt-3.5-turbo',
    // });
    const { prompt, amount, size } = request.body;

    if (!prompt || !amount || !size) {
      return response
        .status(400)
        .json({ error: true, message: 'Please provide the required options' });
    }

    const imageSize =
      size === '256' ? '256x256' : size === '512' ? '512x512' : '1024x1024';

    const res = await openai.images.generate({
      prompt,
      n: parseInt(amount),
      size: imageSize,
    });

    response.status(200).json(res.data);

    // console.log(chatCompletion.choices[0].message);
  } catch (error) {
    console.log(error);
    return response
      .status(400)
      .json({ error: true, message: 'The image could not be generated' });
  }
  //   response.status(200).json({ message: 'generate' });
};
