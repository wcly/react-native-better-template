import React, { memo, FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type Props = {};

const Home: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Text>Home</Text>
      <Button
        title="go to detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default memo(Home);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
