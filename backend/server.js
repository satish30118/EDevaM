const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const sliderRoutes = require('./routes/home/sliderRoutes');
const galleryRoutes = require('./routes/home/galleryRoutes');
const aboutRoutes = require('./routes/home/aboutRoutes');
const newsRoutes = require('./routes/home/newsRoutes');
const publicationRoutes = require('./routes/publicationRoutes');
const awardsRoutes = require('./routes/awardsRoutes');
const peopleRoutes = require('./routes/peopleRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

// Connect to MongoDB
connectDB();


// Routes
app.use('/api/users', userRoutes);
app.use('/api/home/slider', sliderRoutes);
app.use('/api/home/gallery', galleryRoutes);
app.use('/api/home/about', aboutRoutes);
app.use('/api/home/news', newsRoutes);
app.use('/api/publication', publicationRoutes);
app.use('/api/awards', awardsRoutes);
app.use('/api/people', peopleRoutes);


app.use("/", (req,res)=>{
  res.send("Edevam backend is live")
})



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
