const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const sliderRoutes = require('./routes/home/sliderRoutes');
const galleryRoutes = require('./routes/home/galleryRoutes');
const newsRoutes = require('./routes/home/newsRoutes');
const publicationRoutes = require('./routes/userRoutes');
const awardsRoutes = require('./routes/awardsRoutes');
const peopleRoutes = require('./routes/peopleRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/home/slider', sliderRoutes);
app.use('/api/home/gallery', galleryRoutes);
app.use('/api/home/news', newsRoutes);
app.use('/api/publication', publicationRoutes);
app.use('/api/awards', awardsRoutes);
app.use('/api/people', peopleRoutes);






app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
