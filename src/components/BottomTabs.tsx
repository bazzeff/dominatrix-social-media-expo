import { StyleSheet, Text, Touchable, View, Image } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Matches, Messages, Profile } from "../screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "../assets/styles";
import TabBarIcon from "./TabBarIcon"; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const BottomTabs = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          options={{ headerShown: false, animationEnabled: false }}
        >
          {() => (
            <Tab.Navigator
              tabBarOptions={{
                showLabel: false,
                activeTintColor: PRIMARY_COLOR,
                inactiveTintColor: DARK_GRAY,
                labelStyle: {
                  fontSize: 14,
                  textTransform: "uppercase",
                  paddingTop: 10,
                },
                style: {
                  backgroundColor: WHITE,
                  borderTopWidth: 0,
                  marginBottom: 0,
                  shadowOpacity: 0.05,
                  shadowRadius: 10,
                  shadowColor: BLACK,
                  shadowOffset: { height: 0, width: 0 },
                },
              }}
            >
              <Tab.Screen
                name="Explore"
                component={Home}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                      focused={focused}
                      iconName="search"
                      text="Explore"
                    />
                  ),
                }}
              />
  
              <Tab.Screen
                name="Matches"
                component={Matches}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                      focused={focused}
                      iconName="heart"
                      text="Matches"
                    />
                  ),
                }}
              />
  
              <Tab.Screen
                name="Chat"
                component={Messages}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                      focused={focused}
                      iconName="chatbubble"
                      text="Chat"
                    />
                  ),
                }}
              />
  
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                      focused={focused}
                      iconName="person"
                      text="Profile"
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

export default BottomTabs

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#000',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        padding: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#fff',
    },
})