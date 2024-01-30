import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../store/auth/authSlice";
import { alumnoSlice } from "../store/alumno/alumnoSlice";


 export const store = configureStore({
    reducer: {
        auth : authSlice.reducer,
        alumno : alumnoSlice.reducer,
    }
})
