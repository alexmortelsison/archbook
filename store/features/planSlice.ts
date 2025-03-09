import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Plan {
  id: string;
  title: string;
  image: string;
  price: number;
}

interface PlanState {
  plans: Plan[];
}

const initialState: PlanState = {
  plans: [],
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlans: (state, action: PayloadAction<Plan[]>) => {
      state.plans = action.payload;
    },
  },
});

export const { setPlans } = planSlice.actions;
export default planSlice.reducer;
