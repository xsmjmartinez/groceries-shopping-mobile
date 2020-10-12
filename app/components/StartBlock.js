import * as React from 'react';

import { Image, Dimensions } from 'react-native';

export default class StartBlock extends React.Component {

   state = {

   }

   componentDidMount() {

    
   }

   render() {

      const { imageWidth, imageHeight } = this.state
      const { uri } = this.props

      return (
         <Image
            style={[{ width: imageWidth, height: imageHeight }, this.props.style]}
            source={{ uri: uri }}
         />
      );
   }
}
