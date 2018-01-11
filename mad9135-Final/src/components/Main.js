/**
 * Created by Mitch on 2017-12-18.
 */
import React, {Component} from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import MyFooter from "./Footer";
import Restaurants from "./Restaurants";
import RestaurantScreen from "./RestaurantScreen";
import { Body, Button, Container, Content, Header, Icon, Left, Right, Spinner, Title, Text } from 'native-base';
import {RESTAURANT_FETCH, RESTAURANT_LIST, RESTAURANT_INFO} from '../pages';
import * as actions from "../actions/index";

class Main extends React.Component {

    render() {

        let backButton;
        let content;

        switch(this.props.page){

            case RESTAURANT_FETCH:
                content = <Spinner color="green"/>
                break;

            case RESTAURANT_LIST:
                content = (
                    <Content>
                    <Button block onPress={this.props.fetchRestaurants}>
                        <Text> Find Restaurants Nearby </Text>
                    </Button>
                    <Restaurants/>
                    </Content>
                );
                break;

            case RESTAURANT_INFO:
                content= (
                    <RestaurantScreen/>
                )
                backButton=(
                        <Button transparent onPress={this.props.returnToList}>
                            <Icon name='arrow-back'/>
                            <Text>Back</Text>
                        </Button>
                )
        }

        return (
           <Container>
               <Header>
                   <Left>
                       {backButton}
                   </Left>
                   <Body>
                   <Title >Yum Yums</Title>
                   </Body>
                   <Right />
               </Header>
                    <Content>
                        {content}
                    </Content>
               <MyFooter/>
           </Container>
        );
    }

}

function mapStateToProps(state) {
    return {
        page: state.page,
        selectedItem: state.selectedItem
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurants: () => dispatch(actions.getGeolocation()),
        returnToList: () => dispatch(actions.returnToList())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);