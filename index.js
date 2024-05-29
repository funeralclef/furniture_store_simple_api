// http://localhost:5000/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Підключення до бази даних
var connection = require('./config/config.bd');

// Роутинг
const orderRoutes = require('./router/order.routes');
const userRoutes = require('./router/user.routes');
const categoryRoutes = require('./router/category.routes');

app.use('/api/order', orderRoutes);
app.use('/api/user', userRoutes);
app.use('/api/category', categoryRoutes);

// Простий тестовий endpoint
app.get('/', (req, res) => {
    res.status(200).json("Сервер працює");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));