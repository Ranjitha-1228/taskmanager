import { useState, useEffect } from 'react';
import TaskForm from '../Components/TaskForm';
import { useNavigate, useParams } from 'react-router-dom';
import { addTask, updateTask, fetchTask } from '../Api/api';

const TaskFormPage = () => {
  const [task, setTask] = useState(null);  // Store task for editing
  const navigate = useNavigate();
  const { id } = useParams();  // Get the task ID from the URL parameters

  // Fetch task for editing if ID is present
  useEffect(() => {
    if (id) {
      const getTask = async () => {
        const fetchedTask = await fetchTask(id);  
        console.log(fetchedTask)
        setTask(fetchedTask);
      };
      getTask();
    }
  }, [id]);

  const handleSubmit = async (taskData) => {
    if (id) {
     
      await updateTask(id, taskData);
    } else {
     
      await addTask(taskData);
    }
    navigate('/taskList');  
  };

  return (
    <div>
       <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">TASK MANAGER</h1>
      <h2 className="text-xl text-gray-800 font-bold mb-4">{id ? 'EDIT TASK' : 'ADD TASK'}</h2>
      <TaskForm task={task} onSubmit={handleSubmit} />
    </div>
  );
};

export default TaskFormPage;
