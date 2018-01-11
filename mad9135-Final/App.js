
/**
 * Created by Mitch on 2017-12-18.
 */
import React, {Component} from "react";
import { render } from "react-dom";
import Main from "./src/components/Main";
import { createStore, applyMiddleware} from "redux";
import reducers from "./src/Reducers";
import  {Provider}  from "react-redux";
import {RESTAURANT_LIST} from "./src/pages";
import thunk from "redux-thunk";

let state = {
    restaurantList: [],
    selectedItem: null,
    page: RESTAURANT_LIST
};

let store = createStore(reducers, state, applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : undefined);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }

}