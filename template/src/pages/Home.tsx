import React, { memo, FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};

const Home: FC<Props> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default memo(Home);

const styles = StyleSheet.create({});
