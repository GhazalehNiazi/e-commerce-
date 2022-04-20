import { createStore } from "@reduxjs/toolkit";
import reducers from "./redcuers/index";

const store = createStore(reducers, {});
export default store;