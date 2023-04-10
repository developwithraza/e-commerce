import { createStore } from "redux";
import rootReducer from "./redux/reducer/Main";


const store=createStore(rootReducer)

export default store