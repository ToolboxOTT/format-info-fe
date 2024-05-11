import PropTypes from "prop-types";
import React from "react";
import Table from "react-bootstrap/Table";
import { Wrapper } from "./styles";

function TableComponent({ columns = [], data = [], onClickRow }) {
  return (
    <Wrapper>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              onClick={() => {
                if (onClickRow) {
                  onClickRow(row);
                }
              }}
            >
              {columns.map((column, index) => (
                <React.Fragment key={index}>
                  <td>
                    <div>{row[column.accesor]}</div>
                  </td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}

TableComponent.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string.isRequired,
      lines: PropTypes.array,
    })
  ),
  onClickRow: PropTypes.func,
};

export default TableComponent;
