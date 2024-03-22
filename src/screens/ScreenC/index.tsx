import {View, Text} from 'react-native';
import React from 'react';
import NavigationButton from '../../components/atoms/navigationButton';

const ScreenC = ({navigation}: any) => {
  return (
    <View>
      <Text>Screen A</Text>
      <View>
        <NavigationButton
          navigation={navigation}
          destination="ScreenA"
          buttonText="Go to Screen A"
        />
        <NavigationButton
          navigation={navigation}
          destination="ScreenB"
          buttonText="Go to Screen B"
        />
      </View>
    </View>
  );
};

export default ScreenC;
