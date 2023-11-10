import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../features/usuarios/auth/authSlice";

 export const store = configureStore({
    reducer: {
        auth : authSlice.reducer,
    }
})
