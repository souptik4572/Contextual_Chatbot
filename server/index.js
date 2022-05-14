import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.get('/', (req, res) => {
	return res.send('I am here in index.js');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is up and running at http://localhost:${PORT}`);
});
