import express from 'express';
import cors from "cors"
import router from './routes/index.js';

const app = express();
app.use(express.json());
app.use(cors())

app.use(router);
const porta = process.env.PORT
app.listen(porta, () => {
    console.log(`Server is listening on port ${porta}.`);
});