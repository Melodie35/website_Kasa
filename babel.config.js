export const presets = [
  '@babel/preset-env', 
  '@babel/preset-react',
  '@babel/preset-typescript'
];

export const plugins = [
  ['module-resolver', {
    root: ['./src'],
    alias: {
      '@components': './src/components',
      '@assets': './src/assets',
    }
  }]
];





