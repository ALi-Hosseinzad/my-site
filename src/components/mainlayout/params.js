export const PARAMS =[
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
    // {
    //   particles: {
    //     number: {
    //       value: 8,
    //       density: {
    //         enable: true,
    //         value_area: 800,
    //       },
    //     },
    //     line_linked: {
    //       enable: false,
    //     },
    //     move: {
    //       speed: 1,
    //       out_mode: "out",
    //     },
    //     shape: {
    //       type: 'images',
    //       image: [
    //         {
    //           src: '/src/img/icons/icon-backbone.png',
    //           height: 20,
    //           width: 23,
    //         },
    //         {
    //           src: "/src/img/icons/icon-bootstrap.png",
    //           height: 20,
    //           width: 20,
    //         },
    //         {
    //           src: "/src/img/icons/icon-css.png",
    //           height: 20,
    //           width: 20,
    //         },
    //         {
    //           src: "/src/img/icons/icon-github.png",
    //           height: 20,
    //           width: 20,
    //         },
    //         {
    //           src: "/src/img/icons/icon-HTML5.png",
    //           height: 20,
    //           width: 20,
    //         },
    //         {
    //           src: "/src/img/icons/icon-javascript.png",
    //           height: 20,
    //           width: 20,
    //         },
    //         {
    //           src: "/src/img/icons/icon-jquery.png",
    //           height: 20,
    //           width: 20,
    //         },
    //         {
    //           src: "/src/img/icons/icon-material-ui.png",
    //           height: 20,
    //           width: 20,
    //         },
    //         {
    //           src: "/src/img/icons/icon-react.png",
    //           height: 20,
    //           width: 20,
    //         },
    //         {
    //           src: "/src/img/icons/icon-npm.png",
    //           height: 20,
    //           width: 20,
    //         },
    //       ],
    //     },
    //     color: {
    //       value: "#CCC",
    //     },
    //     size: {
    //       value: 30,
    //       random: false,
    //       anim: {
    //         enable: true,
    //         speed: 4,
    //         size_min: 10,
    //         sync: false,
    //       },
    //     },
    //   },
    //   retina_detect: false,
    // },
  ];