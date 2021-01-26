import React, { memo, FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};

const Login: FC<Props> = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default memo(Login);

const styles = StyleSheet.create({});
