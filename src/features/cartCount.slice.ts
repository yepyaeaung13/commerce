import { createSlice } from "@reduxjs/toolkit";

export interface CartCountState {
    cartCount: number;
}

const initialState: CartCountState = {
    cartCount: 0
}

export const cartCountSlice = createSlice({
    name: "cart count",
    initialState,
    reducers: {
        increment: (state) => {
            state.cartCount += 1;
        },
        decrement: (state) => {
            state.cartCount -= 1;
        },
    }
})

export const { increment, decrement } = cartCountSlice.actions;
export default cartCountSlice.reducer;