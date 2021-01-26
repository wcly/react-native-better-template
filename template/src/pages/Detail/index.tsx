import React, { memo, FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};

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