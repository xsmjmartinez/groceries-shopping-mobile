import React from 'react';

import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';

export default class TabLayout extends React.Component {

   static defaultProps = {
      onPress: () => { }
   }

   state = {
      value: this.props.options[0].key,
   };

   onPressAction(key) {
      this.setState({ value: key })
      this.props.onPress(key);
   }

   render() {
      const { options } = this.props;
      const { value } = this.state;

      return (
         <ScrollView 
            style={[styles.layout, this.props.style]} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}>
            {options.map(item => {
               return (
                  <TouchableOpacity 
                     onPress={() => { this.onPressAction(item.key) }} 
                     key={item.key}
                     style={styles.tab}>
                     <View>
                        {value === item.key && (
                           <View style={styles.selectedBox}>
                              <Text style={styles.selectedText}>{item.text}</Text>
                              <View style={styles.selectedLine} />
                           </View>
                        )}

                        {value !== item.key && (
                           <View style={styles.unselectedBox}>
                              <Text style={styles.unselectedText}>{item.text}</Text>
                           </View>
                        )}
                     </View>
                  </TouchableOpacity>
               );
            })}
         </ScrollView>
      );
   }
}

const styles = StyleSheet.create({
   layout: {
      backgroundColor: '#FFFFFF',
      padding: 0,
      margin: 0
   },
   tab: {
      alignSelf: 'center'
   },
   selectedBox: {
      alignItems: 'center',
      paddingHorizontal: 16
   },
   unselectedBox: {
      paddingHorizontal: 16
   },
   selectedText: {
      fontSize: 22,
      color: "#2A2A2F",
      marginBottom: 10
   },
   selectedLine: {
      height: 5,
      width: 20,
      backgroundColor: '#FF5D29',
      borderRadius: 12
   },
   unselectedText: {
      fontSize: 16,
      color: "#AAAAAC",
      marginBottom: 10
   },
   unselectedLine: {
      height: 5,
      width: 20,
      backgroundColor: 'transparent',
      borderRadius: 12
   },
});