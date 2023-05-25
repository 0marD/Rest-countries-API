import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountrySelected {
  country: string;
}

const initialState: CountrySelected = {
  country: "",
};

const countrySelectedSlice = createSlice({
  name: "countrySelected",
  initialState,
  reducers: {
    setCountrySelected: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
  },
});

export const { setCountrySelected } = countrySelectedSlice.actions;

export default countrySelectedSlice.reducer;
