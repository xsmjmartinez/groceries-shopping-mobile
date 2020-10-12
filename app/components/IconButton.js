import * as React from 'react';

import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class IconButton extends React.Component {

   static defaultProps = {
      onPress: () => { },
      icon: "alarm-check",
      size: 20,
      color: "#000000"
   }

   render() {
      return (
         <TouchableOpacity style={[styles.iconButton, this.props.style]} onPress={this.props.onPress}>
            <Icon name={this.props.icon} size={this.props.size} color={this.props.color} />
         </TouchableOpacity>
      );
   }
}

const styles = StyleSheet.create({   
   iconButton: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      elevation: 4,
      height: 40,
      width: 40,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center'
   }
});
