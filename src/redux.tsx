import { configureStore, createSlice } from "@reduxjs/toolkit";
import Triangles from "./assets/Triangles.png";
import PriseLarge from "./assets/PriseLarge.png";
import Crunch from "./assets/Crunch.png";
import Chaise from "./assets/Chaise.png";
import DefaultImg from "./assets/DefaultImg.png";

export type NewActivityProps = {
  id: number;
  title: string;
  img: any;
  done: boolean;
};

const crossfitSlice = createSlice({
  name: "crossfit",
  initialState: [
    { id: 1, title: "Pompes triangles", img: Triangles, done: false },
    { id: 2, title: "Pompes pectorales", img: PriseLarge, done: false },
    { id: 3, title: "Crunch", img: Crunch, done: false },
    { id: 4, title: "Chaise", img: Chaise, done: false },
  ],
  reducers: {
    createActivity: (state, action) => {
      const newActivity: NewActivityProps = {
        id: Date.now(),
        title: action.payload,
        img: DefaultImg,
        done: false,
      };
      state.push(newActivity);
    },
    finishActivity: (state, action) => {
      const realActivity = state.find(
        (activity) => activity.id === action.payload
      );
      if (realActivity !== undefined) {
        realActivity.done = !realActivity.done;
      }
    },
    deleteActivity: (state, action) => {
      const filterActivity = state.filter(
        (activity) => activity.id !== action.payload
      );
      state = filterActivity;
      return state;
    },
  },
});

export const { createActivity, deleteActivity, finishActivity } =
  crossfitSlice.actions;

export const store = configureStore({
  reducer: {
    crossfit: crossfitSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
