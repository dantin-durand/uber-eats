import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';

import {View, SafeAreaView} from 'react-native';

export function DefaultLayout({children}) {
  return (
    <View>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
}
