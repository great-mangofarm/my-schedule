const isObfuscationMode = process.env.NODE_ENV === 'obfuscation';

module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    ...(isObfuscationMode
      ? [
          require('postcss-obfuscator')({
            enable: true,
            srcPath: 'src',
            desPath: 'obfuscated',
            extensions: ['.jsx', '.tsx', '.html', '.vue'],
            formatJson: true,
            showConfig: true,
            fresh: true,
            cssExcludes: ['calendars.css'],
            classIgnore: [
              'custom-calendar',
              'event-fc-color',
              'fc-event-main',
              'fc-daygrid-event-dot',
              'fc-event-time',
              'fc-event-title',
            ],
          }),
        ]
      : []),
  ],
};
