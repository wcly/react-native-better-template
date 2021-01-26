import React, { memo, FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};

const Mine: FC<Props> = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Mine</Text>
    </View>
  );
};

export default memo(Mine);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});