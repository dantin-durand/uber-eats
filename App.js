/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import Home from './src/screens/homeScreen';
import Restaurant from './src/screens/restaurantScreen';

const Stack = createSharedElementStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const App = () => {
  const [openAppStatus, setOpenAppStatus] = useState(true);
  const openAppAnimation = useRef(null);

  useEffect(() => {
    if (openAppAnimation.current) {
      openAppAnimation.current.play(0, 44);
    }
  }, []);

  return (
    <NavigationContainer>
      {openAppStatus ? (
        <LottieView
          source={require('./src/assets/animations/openappv2.json')}
          loop={false}
          style={styles.openanim}
          ref={openAppAnimation}
          onAnimationFinish={() => setOpenAppStatus(false)}
        />
      ) : null}

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
          sharedElements={(route, otherRoute, showing) => {
            const {item} = route.params;
            return [
              {
                id: `item.${item.id}`,
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  openanim: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 2,
    transform: [{scale: 2}],
  },
});

export default App;
