module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Stuart Harland | Front-end Developer';
      return args;
    });
  },
};
