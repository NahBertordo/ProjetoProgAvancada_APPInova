"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EstandeRoutes_1 = __importDefault(require("./routes/EstandeRoutes"));
const GrupoRoutes_1 = __importDefault(require("./routes/GrupoRoutes"));
const AlunoRoutes_1 = __importDefault(require("./routes/AlunoRoutes"));
const ProfessorRoutes_1 = __importDefault(require("./routes/ProfessorRoutes"));
const AvaliacaoRoutes_1 = __importDefault(require("./routes/AvaliacaoRoutes"));
const CriterioRoutes_1 = __importDefault(require("./routes/CriterioRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api', EstandeRoutes_1.default);
app.use('/api', GrupoRoutes_1.default);
app.use('/api', AlunoRoutes_1.default);
app.use('/api', ProfessorRoutes_1.default);
app.use('/api', AvaliacaoRoutes_1.default);
app.use('/api', CriterioRoutes_1.default);
app.get('/', (req, res) => {
    res.send('INOVAWEEK - Avaliação');
});
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
