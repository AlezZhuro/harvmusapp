module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['./src'],
        alias: {
          '@screens': ['./src/screens'],
          '@shared': ['./src/shared'],
          '@widgets': ['./src/widgets'],
          '@entities': ['./src/entities'],
          '@app': ['./src/*'],
        },
      },
    ],
  ],
};
