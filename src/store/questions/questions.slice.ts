import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data, { DataType } from "@/data/data";

// Определяем тип минимальных данных для вопросов
export type IQuestion = {
  id: number;
  categoryName: string;
  isAnswered: boolean;
  value: number;
  // любые другие поля, которые вам нужны
};

export type IInitialState = {
  data: IQuestion[];
};

const initialState: IInitialState = {
  data: [],
};

export const questionsSlice = createSlice({
  name: "questionsSlice",
  initialState,
  reducers: {
    // Восстановление данных, но только минимальные необходимые
    resetToDefault(state, action: PayloadAction<IQuestion[]>) {
      state.data = data.map((item) => ({
        id: item.id,
        categoryName: item.categoryName,
        value: item.value,
        isAnswered: item.isAnswered,
      })); // хранение только ключевых данных
    },

    // Обработка отметки вопроса как отвеченного
    markQuestionAnswered: (state, action: PayloadAction<number>) => {
      const question = state.data.find((q) => q.id === action.payload);
      if (question) {
        question.isAnswered = true;
      }
    },
  },
});

export const { resetToDefault, markQuestionAnswered } = questionsSlice.actions;
export default questionsSlice.reducer;
