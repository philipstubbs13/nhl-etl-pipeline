import path from 'path';
import express from 'express';
import { errorHandler } from './middleware/errorMiddleware';
import { Response} from 'express';
import teamRoutes from './routes/teamRoutes';
import playerRoutes from './routes/playerRoutes';

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/teams', teamRoutes)
app.use('/api/players', playerRoutes)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (_, res: Response) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (_, res: Response) => res.send('Please set to production'))
}

app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))