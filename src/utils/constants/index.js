export const API_URL = "http://localhost:3000";

export const LIST_FILES_TABLE = [
  {
    label: "File Name",
    accesor: "file",
  },
  {
    label: "Lines",
    accesor: "lines",
    onClick: () => {
      console.warn("@dasdasdas");
    },
  },
];

export const DETAIL_TABLE = [
  {
    label: "File Name",
    accesor: "file",
  },
  {
    label: "Text",
    accesor: "text",
  },
  {
    label: "Number",
    accesor: "number",
  },
  {
    label: "Hex",
    accesor: "hex",
  },
];
