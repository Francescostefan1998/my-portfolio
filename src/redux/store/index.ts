// src/redux/store/index.ts

import { createStore } from "redux";
import { reducer } from "../reducers/index";

export const store = createStore(reducer);
