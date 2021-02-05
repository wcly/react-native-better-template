import React, { memo, FC } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MineNavigationProp, MineRouteProp } from 'src/route';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultRootState } from '@models/index.d.ts';

type Props = {
  route: MineRouteProp;
  navigation: MineNavigationProp;
};

const Mine: FC<Props> = () => {
  const { username, loading } = useSelector(
    ({ user, loading }: DefaultRootState) => ({
      username: user.username,
      loading: loading.models.user,
    }),
  );
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch({
      type: 'user/logout',
    });
    Alert.alert('提示', '登录成功');
  };

  return (
    <View style={styles.wrapper}>
      <Text>{username ? '你好：' + username : '未登录'}</Text>
      {loading && <ActivityIndicator size="small" />}
      {username !== '' && <Button title="退出登录" onPress={handleLogout} />}
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
