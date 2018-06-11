import { combineReducers } from "redux";
import ProductsReducer from "./reducer-products";
import ProductCountReducer from "./reducer-product-count";
import ParamsReducer from "./reducer-params";

const rootReducer = combineReducers({
  products: ProductsReducer,
  productCount: ProductCountReducer,
  params: ParamsReducer
})
export default rootReducer;
