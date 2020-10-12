import React from 'react';

import { Image, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';

import BottomBar from '../components/BottomBar';
import IconButton from '../components/IconButton';
import MasonryList from '../components/MasonryList';
import SearchInput from '../components/SearchInput';
import TabLayout from '../components/TabLayout';

const tabOptions = [
   { key: 'fruit', text: 'Fruits' },
   { key: 'vegetable', text: 'Vegetable' },
   { key: 'bakery', text: 'Bakery' },
   { key: 'fastfood', text: 'Fast-food' },
   { key: 'drinks', text: 'Drinks' },
]

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

export default class HomeScreen extends React.Component {

   render() {

      return (
         <View style={styles.stack}>
            <ScrollView style={styles.container}>

               <View style={styles.cosa} />

               <View style={styles.header}>
                  <View style={styles.info}>
                     <Image
                        style={{ height: 35, width: 35 }}
                        source={require('../assets/images/hand.png')}
                     />
                     <View style={styles.textBox}>
                        <Text style={styles.morningText}>Good Morning</Text>
                        <Text style={styles.nameText}>Jose Martinez</Text>
                     </View>
                  </View>
                  <View style={styles.iconBox}>
                     <IconButton icon="bell" size={18} color="#FF5D29" />
                  </View>
               </View>

               <SearchInput style={{ marginTop: 20 }} />

               <TabLayout options={tabOptions} style={{ marginTop: 20, marginLeft: -5 }} />

               <MasonryList
                  data={products}
                  numColumns={2}
                  onPress={(e) => { this.props.navigation.navigate("ProductDetail") }}
                  style={{ marginTop: 20, marginBottom: 70 }}
               />

            </ScrollView>

            <BottomBar />
         </View>

      );
   }
}

const styles = StyleSheet.create({
   stack: {
      position: 'relative'
   },
   container: {
      backgroundColor: "#FFFFFF",
      padding: 10
   },
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      marginTop: 10
   },
   info: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   textBox: {
      marginLeft: 15
   },
   morningText: {
      color: '#AAAAAC',
      fontSize: 14
   },
   nameText: {
      color: '#2A2A2F',
      fontSize: 20,
      fontWeight: 'bold'
   },
   iconBox: {
      justifyContent: 'center'
   },
});