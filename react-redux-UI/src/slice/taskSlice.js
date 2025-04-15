import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// npx json-server --watch server/db.json --port 8000
const initialState = {
  taskList: [],
  taskDetails: {},
  isLoading:false,
  error:''
};

export const fetchTask=createAsyncThunk(
  'tasks/fetchTask',
  async(_,{rejectWithValue})=>{
const response=await fetch('http://localhost:8000/tasks')
    if(response.ok){
      const jsonResponse=await response.json();
      return jsonResponse
    }else{      
      return rejectWithValue({error:"not found 11111"})
    }
  }
)
//POST 
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task,{rejectWithValue}) => {
      const options = {
          method:'POST',
          body: JSON.stringify(task),
          headers: {
              "Content-type":"application/json; charset=UTF-8"
          }
      }
      // const response = await fetch(BASE_URL,options)
      const response = await fetch()

      if (response.ok) {
          const jsonResponse = await response.json()
          return jsonResponse
      } else {
          return rejectWithValue({error:'Task Not Added'})
      }
  }
)

//PATCH 
export const updateTaskInServer = createAsyncThunk(
  "tasks/updateTaskInServer",
  async (task,{rejectWithValue}) => {
      const options = {
          method:'PATCH',
          body: JSON.stringify(task),
          headers: {
              "Content-type":"application/json; charset=UTF-8"
          }
      }
      // const response = await fetch(BASE_URL + '/' + task.id,options)
      const response = await fetch( '/' + task.id,options)

      if (response.ok) {
          const jsonResponse = await response.json()
          return jsonResponse
      } else {
          return rejectWithValue({error:'Task Not Updated'})
      }
  }
)

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTaskList: (state, action) => {
      const id = Math.random() * 100;
      const task = { ...action.payload, id };
      state.taskList.push(task);
    },
    removeTaskList: (state, action) => {      
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    updateTaskList: (state, action) => {
      state.taskList = state.taskList.map((task) =>
        task.id == action.payload.id ? action.payload : task
      );
    },
    taskDetails: (state, action) => {
      state.taskDetails = action.payload;
    },
  },
  extraReducers:(builder) => {
    builder
        .addCase(fetchTask.pending,(state) => {
          console.log("...accc","ssss");
            state.isLoading = true
        })
        .addCase(fetchTask.fulfilled,(state,action) => {
          console.log("...accc1",action.payload); 
            state.isLoading = false
            state.error = ''
            state.taskList = action.payload
        })
        .addCase(fetchTask.rejected,(state,action) => {
          console.log("...accc2",action.payload);
          state.isLoading = false
          state.taskList = []
            state.error = action.payload.error        
        })
        .addCase(addTask.pending,(state) => {
          state.isLoading = true
      })
      .addCase(addTask.fulfilled,(state,action) => {
          state.isLoading = false
          state.error = ''
          state.tasksList.push(action.payload)
      })
      .addCase(addTask.rejected,(state,action) => {
          state.error = action.payload.error
          state.isLoading = false
      })
      .addCase(updateTaskInServer.pending,(state) => {
          state.isLoading = true
      })
      .addCase(updateTaskInServer.fulfilled,(state,action) => {
          state.isLoading = false
          state.error = ''
          state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task )
      })
      .addCase(updateTaskInServer.rejected,(state,action) => {
          state.error = action.payload.error
          state.isLoading = false
      })
}

});

export const { addTaskList, removeTaskList, updateTaskList, taskDetails } =
  taskSlice.actions;
export default taskSlice.reducer;
