import { Modal } from "./Modal";
import { LargeProductListItem } from "./products/LargeProductListItem";
import products from "./products/products";

function App() {
  return (
    <>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  );
}

export default App;
