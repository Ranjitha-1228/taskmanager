import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import TaskListPage from './pages/TaskListPage';
import TaskFormPage from './pages/TaskFormPage';

const App = () => {
 

  return (
    <BrowserRouter>
      <div className="bg-gray-600 p-20 h-fit">
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg mt-10">
          <Routes>
            {/* Route for the root path */}
                 <Route path="/" element={<Login />} />
                 <Route path="/taskList" element={<TaskListPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/edit-task/:id" element={<TaskFormPage />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
