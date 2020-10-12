import * as React from 'react';

import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductBrick from './ProductBrick';

export default class MasonryList extends React.Component {

   static propTypes = {
      // invitedLeagues: PropTypes.Array,
      // label: PropTypes.string.isRequired,
      // InvitedLeaguesList: PropTypes.Array,
      // onPress: PropTypes.func.isRequired
   };

   static defaultProps = {
      onPress: () => { },
      numColumns: 2,
   }

   state = {
      split1: [],
      split2: [],
   }

   componentDidMount = () => {

      console.log("sorry")

      var split1 = this.props.data.slice(0, this.props.data.length / 2)
      var split2 = this.props.data.slice(this.props.data.length / 2, this.props.data.length)

      this.setState({ 
         split1: split1,
         split2: split2,
      })
      
   }

   render() {
      return (
         <View style={[styles.masonry, this.props.style]}>
            {/* First column */}
            <View style={[styles.column, { paddingRight: 5 }]}>
               {this.state.split1 && this.state.split1.map((product, id) => (
                  <ProductBrick key={id} product={product} onPress={this.props.onPress}/>
               ))}
            </View>

            {/* Second column */}
            <View style={[styles.column, { paddingLeft: 5 }]}>
               {this.state.split2 && this.state.split2.map((product, id) => (
                  <ProductBrick key={id} product={product} onPress={ () => { this.props.onPress(product) } }/>
               ))}
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   masonry: {
      justifyContent: 'space-between',
      alignContent: 'stretch',
      flexDirection: 'row',
      flex: 1,
      paddingHorizontal: 8
   },
   column: {
      width: '50%'
   }
});
