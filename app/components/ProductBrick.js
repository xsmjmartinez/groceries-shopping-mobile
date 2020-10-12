import * as React from 'react';

import { StyleSheet, TouchableOpacity, View, Text, Image, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ProductBrick extends React.Component {

   static defaultProps = {
      onPress: () => { },
   }

   state = {
      imageWidth: 0,
      imageHeight: 0,
   }

   componentDidMount() {

      const width = this.props.product.width;
      const height = this.props.product.height;

      const screenWidth = (Dimensions.get("window").width - 180) / 2;
      const scaleFactor = width / screenWidth;
      const imageHeight = height / scaleFactor;

      this.setState({ imageWidth: screenWidth, imageHeight: imageHeight })

   }

   render() {

      const { imageWidth, imageHeight } = this.state

      return (
         <TouchableOpacity style={[styles.touchable, this.props.style]} onPress={this.props.onPress}>

            <View style={styles.block}>
               <Text style={styles.name}>{this.props.product.name}</Text>
               <Text style={styles.type}>{this.props.product.type}</Text>
               <Text style={styles.price}>{this.props.product.price}</Text>

               <Image
                  style={{ width: imageWidth, height: imageHeight, marginVertical: 10 }}
                  source={{ uri: this.props.product.image }}
               />

               {this.props.product.inCart === true && (
                  <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#FF5D29', elevation: 12 }]}>
                     <Icon name="basket" size={16} color="#FFFFFF" />
                  </TouchableOpacity>
               )}

               {this.props.product.inCart === false && (
                  <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#FFFFFF', elevation: 12 }]}>
                     <Icon name="basket" size={16} color="#FF5D29" />
                  </TouchableOpacity>
               )}
            </View>

         </TouchableOpacity>
      );
   }
}

const styles = StyleSheet.create({
   touchable: {
      backgroundColor: '#F8F8F8',
      borderRadius: 12,
      width: '100%',
      marginBottom: 10,
      overflow: 'hidden'
   },
   block: {
      padding: 10,
      position: 'relative'
   },
   name: {
      fontFamily: "Poppins_Medium",
      fontSize: 16,
      color: '#252527'
   },
   type: {
      fontFamily: "Poppins_Medium",
      fontSize: 12,
      color: '#a4a4a4'
   },
   price: {
      fontFamily: "Poppins_Medium",
      fontSize: 14,
      color: '#252527'
   },
   iconButton: {
      position: 'absolute',
      bottom: 30,
      right: 0,
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
      height: 35,
      width: 40,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 0
   }
});
