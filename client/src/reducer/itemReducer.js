import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: 'items',
    initialState: { items: [], singleItem: null },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id ? action.payload.updatedItem : item
            );
        },
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setSingleItem: (state, action) => {
            state.singleItem = action.payload;
        },
    },
});

export const { addItem, removeItem, updateItem, setItems, setSingleItem } = itemSlice.actions;
export default itemSlice.reducer;
