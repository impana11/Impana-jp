require(‘dotenv’).config();

const express = require(‘express’);

const mongoose = require(‘mongoose’);

const cors = require(‘cors’);

const authRoutes = require(‘./routes/authRoutes’);

const taskRoutes = require(‘./routes/taskRoutes’);

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,

 useUnifiedTopology: true

}).then(() => console.log(“MongoDB Connected”))

.catch(err => console.log(err));

App.use(‘/api/auth’, authRoutes);

App.use(‘/api/tasks’, taskRoutes);

Const PORT = process.env.PORT || 5000;

App.listen(PORT, () => console.log(`Server running on port ${PORT}`));
