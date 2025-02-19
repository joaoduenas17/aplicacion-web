require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
