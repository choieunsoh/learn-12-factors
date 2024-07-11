import { Router } from 'express';

import config from '../config';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send(`OK, ${config.NODE_ENV.toUpperCase()}:${config.PORT}`);
});

router.get('/health', (req, res) => {
  res.status(200).send(`OK, ${config.PORT}`);
});

export default router;
