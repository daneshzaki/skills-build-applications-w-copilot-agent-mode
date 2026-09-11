import { Router } from 'express';

export type ResourceRecord = Record<string, unknown>;

export function createResourceRouter(initialRecords: ResourceRecord[] = []) {
  const router = Router();
  const records = [...initialRecords];

  router.get('/', (_request, response) => {
    response.json(records);
  });

  router.post('/', (request, response) => {
    const record = request.body as ResourceRecord;
    records.push(record);
    response.status(201).json(record);
  });

  return router;
}
