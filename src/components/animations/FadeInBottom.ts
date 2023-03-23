const FadeInBottom = {
  hidden: {
    y: 50,
    opacity: 0,
  },

  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.42, 0, 0.58, 1],
      duration: 0.6,
    },
  },
};

export default FadeInBottom;
