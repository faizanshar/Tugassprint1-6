import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Profil extends Component {
    render() {
        return (
            <View>
                <Text> PASSWORD : {this.props.route.params.itemID} </Text>
                
            </View>
        )
    }
}
