import { useEffect, useState } from "react";
import Header from "./Components/Header";
import TableComponent from "./Components/Table";
import { useFetchData } from "./hooks/useFileList";

const LIST_FILES_TABLE = [
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

function App() {
  const [fileListData, setFileListData] = useState();
  const [fileListDetail, setFileListDetail] = useState();
  const { data: fileList, loading, error } = useFetchData(
    "http://localhost:3000/api/v1/files/data"
  );

  useEffect(() => {
    if (fileList) {
      setFileListData(
        fileList.map((item) => ({
          file: item.file,
          lines: item.lines.length,
        }))
      );
    }
  }, [fileList]);

  const onClickRow = (row) => {
    const { file } = row;
    if (file) {
      const listFound = fileList.find( item => item.file === file);
      console.warn('listFound', listFound)
    }
  };

  return (
    <>
      <Header />
      <TableComponent
        columns={LIST_FILES_TABLE}
        data={fileListData}
        onClickRow={onClickRow}
      />
    </>
  );
}

export default App;
