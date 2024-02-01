import immerPlugin from "@rematch/immer";
import selectPlugin from "@rematch/select";
import { init, RematchRootState } from "@rematch/core";
import { loadingPlugin } from "../Plugins";
import { persistPlugin } from "../Persist";
import { models, RootModel } from "../Models";
import logger from "redux-logger";

export const store = init<RootModel>({
  models,
  plugins: [loadingPlugin, persistPlugin, selectPlugin(), immerPlugin()],
  redux: {
    middlewares: [logger],
    rootReducers: {
      RESET: (state: any, action: any) => {
        console.log(state);
        console.log(action);
      }
    }
  }
});
export const { dispatch, select, getState } = store;

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type Select = typeof store.select;
export type RootState = RematchRootState<typeof models>;
