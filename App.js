import * as React from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/HomeScreen';
import ProductDetailScreen from './app/screens/ProductDetailScreen';

const Stack = createStackNavigator();

class App extends React.Component {

   state = {
      appIsReady: false,
   };

   render() {
      return (
         <View style={styles.container}>
            <NavigationContainer>
               <Stack.Navigator initialRouteName={"Home"}>

                  <Stack.Screen
                     name="Home"
                     component={HomeScreen}
                     options={{
                        title: "Home",
                        headerShown: false,
                     }}
                  />

                  <Stack.Screen
                     name="ProductDetail"
                     component={ProductDetailScreen}
                     options={{
                        title: "Product Detail",
                        headerShown: false,
                     }}
                  />

               </Stack.Navigator>
            </NavigationContainer>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   }
})

export default App;