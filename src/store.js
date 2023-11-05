import { createStore, combineReducers } from "redux";
import siteReducer from "./reducers/siteReducer";

//השמת הרדיוסר המתאים בסטור
const store = createStore(
  //אופציה לרשימת רדיוסרים
  combineReducers({
    siteReducer,
  })
);

export default store;
