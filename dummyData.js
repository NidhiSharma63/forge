const dummyData = [
  {
    id: "root",
    children: [
      {
        id: Math.random(),
        type: "div",
        props: { text: "I'm the First" },
        children: [
          {
            id: Math.random(),
            type: "div",
            props: { text: "I'm inside div" },
            children: [
              {
                id: Math.random(),
                type: "div",
                props: { text: "I'm the inside div inside div" },
                children: [],
                style: {
                  height: "20px",
                  width: "100%",
                },
              },
            ],
            style: {
              height: "40px",
              width: "60%",
            },
          },
        ],
        style: {
          height: "80px",
          width: "100%",
        },
      },

      {
        id: Math.random(),
        type: "div",
        props: { text: "I'm the Second" },
        children: [],
        style: {
          height: "40px",
          width: "100%",
        },
      },
      {
        id: Math.random(),
        type: "div",
        props: { text: "I'm the Third " },
        children: [
          {
            id: Math.random(),
            type: "h1",
            props: { text: "I'm the Third nested" },
            children: [],
            style: {
              height: "40px",
              width: "100%",
            },
          },
        ],
        style: {
          height: "80px",
          width: "100%",
        },
      },
    ],
  },
];

export default dummyData;
