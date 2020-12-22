export const PARAMS = [
  {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      size: {
        value: 10,
        random: true,
      },
      move: {
        direction: "bottom",
        out_mode: "out",
      },
      line_linked: {
        enable: false,
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "remove",
        },
      },
      modes: {
        remove: {
          particles_nb: 10,
        },
      },
    },
  },
  {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          size: 0,
          opacity: 0,
        },
        repulse: {
          distance: 400,
          duration: 4,
        },
      },
    },
  },
  {},
  {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      size: {
        value: 10,
        random: true,
      },
      move: {
        direction: "bottom",
        out_mode: "out",
      },
      line_linked: {
        enable: false,
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "remove",
        },
      },
      modes: {
        remove: {
          particles_nb: 10,
        },
      },
    },
  },
  {
    particles: {
      number: {
        value: 50,
      },
      size: {
        value: 3,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  },
];
