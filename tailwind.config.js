// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6979f8',
        'primary-hover': '#A5AFFB',
        second: '#BE52F2',
        'second-hover': '#DBA5F5',
        success: '#00C48C',
        'success-hover': '#7DDFC3',
        info: '#0084F4',
        'info-hover': '#66B5F8',
        warning: '#FFA26B',
        'warning-hover': '#FFC7A6',
        danger: '#FF647C',
        'danger-hover': '#FDAFBB',
      },
    },
  },
  plugins: [],
};


