import * as React from 'react';

import { Image, Dimensions } from 'react-native';

export default class ImageBlock extends React.Component {

   state = {
      imageWidth: 0,
      imageHeight: 0,
   }

   componentDidMount() {

      const width = this.props.width;
      const height = this.props.height;

      const windowWidth = Dimensions.get("window").width;

      const screenWidth = windowWidth - ( 0.4 * windowWidth );
      const scaleFactor = width / screenWidth;
      const imageHeight = height / scaleFactor;

      this.setState({ imageWidth: screenWidth, imageHeight: imageHeight })

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
