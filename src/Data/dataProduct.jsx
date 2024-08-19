const rows = [
  {
    key: "1",
    product: "Cuci, Kering, Setrika",
    qty: "3kg",
    price: "Rp. 15.000",
  },
  {
    key: "2",
    product: "Cuci, Kering, Lipat",
    qty: "3kg",
    price: "Rp. 15.000",
  },
  {
    key: "3",
    product: "Paket Setrika",
    qty: "3kg",
    price: "Rp. 15.000",
  },
];

class product {
  constructor(key, product, qty, price) {
    this.key = key;
    this.product = product;
    this.qty = qty;
    this.price = price;
  }
}

const productDummy = new product(4, "makanan", "5kg", "Rp. 15.000");
const productDummy2 = new product(5, "apadonglah", "5kg", "Rp. 14.000");

const addProduct = () => {
  // eslint-disable-next-line no-undef
  setrowValue();
};

const columns = [
  { key: "product", label: "Paket Laundry" },
  { key: "qty", label: "Jumlah" },
  { key: "price", label: "Harga" },
  { key: "action", label: "Opsi" },
];

export { rows, columns, productDummy2, productDummy, addProduct };
