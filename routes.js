import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons';

import Home from "./pages/Home";
import New from "./pages/New";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import NewButton from "./components/NewButton";

const Tab = createBottomTabNavigator();

export default function Routes (){
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#121212',
        borderTopColor: 'transparent',
        paddingBottom: 5,
        paddingTop: 5,
      },
      tabBarActiveTintColor: '#fff',
    }}>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name="home" size={size} color={color}/>
          ),
          headerShown: false
        }}
        />
      <Tab.Screen 
        name="Search" 
        component={Search}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="search" size={size} color={color}/>
          ),
          headerShown: false
        }}
        />
      <Tab.Screen 
        name="New" 
        component={New}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, size, color}) => (
            <NewButton size={size} color={color} focused={focused}/>
          ),
          headerShown: false
        }}
        />
      <Tab.Screen 
        name="Notification" 
        component={Notification}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name="notification" size={size} color={color}/>
          ),
          headerShown: false
        }}
        />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="user" size={size} color={color}/>
          ),
          headerShown: false
        }}
        />
    </Tab.Navigator>
  )
}