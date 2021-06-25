module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: '~assets/',
            rootPathSuffix: 'src/assets/',
          },
          {
            rootPathPrefix: '~components/',
            rootPathSuffix: 'src/components/',
          },
          {
            rootPathPrefix: '~enum/',
            rootPathSuffix: 'src/enum/',
          },
          {
            rootPathPrefix: '~hooks/',
            rootPathSuffix: 'src/hooks/',
          },
          {
            rootPathPrefix: '~navigation/',
            rootPathSuffix: 'src/navigation/',
          },
          {
            rootPathPrefix: '~redux/',
            rootPathSuffix: 'src/redux/',
          },
          {
            rootPathPrefix: '~screens/',
            rootPathSuffix: 'src/screens/',
          },
          {
            rootPathPrefix: '~styles/',
            rootPathSuffix: 'src/styles/index.tsx',
          },
          {
            rootPathPrefix: '~types/',
            rootPathSuffix: 'src/types/',
          },
          {
            rootPathPrefix: '~utils/',
            rootPathSuffix: 'src/utils/',
          },
        ],
      },
    ],
  ],
};
