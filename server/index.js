import express from 'express';
import cors from 'cors';

import userRoutes from './routes/user.js';
import adminRoutes from './routes/admin.js';
import productTypeRoutes from './routes/productType.js';
import productRoutes from './routes/product.js';
import orderRoutes from './routes/order.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/admins', adminRoutes);
app.use('/api/v1/product-types', productTypeRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);

app.get('/', (req, res) => {
	return res.send('I am here in index.js');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is up and running at http://localhost:${PORT}`);
});
