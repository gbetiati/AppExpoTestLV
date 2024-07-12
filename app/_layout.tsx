
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import { FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

  import MaterialIcons from '@expo/vector-icons/MaterialIcons';
  import { FontAwesome5 } from '@expo/vector-icons';
  import { AntDesign } from '@expo/vector-icons';

import Tela01 from  "./Tela01.jsx";
import TelaDois from './TelaDois.tsx';
import ProfileScreen from './ProfileScreen.tsx';


const Tab = createBottomTabNavigator()

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

        <Tab.Navigator
          initialRouteName="Tela01"
          screenOptions={{
            tabBarActiveTintColor: '#007FFF',
          }}
        >
        <Tab.Screen name="Tela01" component={Tela01}
                    options={{
                    tabBarLabel: 'tela 01',
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign name="setting" size={24} color={color} />
                    )
          }}/>

          <Tab.Screen name="TelaDois" component={TelaDois}
                    options={{
                    tabBarLabel: 'tela 01',
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign name="setting" size={24} color={color} />
                    )
          }}/>
           <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                    options={{
                    tabBarLabel: 'tela douglas',
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign name="setting" size={24} color={color} />
                    )
          }}/>
        </Tab.Navigator>

      <StatusBar style="light"/>
    </GestureHandlerRootView>
  );
}