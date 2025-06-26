'use client'
import DeleteModal from "@/components/DeleteModal";
import TaskCard from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";
import { ThemeToggle } from "@/components/ThemeToggle";

import { useEffect, useState } from "react";
export interface Task {
  id: number
  title: string,
  status: string,
  createdAt: string
}
const baseUrl = process.env.NEXT_PUBLIC_API_URL
export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const fetchTasks = async () => {

    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/tasks`);
      const data = await res.json();
      setTasks(data);

    }
    catch (e) {
      console.error(e)
    }
    finally {
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchTasks()
  }, [])
  const handleSubmit = async ({ title, status }: { title: string; status: string }) => {
    if (selectedTask) {
      await fetch(`${baseUrl}/api/tasks/${selectedTask.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, status }),
      });
    } else {
      await fetch(`${baseUrl}/api/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, status }),
      });
    }
    setShowForm(false);
    setSelectedTask(null);
    fetchTasks();
  };


  const handleDelete = async () => {
    if (!selectedTask) return;
    await fetch(`${baseUrl}/api/tasks/${selectedTask.id}`, {
      method: 'DELETE',
    });
    setShowDelete(false);
    setSelectedTask(null);
    fetchTasks();
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 bg-gradient-to-tr from-blue-200 via-purple-300 to-indigo-300 dark:from-gray-500 dark:via-gray-700 dark:to-gray-900 transition-colors duration-300">
      <div className="md:min-w-2xl w-lg h-[80vh] overflow-y-auto scrollbar-hide  border flex flex-col gap-3 border-white/30 dark:border-black/10 shadow p-3 bg-white/20 dark:bg-black/20 rounded-lg backdrop-blur-[32px]">
        <div className="flex flex-col bg gap-2 sticky top-0 z-50  ">
          <div className="flex items-center justify-between">
            <h1 className="text-white  text-2xl font-bold">Mini Task Manager</h1>
            <ThemeToggle />
          </div>

          <button onClick={() => {
            setSelectedTask(null);
            setShowForm(true);
          }} className=" p-2  self-end dark:bg-gray-900 text-white rounded-lg dark:hover:bg-black bg-blue-500 hover:bg-blue-600 ">
            Add Task
          </button>
        </div>

        {loading ? (
          <p className="text-center text-white">Loading tasks...</p>
        ) : tasks?.length <= 0 ? <p className="text-center text-white">NO tasks...</p> : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              status={task.status}
              createdAt={new Date(task.createdAt).toLocaleDateString()}
              setTask={setSelectedTask}
              setShowDelete={setShowDelete}
              setShowForm={setShowForm}
            />
          ))
        )}
      </div>
      {showForm && <TaskForm
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setSelectedTask(null);
        }}
        onSubmit={handleSubmit}
        initialData={selectedTask || undefined}
      />}

      {showDelete && <DeleteModal
        onClose={() => {
          setShowDelete(false);
          setSelectedTask(null);
        }}
        onConfirm={handleDelete}
      />}

    </div>
  );
}
