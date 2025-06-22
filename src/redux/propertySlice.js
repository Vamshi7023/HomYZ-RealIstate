import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  properties: [],
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
    addProperty: (state, action) => {
      state.properties.push(action.payload);
    },
  },
});

export const { setProperties, addProperty } = propertySlice.actions;
export default propertySlice.reducer;
