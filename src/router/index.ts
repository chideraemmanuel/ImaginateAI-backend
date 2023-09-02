import { generateImage } from '../controllers/openai';
import express from 'express';

const router = express.Router();

export default (): express.Router => {
  router.post('/generate-image', generateImage);

  return router;
};
