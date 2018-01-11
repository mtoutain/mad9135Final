/**
 * Created by Mitch on 2018-01-09.
 */
import React, {Component} from "react";
import {TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import {Card, CardItem, Left, Right, Thumbnail, Icon, Title,Text } from "native-base";
import * as actions from "../actions/index";

class RestaurantItem extends Component {
    render() {
        return (
            <TouchableOpacity id={this.props.id} onPress={this.props.getInfo}>
            <Card >
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: this.props.image_url}} />
                    <Title style={{paddingLeft:5}}> {this.props.name}</Title>
                </Left>
                <Right style={{width:100}}>
                    <Text note style={{float:'right', paddingRight:10}}> {(this.props.distance/1000).toFixed(2)} km </Text>
                </Right>
                <Icon name="arrow-forward" style={{fontSize: 18, width:10, color:"#cecece"}}/>
            </CardItem>
            </Card>
            </TouchableOpacity>
        );
    }
}

function mapStateToProps(state) {
    return {
        restaurantList: state.restaurantList
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {

        getInfo : ()=>{ console.log(ownProps);
            return dispatch(actions.getInfo(ownProps.id))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem);