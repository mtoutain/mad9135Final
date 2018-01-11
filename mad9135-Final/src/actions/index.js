/**
 * Created by Mitch on 2018-01-08.
 */

import axios from "axios";
import {RESTAURANT_FETCH, RESTAURANT_LIST} from '../pages';

export const FETCH_RESTAURANTS_SUCCESS = "FETCH_RESTAURANTS_SUCCESS";
export const CHANGE_PAGES = "CHANGE_PAGES";
export const GET_RESTAURANT_INFO = "GET_RESTAURANT_INFO"

export function restaurantsFetchSuccess(data) {

    return {
        type: FETCH_RESTAURANTS_SUCCESS,
        restaurantList: data
    };
}

export function getInfo(id){
    return {
        type: GET_RESTAURANT_INFO,
        id: id
    }
}

export function returnToList(){
    return(dispatch)=>{
        dispatch(changePages(RESTAURANT_LIST));
    }
}

export function getGeolocation() {

    return (dispatch)=> {

        dispatch(changePages(RESTAURANT_FETCH));

        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch(fetchRestaurants(position.coords.latitude, position.coords.longitude));
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }
}

export function changePages(page){
    return {
        type: CHANGE_PAGES,
        page: page
    }
}

export function fetchRestaurants(lat, long) {

    return (dispatch) => {

        const API_KEY = "L6O5kIJPVvs-_F_KAySEWtF9SI2IJkIlHmK8_EnjfPUnNtaTFY0DsJLDD_F3vOpd9sq5U0FW-ykmi3KgPZYipHXxaP9JnpuOv-oof7QBLybLPtkL5f8gtU2TQB9UWnYx";

        let url = "https://api.yelp.com/v3/businesses/search?text=del&latitude="+lat+"&longitude="+long+"&terms=restaurants&sort_by=distance";

        axios.get(url, {headers: {Authorization: "Bearer " + API_KEY}})
            .then((response) => {
                if(response.status != 200) {
                    throw Error(response.statusText);
                }
                return response;

            }).then((response) => {
            dispatch(changePages(RESTAURANT_LIST));
            dispatch(restaurantsFetchSuccess(response.data.businesses));
        }).catch((e) => {
            alert(e);
        });

    };

}