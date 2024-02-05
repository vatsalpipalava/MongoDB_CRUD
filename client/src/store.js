// // store.js

// import { configureStore } from '@reduxjs/toolkit';
// import itemReducer from './reducer/itemReducer';

// const store = configureStore({
//     reducer: {
//         tasks: itemReducer,
//     },
// });

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './reducer/itemReducer';

const rootReducer = {
    items: itemReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
