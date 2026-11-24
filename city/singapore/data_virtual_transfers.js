// Fare-continuous walking transfers; conditions are rendered by the city module.
const VIRTUAL_FREE_TRANSFER_MAP = {
  "NS21": [
    "DT11"
  ],
  "DT11": [
    "NS21"
  ],
  "BP6": [
    "DT1"
  ],
  "DT1": [
    "BP6"
  ],
  "EW2": [
    "DT32"
  ],
  "DT32": [
    "EW2"
  ]
};
const VIRTUAL_FREE_CONNECT_LINES = [
  {
    "from": "NS21",
    "to": "DT11"
  },
  {
    "from": "BP6",
    "to": "DT1"
  },
  {
    "from": "EW2",
    "to": "DT32"
  }
];
const VIRTUAL_TRANSFER_MAP = {};
const VIRTUAL_CONNECT_LINES = [];
