import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    qty: number;
    leftQty: number;
}

interface PaymentInfo {
    subTotal: number;
    deliveryFees: number;
    couponDiscount: number;
    taxes: number;
    total: number;
}

interface DeliveryInfo {
    address: string;
    phoneNumber: string;
}

export interface CartDetail {
    items: Product[];
    deliveryInfo: DeliveryInfo;
    paymentInfo: PaymentInfo;
}

const initialState: CartDetail = {
    items: [
        {id:1, name: "Beetroot", imageUrl: "/category/category1.png", price: 17.00, qty: 1, leftQty: 10 },
        {id:2, name: "Beetroot",imageUrl: "/category/category2.png", price: 15.00, qty: 1, leftQty: 5 },
        {id:3, name: "Beetroot",imageUrl: "/category/category3.png", price: 18.00, qty: 1, leftQty: 8 },
        {id:4, name: "Beetroot",imageUrl: "/category/category4.png", price: 20.00, qty: 1, leftQty: 12 },
        {id:5, name: "Beetroot",imageUrl: "/category/category5.jpg", price: 10.00, qty: 1, leftQty: 3 },
    ],
    deliveryInfo: {
        address: "No-123, Moe Kaung Road, Yankin Township, Yangon",
        phoneNumber: "09898626060"
    },
    paymentInfo: {
        subTotal: 80.00,
        deliveryFees: 5.00,
        couponDiscount: 0.00,
        taxes: 6.25,
        total: 91.25
    }
}

type IncrementQTYPayload = {
    id: number,
}

const cartDetailSlice = createSlice({
    name: "cart detail",
    initialState,
    reducers: {
        incrementCartItemQty: (state: CartDetail, action: PayloadAction<IncrementQTYPayload>) => {
            const newItems = state.items.map(item => {
                if (item.id === action.payload.id) {
                    item.qty += 1;
                }
                return item;
            });
            state.items = newItems;
        },
        decrementCartItemQty: (state: CartDetail, action: PayloadAction<IncrementQTYPayload>) => {
            const newItems = state.items.map(item => {
                if (item.id === action.payload.id) {
                    item.qty -= 1;
                }
                return item;
            });
            state.items = newItems;
        }
    }
})

export const { incrementCartItemQty, decrementCartItemQty } = cartDetailSlice.actions;
export default cartDetailSlice.reducer;

