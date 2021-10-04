import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import animals from './middleware/animals.js';
const app = express();

app.use(express.json());
app.use('/animals', animals);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
