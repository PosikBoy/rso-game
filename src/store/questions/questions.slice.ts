import { DataType } from "@/data/data";
import { createSlice } from "@reduxjs/toolkit";

export type IInitialState = {
  data: DataType;
};

const initialState: IInitialState = {
  data: [],
};

export const questionsSlice = createSlice({
  name: "questionsSlice",
  initialState,
  reducers: {
    resetToDefault(state, action) {
      state.data = action.payload;
    },
    markQuestionAnswered: (state, action) => {
      console.log(state.data[action.payload].isAnswered);
      state.data[action.payload].isAnswered = true;
    },
  },
});

export const { resetToDefault, markQuestionAnswered } = questionsSlice.actions;
export default questionsSlice.reducer;
