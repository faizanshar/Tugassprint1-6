import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';
import {Styles} from './Stylelogin';

export default class Login extends Component {
    state={
        bebas:true,
        password: ""
    }
    render() {
    return (
      <LinearGradient
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        colors={['#0ae2ff', '#ffffff']}>
        <View>
          <Text style={Styles.text2}>USername :</Text>
          <TextInput style={Styles.text1} placeholder={'  username'} />
        </View>
        <View>
          <Text style={Styles.text2}>Password :</Text>
          <TextInput style={Styles.text1} placeholder={'  password'} secureTextEntry={this.state.bebas} value={this.state.password} onChangeText={(text)=>this.setState({password:text})} />
        </View>
        <View style={{margin:10}}>
        <Button color={'red'} title={'ShowPassword'} onPress={()=>this.setState({bebas:!this.state.bebas})} />
        </View>
        <TouchableOpacity style={Styles.login} onPress={()=>this.props.navigation.navigate('profil',{
            itemID:this.state.password
        })}>
            <Text style={Styles.textlogin}>LOG IN</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
