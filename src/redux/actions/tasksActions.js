// Action Constants
export const ADD_TASK="ADD_TASK";
export const DELETE_TASK="DELETE_TASK";
export const UPDATE_TASK="UPDATE_TASK";
export const TOGGLE_TASK="TOGGLE_TASK";

// Action Creators
export const addTask=(task)=>{
    return{
        type:ADD_TASK,
        task
    }
}

export const deleteTask=(id)=>{
    return{
        type:DELETE_TASK,
        id
    }
}

export const toggleTask=(id)=>{
    return{
        type:TOGGLE_TASK,
        id
    }
}

export const updateTask=(id)=>{
    return{
        type:UPDATE_TASK,
        id
    }
}