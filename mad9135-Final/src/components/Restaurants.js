/**
 * Created by Mitch on 2018-01-08.
 */
import React, {Component} from "react";
import { connect } from "react-redux";
import { Container, Content} from 'native-base';
import RestaurantItem from "./RestaurantItem"


class Restaurants extends React.Component {

    render() {
        let restaurantsList = this.props.restaurantList.map((item) =>{
            return(
                <RestaurantItem {...item} id={item.id}/>
            );
        });
            return (
                <Container>
                    <Content>
                            {restaurantsList}
                    </Content>
                </Container>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurantList: state.restaurantList
    };
};

export default connect(mapStateToProps)(Restaurants);