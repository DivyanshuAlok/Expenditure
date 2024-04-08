import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MyText = ({children, style}) => {
  let baseStyle = styles.regular;

  // Multiple styles may be provided.
  (Array.isArray(style) ? style : [style]).forEach(style => {
    if (style && style.fontWeight) {
      baseStyle = style.fontWeight === 'bold' ? styles.bold : styles.regular;
    }
  });

  return (
    <View>
      <Text style={[baseStyle, style, {fontWeight: 'normal'}]}>{children}</Text>
    </View>
  );
};

export default MyText;

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Montserrat-Regular',
    color: 'black',
  },
  bold: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
});
