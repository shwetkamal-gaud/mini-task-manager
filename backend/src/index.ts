import express from 'express';
import cors from 'cors';
import taskRoute from './routes/task.route'

const app = express();

app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3001', 'https://mini-task-manager-nine.vercel.app'] }));
app.use(express.json());
app.use('/api', taskRoute)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));