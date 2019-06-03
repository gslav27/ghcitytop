export default {
  palette: {
    colors: {
      darkBlue:   '#24292e',
      blue:       '#0366d6',
      lightGrey:  '#e1e4e8',
      grey:       '#586069',
      yellow:     '#ffeb3b',
    },
  },
  
  // Mixins
  mediaMixins: { width : { notXs: styles => `@media (min-width: 480px) { ${styles} }` } },
};


