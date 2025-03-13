import { persistStore } from './persist-store';
export const taskQueueView = persistStore('taskQueueView', 'workers', true);
