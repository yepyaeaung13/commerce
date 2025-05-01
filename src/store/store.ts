import { configureStore } from "@reduxjs/toolkit";
import cartCountSlice from "@/features/cartCount.slice";
import cartDetailSlice from '../features/cartDetail.slice';

export const store = configureStore({
    reducer: {
        // Add your reducers here
        cartCount: cartCountSlice,
        cartDetail: cartDetailSlice,
    }
})


export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];