import React, { memo, FC } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import { LoginNavigationProp, LoginRouteProp } from 'src/route';
import { login } from '@services/login';

type Props = {
  route: LoginRouteProp;
  navigation: LoginNavigationProp;
};

const Login: FC<Props> = () => {
  const handlePress = async () => {
    const res = await login({
      username: 'xxx',
      password: 'xxx',
    });
    console.log(res)
    if(res.code === 0){
      Alert.alert('提示', '登录成功');
    }
  };

  return (
    <View style={styles.wrapper}>
      <Button title="login" onPress={handlePress} />
    </View>
  );
};

export default memo(Login);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
