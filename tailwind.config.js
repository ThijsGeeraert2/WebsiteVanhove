/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html"
    ],
    theme: {
      colors:{
        'primary' : '#010104',
        'secundary' : '#020024',
        'dblue' : '#0600C2',
        'lblue' : '#3A31D8',
        'light' : '#EAE9FC',
        'white' : '#FFFFFF',
        'secbg' : '#04040A',
        'red' : '#FF2D16',
        'grey' : '#EEE'
      },  

      extend: {
        fontFamily: {
          'sans' : 'Red Hat Display, sans-serif'
        },
        screens: {
          'lg' : '1280px'
        }
      }
    },

 
  };