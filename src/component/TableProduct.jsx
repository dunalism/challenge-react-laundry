import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

const TableProduct = () => {
  const rows = [
    {
      key: "1",
      product: "Cuci, Kering, Setrika",
      qty: "3kg",
      price: "Rp. 15.000",
      action: "edit hapus",
    },
    {
      key: "2",
      product: "Cuci, Kering, Lipat",
      qty: "3kg",
      price: "Rp. 15.000",
      action: "edit hapus",
    },
    {
      key: "3",
      product: "Paket Setrika",
      qty: "3kg",
      price: "Rp. 15.000",
      action: "edit hapus",
    },
  ];

  const columns = [
    { key: "product", label: "Paket Laundry" },
    { key: "qty", label: "Jumlah" },
    { key: "price", label: "Harga" },
    { key: "action", label: "" },
  ];

  return (
    <div className="card card-bordered">
      <Table aria-label="product table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn className="text-left" key={column.key}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow className="text-left" key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableProduct;
