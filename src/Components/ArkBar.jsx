import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Canvas, Path, Skia} from '@shopify/react-native-skia';
import React from 'react';
import MyText from './MyText';

const {width, height} = Dimensions.get('screen');
const strokeWidth = 15;
const center = width / 2 - 30; //wrapping container padding
const r = (width - strokeWidth) / 2 - 30; // 40 is padding

const ArkBar = ({amount, limit}) => {
  const startAngle = Math.PI;
  const endAngle = Math.PI * 2;

  //Position for start point
  const x1 = center - r * Math.cos(startAngle);
  const y1 = -r * Math.sin(startAngle) + center;
  //Posityion for end point
  const x2 = center - r * Math.cos(endAngle); //
  const y2 = -r * Math.sin(endAngle) + center;

  //background path
  const backgroundPath = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`; // svg path
  const skiaBackgroundPath = Skia.Path.MakeFromSVGString(backgroundPath);

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Path
          path={skiaBackgroundPath}
          strokeWidth={strokeWidth}
          strokeCap={'round'}
          color="#F1F0F5"
          style="stroke"
        />
        <Path
          path={skiaBackgroundPath}
          strokeWidth={strokeWidth}
          strokeCap={'round'}
          color="#35C937"
          style="stroke"
          start={0}
          end={1 - amount / limit}
        />
      </Canvas>
      <View
        style={{
          height: r + strokeWidth,
          width: '100%',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          paddingTop: r / 5,
        }}>
        <MyText style={{fontSize: 30, fontWeight: 'bold'}}>
          {Math.trunc((amount / limit) * 100)}%
        </MyText>
        <MyText style={{fontWeight: 'bold', fontSize: 18}}>
          Total Spendings
        </MyText>
      </View>
    </View>
  );
};

export default ArkBar;

const styles = StyleSheet.create({
  container: {},
  canvas: {
    height: r + strokeWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cursor: {
    backgroundColor: 'green',
  },
  bottomTextConatiner: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  bottomText: {
    fontWeight: 'bold',
  },
  bottomTextConatinerMain: {
    alignItems: 'center',
  },
});
