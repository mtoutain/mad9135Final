/**
 * Created by Mitch on 2018-01-09.
 */
import {FETCH_RESTAURANTS_SUCCESS, CHANGE_PAGES,GET_RESTAURANT_INFO} from "./actions/index";
import {RESTAURANT_INFO} from './pages';


export default function reducers(state, action) {

    let changes = Object.assign({}, state);

    switch(action.type) {

        case FETCH_RESTAURANTS_SUCCESS:
            changes = Object.assign({},changes,{restaurantList: action.restaurantList});
            break;

        case CHANGE_PAGES:
            changes = Object.assign({},changes, {page: action.page});
            break;

        case GET_RESTAURANT_INFO:
            changes = Object.assign({}, getInfo(changes, action.id));
            break;

        default:
            return state;
    }
    return Object.assign({}, state, changes);
}

function getInfo(changes, id){
    changes.page = RESTAURANT_INFO;
    changes.selectedItem = changes.restaurantList.find(item => item.id == id ? true: false);
    return changes;
}

