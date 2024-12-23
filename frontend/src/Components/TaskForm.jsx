import  { useState, useEffect } from 'react';

const TaskForm = ({ task, onSubmit }) => {
  const [title, setTitle] = useState(task ? task.title : '');  
  const [error, setError] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);  
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setError('Title is required');
      return;
    }
    if (title.length < 5) {
      setError('Title must be at least 5 characters');
      return;
    }
    if (title.length > 50) {
      setError('Title must be less than 50 characters');
      return;
    }
    setError('');
  
    onSubmit({ title });  
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Task Title"/>
         {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600" >
        {task ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
