import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/tasks',
    headers: {
        'Content-Type': 'application/json',
      },
   
  });
  

  
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

 export const userLogin = async (user) => {
    try {
      const response = await api.post('/login', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };
 
  

// Fetch all tasks with pagination
export const fetchTasks = async (page = 1,limit=10) => {
  try {
    const response = await api.get(`/?page=${page} ${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;  
  }
};


// Fetch a single task by ID
export const fetchTask = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching task with ID ${id}:`, error);
    throw error; 
  }
};


// Add a new task
export const addTask = async (task) => {
  try {
    const response = await api.post('/', task);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;  
  }
};

// Edit an existing task
export const updateTask = async (id, task) => {
  try {
    const response = await api.put(`/${id}`, task);
    return response.data;
  } catch (error) {
    console.error(`Error updating task with ID ${id}:`, error);
    throw error;  
  }
};

//  Toggle task completion status
export const toggleTaskStatus = async (id) => {
  try {
    const response = await api.patch(`/${id}/toggle`);
    return response.data;
  } catch (error) {
    console.error(`Error toggling status for task with ID ${id}:`, error);
    throw error;  
  }
};



// Delete task
export const deleteTask = async (id) => {
    try {
      const response = await api.delete(`/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  };