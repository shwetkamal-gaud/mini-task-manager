import { Task } from '@/app/page'
import { Edit, Trash2 } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'

interface TaskCardProp {
    id: number
    title: string;
    status: string;
    createdAt: string;
    setTask: Dispatch<SetStateAction<Task | null>>;
    setShowForm: Dispatch<SetStateAction<boolean>>
    setShowDelete: Dispatch<SetStateAction<boolean>>
}

const TaskCard = ({ id, title, status, createdAt, setTask, setShowForm, setShowDelete }: TaskCardProp) => {
    return (
        <div className="p-4 mb-4 backdrop-blur-sm bg-white/60 border border-white/10 rounded-xl shadow transition hover:scale-[1.02] hover:shadow-xl">
            <div className="flex justify-between items-center">
                <div>
                    <h3 title={title} className="text-lg font-semibold break-words truncate w-30 line-clamp-2">{title}</h3>
                    <p className="text-xs text-gray-400">{createdAt}</p>
                </div>
                <div
                    className={`px-3 py-1 text-sm rounded-xl ${status === 'done' ? 'bg-green-400 text-white' : 'bg-gray-400/20 text-gray-800'
                        }`}
                >
                    {status}
                </div>
                <div className='flex items-center gap-2'>
                    <button onClick={() => { setShowForm(true); setTask({ id, title, status, createdAt }) }}>
                        <Edit />
                    </button>
                    <button onClick={() => { setTask({ id, title, status, createdAt }); setShowDelete(true) }}>
                        <Trash2 />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard