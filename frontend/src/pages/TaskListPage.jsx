import { useEffect, useState } from 'react';
import { fetchTasks, deleteTask, toggleTaskStatus } from '../Api/api';
import TaskList from '../Components/TaskList';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const TaskListPage = () => {
 const {state} = useLocation();
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch tasks when page changes
  useEffect(() => {
    const getTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks(currentPage);
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    getTasks();
  }, [currentPage]);

  // Handle task deletion
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));  // Update state after deletion
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Handle toggling task status
  const handleToggle = async (id) => {
    try {
      const updatedTask = await toggleTaskStatus(id);
      setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));  // Update task status in state
    } catch (error) {
      console.error('Error toggling task status:', error);
    }
  };

  // Handle page change (pagination)
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
<h1 className="text-4xl font-semibold text-gray-800 mb-4">
  {`Hello ! `}
  <span className="text-blue-500">{state?.username}</span>
  {` Your Task Manager : )`}
</h1>        <Link to="/add-task" className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 inline-block"> Add New Task
        </Link>
      <TaskList 
        tasks={tasks} 
        onDelete={handleDelete} 
        onToggle={handleToggle} 
        onPageChange={handlePageChange} 
        currentPage={currentPage}
      />
    </div>
  );
};

export default TaskListPage;
