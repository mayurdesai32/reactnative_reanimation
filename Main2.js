import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const Main2 = () => {
  let animationImgWidth = useSharedValue(70);
  let animationImgHeight = useSharedValue(70);
  let animationImgY = useSharedValue(0);
  let animationScale = useSharedValue(0);
  let animationDisplay = useSharedValue('none');

  const animatedImgStyle = useAnimatedStyle(() => {
    return {
      width: animationImgWidth.value,
      height: animationImgHeight.value,
      transform: [{translateY: animationImgY.value}],
    };
  });

  const animatedCloseStyle = useAnimatedStyle(() => {
    return {
      display: animationDisplay.value,
      transform: [{scale: animationScale.value}],
    };
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'red',
      }}>
      <View>
        <AnimatedBtn
          style={[
            {width: 40, height: 40, marginLeft: 20, display: 'none'},
            animatedCloseStyle,
          ]}
          onPress={() => {
            animationDisplay.value = 'none';
            animationScale.value = withTiming(0, {duration: 500});
            animationImgWidth.value = withTiming(70, {duration: 500});

            animationImgHeight.value = withTiming(70, {duration: 500});
            animationImgY.value = withTiming(0, {duration: 500});
          }}>
          <Image
            style={[{width: 24, height: 24}]}
            source={require('./assert/close.png')}
          />
        </AnimatedBtn>
        <TouchableOpacity
          onPress={() => {
            if (animationImgWidth.value == 70) {
              animationDisplay.value = 'flex';
              animationScale.value = withTiming(1, {duration: 500});
              animationImgWidth.value = withTiming(300, {duration: 500});
              animationImgHeight.value = withTiming(300, {duration: 500});
              animationImgY.value = withTiming(150, {duration: 500});
            }
          }}>
          <AnimatedImage
            style={[{width: 70, height: 70}, animatedImgStyle]}
            source={require('./assert/profile_pic.jpg')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main2;
