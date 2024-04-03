/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
const Main1 = () => {
  const [select, setSelect] = useState(true);
  let animationWidth = useSharedValue(300);
  let animationHeight = useSharedValue(300);
  let animationRadius = useSharedValue(0);
  let animationColor = useSharedValue('black');
  const animatedStyle = useAnimatedStyle(() => {
    return {backgroundColor: animationColor.value};
  });
  const clickHandler = () => {
    if (select) {
      setSelect(false);
      animationWidth.value = 200;
      animationHeight.value = 200;
      animationRadius.value = 100;
      animationColor.value = 'green';
    } else {
      setSelect(true);
      animationWidth.value = 300;
      animationHeight.value = 300;
      animationRadius.value = 0;
      animationColor.value = 'black';
    }

    console.log('You click');
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red',
        paddingTop: 10,
      }}>
      <StatusBar />
      <View>
        <View>
          <Text>Hello world</Text>
        </View>
        <Animated.View
          style={[
            {
              width: animationWidth,
              height: animationHeight,
              borderRadius: animationRadius,
              backgroundColor: animationColor,
              marginTop: 30,
            },
            animatedStyle,
          ]}
        />
        <View style={{marginTop: 30}}>
          <Button title="click me" onPress={clickHandler} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main1;
