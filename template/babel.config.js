module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@pages': './src/pages',
          '@components': './src/components',
          '@utils': './src/utils',
          '@services': './src/services',
        },
      },
      ,
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'], // 生成环境中移除console
    },
  },
};
