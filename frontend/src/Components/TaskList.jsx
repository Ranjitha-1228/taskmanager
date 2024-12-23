import { Link } from 'react-router-dom';

const TaskList = ({ tasks, onDelete, onToggle, onPageChange, currentPage }) => {
  return (
    <div>
      
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task._id} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-600">Status: {task.status}</p>
            </div>
            <div className="flex space-x-2">
              {/* Edit Button */}
              <Link to={`/edit-task/${task._id}`} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Edit</Link>
              {/* Toggle Status Button */}
              <button onClick={() => onToggle(task._id)} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                {task.status === 'incomplete' ? 'Mark as Complete' : 'Mark as Incomplete'}
              </button>
              {/* Delete Button */}
              <button onClick={() => onDelete(task._id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-between items-center">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1} className="bg-gray-400 text-gray-800 px-4 py-2 rounded disabled:opacity-50">Previous</button>
        <span className="text-lg font-semibold">Page {currentPage}</span>
        <button onClick={() => onPageChange(currentPage + 1)} className="bg-gray-400 text-gray-800 px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
};

export default TaskList;
