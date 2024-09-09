import express from "express";
import studentRoutes from "./routes/StudentRoutes";


const app=express();

const PORT =process.env.PORT || 3000;

app.use(express.json());


// Middleware

app.use('/api', studentRoutes); // Use the imported routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port:http://localhost: ${PORT}`);
});

