import express from 'express';
const app = express();
import routes from './routes';
import path from 'path';
import cors from 'cors';

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(8080, () => {
    console.log('connection')
});
