import "express-async-errors"
import express, {Application} from "express"
import {handleErrors} from "./errors"
import movieRouter from "./routers/movies.routers"

const app: Application = express()
app.use(express.json())

app.use("/movies", movieRouter)

app.use(handleErrors)

export default app