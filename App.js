import * as React from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import {Home} from './Home';
import { Setting } from './Setting';
import { Log } from './Log';
import { Interval } from './interval';
import { Server } from './server';

function MenuBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: '#2E2E3E' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if(route.name === 'Log'){
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // tabBarActiveTintColor: 'Green',
        tabBarInactiveTintColor: 'gray',
      })}
      activeColor="#79D40C"
    >
      <Tab.Screen 
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
            ),
          }}
      />
        <Tab.Screen name="Log" component={Log}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="bar-chart" size={24} color={color} />
            ),
          }}
        />
    </Tab.Navigator>
  );
}

// End Page
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export default function App() {
  // Tema bottom navigation
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
         <Stack.Screen
          name="MenuBar"
          component={MenuBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="interval" component={Interval} />
        <Stack.Screen name="server" component={Server} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}