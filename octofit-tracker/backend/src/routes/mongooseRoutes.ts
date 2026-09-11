import { Router } from 'express';
import type { Model } from 'mongoose';

export function createMongooseRouter<T>(model: Model<T>) {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      response.json(await model.find().lean());
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (request, response, next) => {
    try {
      const record = await model.create(request.body);
      response.status(201).json(record);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
