import 'react-native-gesture-handler';
import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from './src/component/Home';
import Login from './src/component/Login';
import Toptap from './src/component/Toptab';
import Profil from './src/component/Profil'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

const MyTop = () => {
  return (
    <Top.Navigator>
      <Top.Screen name="Toptab" component={Toptap} />
      <Top.Screen name="coba1" component={Toptap} />
      <Top.Screen name="coba2" component={Toptap} />
    </Top.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="profil" component={Profil} />
    </Tab.Navigator>
  );
};

const RootDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={RootDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Toptab" component={MyTop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
