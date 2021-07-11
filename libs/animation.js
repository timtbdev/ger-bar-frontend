export const fadeAnim = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.1,
        ease: 'linear',
        when: 'beforeChildren',
      },
    },
    hide: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'linear',
        when: 'beforeChildren',
      },
    },
  }
  
export const flipAnim = {
    show: {
      y: ['100%', '0%'],
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        when: 'beforeChildren',
      },
    },
    hide: {
      y: '-100%',
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        when: 'afterChildren',
      },
    },
  }
  
export const swipeAnim = {
    show: {
      opacity: 1,
      x: ['-1rem', '0rem'],
      transition: {
        x: {
          duration: 0.8,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: {
          duration: 0.2,
          delay: 0.1,
        },
      },
    },
    hide: {
      x: ['0rem', '1rem'],
      opacity: 0,
      transition: {
        x: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: {
          duration: 0.1,
        },
      },
    },
  }

export const easing = [0.175, 0.85, 0.42, 0.96];

export const listVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96],
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 }
  }
};
export const itemVariants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  }
};

export const slideInUp = {
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: easing }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

export const delayedSlideInUp = {
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: easing }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: easing
    }
  }
};

export const slideInLeft = {
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.4, ease: easing }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

export const slideInRight = {
  exit: { x: 150, opacity: 0, transition: { duration: 0.4, ease: easing } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};

export const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30
};