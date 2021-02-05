import React, { memo, FC } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  View,
} from 'react-native';
import { LoginNavigationProp, LoginRouteProp } from 'src/route';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultRootState } from '@models/index.d.ts';

type Props = {
  route: LoginRouteProp;
  navigation: LoginNavigationProp;
};

const Login: FC<Props> = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    ({ loading }: DefaultRootState) => loading.models.user,
  );

  const handlePress = async () => {
    await dispatch({
      type: 'user/login',
      payload: {
        username: 'xxx',
        password: 'xxx',
      },
    });
    Alert.alert('提示', '登录成功');
  };

  return (
    <View style={styles.wrapper}>
      {loading && <ActivityIndicator size="small" />}
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
