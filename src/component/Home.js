import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from './Stylehome'

export default class Home extends Component {
    render() {
        return (
            <LinearGradient style={Styles.view1} colors={['#0ae2ff', '#ffffff']}>
                <TouchableOpacity style={Styles.view2} onPress={()=>this.props.navigation.navigate('Toptab')}>
                    <Text style={Styles.text1}>TEKAN SAYA</Text>
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}
