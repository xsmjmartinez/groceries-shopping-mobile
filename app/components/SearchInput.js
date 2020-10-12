import * as React from 'react';

import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SearchInput extends React.Component {

   static defaultProps = {
      onPress: () => { },
      icon: "alarm-check",
      size: 20,
      color: "#000000"
   }

   render() {
      return (
         <View style={[styles.search, this.props.style]}>
            <View style={styles.boxes}>
               <Icon name="magnify" size={20} color="#2A2A2F" />
            </View>
            <View style={{ flexGrow: 1 }}>
               <TextInput style={styles.input} placeholder="Restaurants, foods, drinks" />
            </View>
            <TouchableOpacity style={styles.boxes}>
               <Icon name="tune" size={20} color="#2A2A2F" />
            </TouchableOpacity>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   search: {
      backgroundColor: '#F9F9F9', 
      height: 45, 
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 12,
      marginHorizontal: 7
   },
   input: {
      width: '100%', 
      height: '100%'
   },
   boxes: {
      padding: 10, 
      alignSelf: 'center',
      paddingHorizontal: 14
   }
});
