import React, { memo, FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DetailNavigationProp, DetailRouteProp } from 'src/route';

type Props = {
  route: DetailRouteProp,
  navigation: DetailNavigationProp,
};

const Detail: FC<Props> = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Detail</Text>
    </View>
  );
};

export default memo(Detail);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});