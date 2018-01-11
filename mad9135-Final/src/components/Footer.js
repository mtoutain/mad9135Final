/**
 * Created by Mitch on 2018-01-08.
 */
import React, { Component } from "react";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class MyFooter extends Component {
    render() {
        return (
                <Footer>
                    <FooterTab>
                    <Body>
                    <Text> © Michel Toutain</Text>
                    </Body>
                    </FooterTab>
                </Footer>
        )
    }
}
