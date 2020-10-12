import * as React from 'react';

import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

import IconButton from './IconButton';

export default class ProductDetailBottomBar extends React.Component {

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
            <View style={{ backgroundColor: '#2a2a2f', flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 3.8, justifyContent: 'space-around', alignItems: 'center' }}>

               <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontFamily: "Poppins_Medium", fontSize: 16, color: '#FFFFFF', alignSelf: 'center', marginTop: 8 }}>$</Text>
                  <Text style={{ fontFamily: "Poppins_Medium", fontSize: 30, color: '#FFFFFF' }}>12.80</Text>
               </View>
               <TouchableOpacity>
                  <View style={{ flexDirection: 'row' }}>
                     <IconButton icon="basket" size={14} color="#FFFFFF" style={{ backgroundColor: '#FF5D29', width: 25, height: 25, borderRadius: 6, elevation: 2 }} />
                     <Text style={{ fontFamily: "Poppins_Medium", color: '#FFFFFF', fontSize: 12, marginLeft: 5, alignSelf: 'center', marginTop: 4 }}>
                        Add to Cart
                     </Text>
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
