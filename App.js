import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import nintendo from './component/nintendo.js';
import xbox from './component/xbox.js';
import ps from './component/ps.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator style={styles.icon}>
      <Tab.Screen
        name="Xbox"
        component={xbox}
        options={{
          tabBarIcon: ({ size }) => (
            <Image source={require('./assets/xbox.png')} style={{ width: size, height: size }} />
          ),
        }}
      />

        <Tab.Screen
          style={styles.icon}
          name="PlayStation"
          component={ps}
          options={{
            tabBarIcon: ({ size }) => (
              <Image source={require('./assets/ps.png')} style={{ width: size, height: size }} />
            ),
          }}
        />

        <Tab.Screen
          style={styles.icon}
          name="Nintendo"
          component={nintendo}
          options={{
            tabBarIcon: ({ size }) => (
              <Image source={require('./assets/nintendo.png')} style={{ width: size, height: size }} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    Color: 'Black',


  }
});
