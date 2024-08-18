import { Input } from "@nextui-org/input";
import { AddIcon } from "../assets/EditIcon";

const AddProduct = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Tambah Paket <AddIcon />
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Detail Paket Laundry</h3>
          <Input
            label="Nama"
            description="Nama paket laundry"
            labelPlacement="outside"
          />
          <Input
            label="Jumlah"
            description="Detail kuantitas paket laundry"
            labelPlacement="outside"
          />
          <Input
            type="number"
            label="Harga"
            description="Hanya masukan angka"
            labelPlacement="outside"
          />

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Tambahkan</button>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Tutup</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddProduct;
