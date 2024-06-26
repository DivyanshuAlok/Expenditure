import {StyleSheet, View, Dimensions, Text} from 'react-native';
import React, {useMemo} from 'react';
import {SvgXml} from 'react-native-svg';
import {Canvas, Circle, Path, Skia, Group} from '@shopify/react-native-skia';

const clothing = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18_833)">
<path d="M18.1528 12.0535H20.672C20.8092 12.0538 20.9438 12.0156 21.0604 11.9434C21.1771 11.8711 21.2712 11.7675 21.332 11.6445L23.0424 8.22359C23.1271 8.05227 23.1436 7.85513 23.0883 7.67215C23.0331 7.48917 22.9103 7.33404 22.7449 7.23823L18.1528 4.61679" fill="#DABB4F"/>
<path d="M18.1528 12.0535H20.672C20.8092 12.0538 20.9438 12.0156 21.0604 11.9434C21.1771 11.8711 21.2712 11.7675 21.332 11.6445L23.0424 8.22359C23.1271 8.05227 23.1436 7.85513 23.0883 7.67215C23.0331 7.48917 22.9103 7.33404 22.7449 7.23823L18.1528 4.61679" stroke="#DABB4F" stroke-width="1.04295" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.25406 12.0535H3.73488C3.59764 12.0538 3.46305 12.0156 3.3464 11.9434C3.22974 11.8711 3.13567 11.7675 3.07487 11.6445L1.36443 8.22359C1.27968 8.05227 1.26327 7.85513 1.31851 7.67215C1.37375 7.48917 1.49651 7.33404 1.6619 7.23823L6.25406 4.61679" fill="#DABB4F"/>
<path d="M6.25406 12.0535H3.73488C3.59764 12.0538 3.46305 12.0156 3.3464 11.9434C3.22974 11.8711 3.13567 11.7675 3.07487 11.6445L1.36443 8.22359C1.27968 8.05227 1.26327 7.85513 1.31851 7.67215C1.37375 7.48917 1.49651 7.33404 1.6619 7.23823L6.25406 4.61679" stroke="#DABB4F" stroke-width="1.04295" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1781 4.61679C15.1781 5.40573 14.8647 6.16235 14.3068 6.72021C13.749 7.27807 12.9924 7.59147 12.2034 7.59147C11.4145 7.59147 10.6579 7.27807 10.1 6.72021C9.54215 6.16235 9.22874 5.40573 9.22874 4.61679H6.25406V20.2339C6.25406 20.4311 6.33241 20.6203 6.47188 20.7597C6.61134 20.8992 6.8005 20.9776 6.99773 20.9776H17.4091C17.6064 20.9776 17.7955 20.8992 17.935 20.7597C18.0744 20.6203 18.1528 20.4311 18.1528 20.2339V4.61679H15.1781Z" fill="#DABB4F" stroke="#DABB4F" stroke-width="1.21983" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_18_833">
<rect x="0.304688" y="0.898438" width="23.7975" height="23.7975" rx="1.82974" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const beauty = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7034 18.7465C17.0844 18.7465 20.6359 15.195 20.6359 10.8141C20.6359 6.43306 17.0844 2.88156 12.7034 2.88156C8.32243 2.88156 4.77094 6.43306 4.77094 10.8141C4.77094 15.195 8.32243 18.7465 12.7034 18.7465Z" fill="#5281AC"/>
<path d="M6.75406 22.7128H18.6528" stroke="#5281AC" stroke-width="1.04295" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const hnf = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<mask id="mask0_18_845" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
<rect x="0.804123" y="0.899017" width="23.7975" height="23.7975" fill="url(#pattern0_18_845)"/>
</mask>
<g mask="url(#mask0_18_845)">
<path d="M-0.894699 0.0490112H26.3024V24.6964H-0.894699V0.0490112Z" fill="#EE9E38"/>
</g>
<defs>
<pattern id="pattern0_18_845" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18_845" transform="scale(0.00195312)"/>
</pattern>
<image id="image0_18_845" width="512" height="512" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`;

const food = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.255859" y="0.5" width="23" height="23" fill="#76A6D3"/>
</svg>`;

const house = `<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.705 6.53584L14.185 2.67376C12.6804 1.61959 10.3708 1.67709 8.92374 2.79834L4.12249 6.54542C3.16416 7.29292 2.40707 8.82626 2.40707 10.0338V16.6463C2.40707 19.09 4.39082 21.0833 6.83457 21.0833H17.1654C19.6092 21.0833 21.5929 19.0996 21.5929 16.6558V10.1583C21.5929 8.86459 20.7592 7.27376 19.705 6.53584Z" fill="#DFA1A7"/>
<path d="M12 17.9687C11.6071 17.9687 11.2812 17.6429 11.2812 17.25V14.375C11.2812 13.9821 11.6071 13.6562 12 13.6562C12.3929 13.6562 12.7188 13.9821 12.7188 14.375V17.25C12.7188 17.6429 12.3929 17.9687 12 17.9687Z" fill="white"/>
</svg>
`;

const beauty2 = `<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<mask id="mask0_18_868" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="23">
<rect x="0.5" width="23" height="23" fill="url(#pattern0_18_868)"/>
</mask>
<g mask="url(#mask0_18_868)">
<rect x="-3.45312" y="-3.95312" width="31.6229" height="31.6229" fill="#5ACCD1"/>
</g>
<defs>
<pattern id="pattern0_18_868" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18_868" transform="scale(0.00195312)"/>
</pattern>
<image id="image0_18_868" width="512" height="512" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`;

const Category = ({type, limit, amount, color}) => {
  const r = 25;
  const scale = 2;
  const svgSize = 12;
  const strokeWidth = 2;

  const path = Skia.Path.Make();
  path.addArc(
    {
      x: 0 + strokeWidth / 2,
      y: 0 + strokeWidth / 2,
      width: r * 2 - strokeWidth,
      height: r * 2 - strokeWidth,
    },
    0,
    360,
  );

  const RetSvg = () => {
    switch (type) {
      case 'clothing':
        return (
          <SvgXml
            xml={clothing}
            scaleX={scale}
            scaleY={scale}
            width={svgSize}
            height={svgSize}
          />
        );
      case 'beauty':
        return (
          <SvgXml
            xml={beauty}
            scaleX={scale}
            scaleY={scale}
            width={svgSize}
            height={svgSize}
          />
        );
      case 'hnf':
        return (
          <SvgXml
            xml={hnf}
            scaleX={scale}
            scaleY={scale}
            width={svgSize}
            height={svgSize}
          />
        );
      case 'food':
        return (
          <SvgXml
            xml={food}
            scaleX={scale}
            scaleY={scale}
            width={svgSize}
            height={svgSize}
          />
        );
      case 'house':
        return (
          <SvgXml
            xml={house}
            scaleX={scale}
            scaleY={scale}
            width={svgSize}
            height={svgSize}
          />
        );
      case 'beauty2':
        return (
          <SvgXml
            xml={beauty2}
            scaleX={scale}
            scaleY={scale}
            width={svgSize}
            height={svgSize}
          />
        );
      default:
        break;
    }
  };

  return (
    <View
      style={{
        width: 50,
        height: 50,
      }}>
      <Canvas style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Group>
          <Circle cx={r} cy={r} r={r} color={color} opacity={0.12} />
          <Path
            path={path}
            style="stroke"
            strokeWidth={strokeWidth}
            strokeCap="round"
            color={color}
            end={amount / limit}
          />
        </Group>
      </Canvas>
      <View
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <RetSvg />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
