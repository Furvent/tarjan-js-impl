export const graph = [
  {
    id: 1,
    index: undefined,
    connectedTo: [2],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 2,
    index: undefined,
    connectedTo: [3],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 3,
    index: undefined,
    connectedTo: [1],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 4,
    index: undefined,
    connectedTo: [2, 3, 5],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 5,
    index: undefined,
    connectedTo: [4, 6],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 6,
    index: undefined,
    connectedTo: [3, 7],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 7,
    index: undefined,
    connectedTo: [6],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 8,
    index: undefined,
    connectedTo: [5, 7, 8],
    onStack: false,
    lowLink: undefined,
  },
];
