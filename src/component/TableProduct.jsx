import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { useCallback, useState } from "react";
import EditIcon from "../assets/EditIcon";
import DeleteIcon from "../assets/DeleteIcon";
import { columns, productDummy, rows } from "../Data/dataProduct";
import AddProduct from "./AddProduct";

const TableProduct = () => {
  let rowVal = {};
  const [rowValue, setRowValue] = useState(rows);
  console.log(`rowValue=`, rowValue);
  console.count("render");

  const addPaket = () => {
    setRowValue([...rowValue, productDummy]);
    console.log(`rowValue=`, rowValue);
  };
  const delPaket = () => {};

  const renderCell = useCallback((row, columnKey) => {
    const cellValue = row[columnKey];
    rowVal = cellValue;
    switch (columnKey) {
      case "action":
        return (
          <div className="relative flex items-center gap-2">
            <div className="tooltip" data-tip="Edit paket">
              <button
                onClick={() => addPaket()}
                className="text-lg text-default-400 active:opacity-50"
              >
                <EditIcon />
              </button>
            </div>
            <div className="tooltip" data-tip="Hapus paket">
              <button className="text-lg text-danger active:opacity-50">
                <DeleteIcon />
              </button>
            </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="card card-bordered">
      <div className="flex w-5/6">
        <p className="flex-grow">Daftar Paket Laundry</p>
        <AddProduct />
      </div>
      <Table aria-label="product table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn className="text-left" key={column.key}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rowValue}>
          {(item) => (
            <TableRow className="text-left" key={item.key}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableProduct;
