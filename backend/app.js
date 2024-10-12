import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import podcastRoutes from './routes/podcastRoutes.js'

dotenv.config()
// require('./DataBase/DB_Connect.js')
import DB_Connect from './DataBase/DB_Connect.js'
DB_Connect();
const app = express();
app.use(cookieParser())

app.use(express.json())

//API's

app.use("/api/v1", userRoutes)
app.use("/api/v1", categoryRoutes)
app.use("/api/v1", podcastRoutes)

app.listen(process.env.PORT, () => {
    console.log(`app is listening on ${process.env.PORT}`);
    })