/**
 * Created by Mitch on 2018-01-08.
 */
import React, {Component} from "react";
import { connect } from "react-redux";
import { Image } from "react-native";
import { Container, Content, Card, CardItem, Body, Left, Right, Title, Thumbnail, Text } from "native-base";

class RestaurantScreen extends Component {
    render() {
        console.log(this.props);
        return (
            <Container>
                <Content padder>
                        <Card>
                            <CardItem header>
                                <Title>{this.props.item.name}</Title>
                            </CardItem>
                            <CardItem>
                                <Image source={{uri: this.props.item.image_url}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text>Phone Number: {this.props.item.phone}</Text>
                                <Text>Distance: {(this.props.item.distance/1000).toFixed(2)} km</Text>
                                <Text>Price: {this.props.item.price}</Text>
                                <Text>Rating: {this.props.item.rating}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                </Content>
            </Container>
        );
    }
}
function mapStateToProps(state){
    console.log(state);
    return {
        item: state.selectedItem
    };
}

export default connect(mapStateToProps)(RestaurantScreen);