import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type CoffeeItem = {
    id: number;
    imageUrl: string;
    title: string;
    country: string;
    description: string;
    price: number;
};

interface coffeeSliceState {
    coffees: CoffeeItem[];
}

const initialState: coffeeSliceState = {
    coffees: [],
};

export const getCoffees = createAsyncThunk(
    'coffee/getCoffees',
    async (sortTitle: string, { dispatch }) => {
        const sort = sortTitle ? `country_like=${sortTitle}` : '';
        try {
            const { data } = await axios.get<CoffeeItem[]>(
                `http://localhost:3001/coffees?${sort}`
            );

            dispatch(setCoffees(data));
        } catch (error) {
            console.log(error);
        }
    }
);

export const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        setCoffees: (state, action: PayloadAction<CoffeeItem[]>) =>
            void (state.coffees = action.payload),
    },
    extraReducers: (builder) => {
        builder.addCase(getCoffees.fulfilled, (state) => (state.coffees = []));
        builder.addCase(
            getCoffees.pending,
            (state, action) => (state.coffees = action.payload)
        );
        builder.addCase(getCoffees.rejected, (state) => (state.coffees = []));
    },
});

export const { setCoffees } = coffeeSlice.actions;
export default coffeeSlice.reducer;
