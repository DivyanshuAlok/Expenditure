import React from 'react';
import {Surface, Path, Text} from '@shopify/react-native-skia';

const CircularProgressBar = ({progress}) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  const progressAngle = (progress / 100) * circumference;

  return (
    <Surface width={radius * 2} height={radius * 2}>
      <Path
        d={`
          M ${radius} ${radius}
          A ${radius} ${radius} 0 0 1 ${
          radius + Math.cos(progressAngle) * radius
        } ${radius + Math.sin(progressAngle) * radius}
          Z
        `}
        fill="none"
        stroke="black"
        strokeWidth={strokeWidth}
      />
      <Text
        x={radius}
        y={radius}
        fontSize={20}
        textAnchor="middle"
        alignmentBaseline="middle">
        {progress}%
      </Text>
    </Surface>
  );
};

export default CircularProgressBar;
