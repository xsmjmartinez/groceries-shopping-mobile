import React from 'react';

import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProductDetailBottomBar from '../components/ProductDetailBottomBar';
import IconButton from '../components/IconButton';
import ImageBlock from '../components/ImageBlock';
import MasonryList from '../components/MasonryList';

const products = [
   {
      id: 1,
      name: 'Sri Pineapple',
      type: '1kg Price',
      price: '$4.68',
      image: 'https://i.imgur.com/nJY8JNB.png',
      inCart: true,
      width: 1012,
      height: 1492,
   },
   {
      id: 2,
      name: 'Freshy Orange',
      type: '1kg Price',
      price: '$6.40',
      image: 'https://i.imgur.com/AfS75Br.png',
      inCart: false,
      width: 1500,
      height: 1378
   },
   {
      id: 3,
      name: 'Strawberries',
      type: '1kg Price',
      price: '$6.40',
      image: 'https://i.imgur.com/iR4whBy.png',
      inCart: true,
      width: 1500,
      height: 1296
   },
   {
      id: 4,
      name: 'Pomegranate',
      type: '1kg Price',
      price: '$6.40',
      image: 'https://i.imgur.com/pSVVsOV.png',
      inCart: false,
      width: 1498,
      height: 1158
   },
   {
      id: 5,
      name: 'Banana',
      type: '1kg Price',
      price: '$6.40',
      image: 'https://i.imgur.com/2dLWWDO.png',
      inCart: true,
      width: 1500,
      height: 1132
   },
   {
      id: 6,
      name: 'Freshy Apple',
      type: '1kg Price',
      price: '$6.40',
      image: 'https://i.imgur.com/XW6H4ta.png',
      inCart: false,
      width: 1498,
      height: 1106
   },
   {
      id: 7,
      name: 'Avocado',
      type: '1kg Price',
      price: '$6.40',
      image: 'https://i.imgur.com/UGzYV1p.png',
      inCart: false,
      width: 1496,
      height: 1154
   },
   {
      id: 8,
      name: 'Cantaloupe',
      type: '1kg Price',
      price: '$6.40',
      image: 'https://i.imgur.com/8DUkTbk.png',
      inCart: true,
      width: 1498,
      height: 1048
   },
   {
      id: 9,
      name: 'Coconut',
      type: '1kg Price',
      price: '$6.40',
      image: 'https://i.imgur.com/rJLkvBD.png',
      inCart: false,
      width: 1500,
      height: 1242
   },
   {
      id: 10,
      name: 'Freshy Grape',
      type: '1kg Price',
      price: '$6.40',
      image: 'https://i.imgur.com/SDrKCFb.png',
      inCart: true,
      width: 1498,
      height: 1076
   },
   {
      id: 11,
      name: 'Lemon',
      type: '1kg Price',
      price: '$6.40',
      image: 'https://i.imgur.com/UDMc2mg.png',
      inCart: false,
      width: 1498,
      height: 1490
   },
   {
      id: 12,
      name: 'Mango',
      type: '1kg Price',
      price: '$6.40',
      image: 'https://i.imgur.com/kv2gUnV.png',
      inCart: true,
      width: 1500,
      height: 1494
   },
   {
      id: 12,
      name: 'Watermelon',
      type: '1kg Price',
      price: '$6.40',
      image: 'https://i.imgur.com/1VuA8DC.png',
      inCart: false,
      width: 1500,
      height: 1122
   }
]

export default class ProductDetailScreen extends React.Component {

   render() {

      return (
         <View style={styles.stack}>
            <ScrollView style={styles.container}>

               <View style={styles.headerBox}>
                  <IconButton icon="chevron-left" size={26} color="#FF5D29" style={{ marginLeft: 20 }}
                     onPress={ () => { this.props.navigation.goBack() } }/>
                  <IconButton icon="basket" size={18} color="#FF5D29" style={{ marginRight: 20 }}/>
               </View>

               <View style={{ position: 'relative', alignSelf: 'center', marginTop: -20, zIndex: 1 }}>
                  <View
                     style={{
                        width: Dimensions.get("window").width * 2,
                        height: Dimensions.get("window").width * 2,
                        borderRadius: Dimensions.get("window").width * 2,
                        backgroundColor: '#F8F8F8',
                        position: 'absolute',
                        alignSelf: 'center',
                        top: (-Dimensions.get("window").width) - 140,
                        opacity: 1
                     }}
                  />

                  <ImageBlock
                     width={1500}
                     height={1378}
                     uri={'https://i.imgur.com/AfS75Br.png'}
                     style={{}} />
               </View>

               <View style={{ padding: 10, marginTop: 40 }}>
                  <View style={{ paddingHorizontal: 10 }}>
                     <Text style={{ fontFamily: "Poppins_Regular", fontSize: 26 }}>Freshy Naturel</Text>

                     <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>                        
                        <View>
                           <Text style={{ fontFamily: "Poppins_Medium", fontSize: 26, marginTop: -10 }}>Orange</Text>                           
                           <View style={{ flexDirection: 'row' }}>
                              <Icon name='star' size={16} color='#FF6433' />
                              <Icon name='star' size={16} color='#FF6433' />
                              <Icon name='star' size={16} color='#FF6433' />
                              <Icon name='star' size={16} color='#FF6433' />
                              <Icon name='star' size={16} color='#FFCEBF' />
                           </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>                           
                           <IconButton icon="minus" size={18} color="#FFFFFF" style={{ backgroundColor: '#FF5D29', width: 35, height: 35, borderRadius: 6, elevation: 2}}/>
                           <Text style={{ fontFamily: "Poppins_Bold", fontSize: 11, color: '#111111', marginHorizontal: 10 }}>2kg</Text>
                           <IconButton icon="plus" size={18} color="#FFFFFF" style={{ backgroundColor: '#FF5D29', width: 35, height: 35, borderRadius: 6, elevation: 2  }}/>
                        </View>
                     </View>

                     <Text style={{ fontFamily: "Poppins_Bold", fontSize: 15, marginTop: 20, color: '#111111' }}>Product Description</Text>

                     <Text style={{ fontFamily: "Poppins_Medium", fontSize: 12, marginTop: 0, color: '#AFAFB0' }}>
                        Oranges Are A Type Of Low Calorie, Highly Nutrotopus Citrus Fruit. As Part Of A Healthful And Varied Diet 
                        And Oranges Contribute To Strong, Clear Skin. 
                     </Text>
                  </View>

                  <MasonryList
                     data={products}
                     numColumns={2}
                     style={{ marginTop: 20, marginBottom: 60 }}
                  />
               </View>
            </ScrollView>

            <ProductDetailBottomBar />
         </View>

      );
   }
}

const styles = StyleSheet.create({
   stack: {
      position: 'relative'
   },
   container: {
      backgroundColor: "#FFFFFF"
   },
   headerBox: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 33,
      zIndex: 2
   },
});