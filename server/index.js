import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

// Enabling cross origin resource sharing, for the time being keeping this origin accessible to all kinds
app.use(cors());

// Enabling the default body parser of express for dealing with data inside request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This is our base route, for the time being considering this to be the first version of our backend server API's
app.use('/api/v1', routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server is up and running at http://localhost:${PORT}`);
});
