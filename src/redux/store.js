import { configureStore } from "@reduxjs/toolkit";
import taskReducer  from "./reducers/taskReducer";

// Store configuration
export const store=configureStore({
    reducer:{
        task:taskReducer
    }
});