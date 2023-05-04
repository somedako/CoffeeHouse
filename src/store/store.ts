import { configureStore } from '@reduxjs/toolkit';
import coffeeSlice from '../redux/coffee/coffeeSlice';

export const store = configureStore({
    reducer: {
        coffee: coffeeSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
