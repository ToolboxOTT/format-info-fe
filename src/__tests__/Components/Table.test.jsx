import { render, screen } from "@testing-library/react";
import TableComponent from "../../Components/Table";

const MOCK_TABLE = [
  {
    label: "File Name",
    accesor: "file",
  },
];

test("Renders the Table Component", async () => {
  render(<TableComponent columns={MOCK_TABLE} data={[]} />);

  await screen.findByRole("column");

  expect(screen.getByRole('column')).toHaveTextContent('File Name')
});
