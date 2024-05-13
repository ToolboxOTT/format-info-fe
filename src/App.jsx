import { useEffect, useState } from "react";
import Header from "./Components/Header";
import TableComponent from "./Components/Table";
import { useFetchData } from "./hooks/useFileList";
import { LIST_FILES_TABLE, DETAIL_TABLE } from "./utils/constants";

function App() {
  const [fileListData, setFileListData] = useState();
  const [fileListDetail, setFileListDetail] = useState();
  const { data: fileList } = useFetchData(
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
      const fileDetail = fileList.find((item) => item.file === file);
      if (fileDetail) {
        setFileListDetail(
          fileDetail.lines.map((item) => ({
            file: fileDetail.file,
            ...item,
          }))
        );
      }
    }
  };

  return (
    <>
      <Header>React Test App</Header>
      <TableComponent
        columns={LIST_FILES_TABLE}
        data={fileListData}
        onClickRow={onClickRow}
      />
      {fileListDetail && (
        <>
          <Header>Detail</Header>
          <TableComponent columns={DETAIL_TABLE} data={fileListDetail} />
        </>
      )}
    </>
  );
}

export default App;
