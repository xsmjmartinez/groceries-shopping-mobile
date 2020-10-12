import * as React from 'react';

import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class BottomBar extends React.Component {

   static defaultProps = {
      onPress: () => { },
      icon: "alarm-check",
      size: 20,
      color: "#000000"
   }

   render() {
      return (
         <View style={styles.bottomBar}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch' }}>
               <Image
                  style={{ height: 40, width: 40, marginBottom: -1, marginLeft: 0 - 1 }}
                  source={require('../assets/images/left_cosa.png')}
               />

               <Image
                  style={{ height: 40, width: 40, marginBottom: -1, marginRight: 0 - 1 }}
                  source={require('../assets/images/right_cosa.png')}
               />
            </View>
            <View style={{ backgroundColor: '#2a2a2f', flexDirection: 'row', padding: 15, justifyContent: 'space-around', alignItems: 'center' }}>

               <TouchableOpacity>
                  <View style={{ flexDirection: 'row' }}>
                     <Icon name="home-variant" size={26} color="#f34d18" style={{ alignSelf: 'center' }} />
                     <Text style={{ fontFamily: "Poppins_Medium", color: '#FFFFFF', fontSize: 12, marginLeft: 5, alignSelf: 'center', marginTop: 4 }}>Home</Text>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity>
                  <View style={{ flexDirection: 'row' }}>
                     <Icon name="basket" size={22} color="#6a6a6d" style={{ alignSelf: 'center' }} />
                  </View>
               </TouchableOpacity>

               <TouchableOpacity>
                  <View style={{ flexDirection: 'row' }}>
                     <Icon name="map-marker" size={22} color="#6a6a6d" style={{ alignSelf: 'center' }} />
                  </View>
               </TouchableOpacity>

               <TouchableOpacity>
                  <View style={{ flexDirection: 'row' }}>
                     <Icon name="account" size={22} color="#6a6a6d" style={{ alignSelf: 'center' }} />
                  </View>
               </TouchableOpacity>               

            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({   
   bottomBar: {
      width: '100%',
      position: 'absolute',
      bottom: 0
   }
});
