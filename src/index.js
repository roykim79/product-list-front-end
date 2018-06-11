import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import promise from "redux-promise";
import Search from "./components/search";
import Products from "./components/products";
import reducers from "./reducers";

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div className='container-fluid'>
      <Search />
      <Products />
    </div>
  </Provider>,
  document.getElementById('root'));
