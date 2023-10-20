import express, { Request, Response } from 'express'
import EstandeRouter from './routes/EstandeRoutes'
import GrupoRouter from './routes/GrupoRoutes'
import AlunoRouter from './routes/AlunoRoutes'
import ProfessorRouter from './routes/ProfessorRoutes'
import AvaliacaoRouter from './routes/AvaliacaoRoutes'
import CriterioRouter from './routes/CriterioRoutes'

const app = express()
const port = 3000

app.use(express.json())
app.use('/api', EstandeRouter)
app.use('/api', GrupoRouter)
app.use('/api', AlunoRouter)
app.use('/api', ProfessorRouter)
app.use('/api', AvaliacaoRouter)
app.use('/api', CriterioRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('INOVAWEEK - Avaliação')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})