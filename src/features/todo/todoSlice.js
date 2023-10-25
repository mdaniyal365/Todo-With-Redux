import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[{id:1,text:"code daily"}]
    
}


export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        AddTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
                
            }
            state.todos.push(todo)
           

        },
        RemoveTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)

        }
        
        
    }
    
    
})


export const {RemoveTodo,AddTodo}=todoSlice.actions
export default todoSlice.reducer