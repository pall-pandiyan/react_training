import GroceryTable from "../components/GroceryTable";
import GroceryAddForm from "../components/GroceryAddForm";
import { useState } from "react";

interface ItemData {
  id: number;
  name: string;
  amount: number;
  category: string;
}

function Grocery() {
  const [groceries, setGroceries] = useState<Array<ItemData>>([]);
  // const [selectedGroceries, setSelectedGroceries] = useState([]);

  // setSelectedGroceries()
  return (
    <>
      <div className="m-3">
        <div className="mb-3 w-50 p-3" style={{ border: "solid" }}>
          <GroceryAddForm
            items={groceries}
            onAdd={(item) => setGroceries([...groceries, item])}
          />
        </div>

        <div className="mb-3 w-50" style={{ border: "solid" }}>
          <GroceryTable items={groceries} />
        </div>
      </div>
    </>
  );
}
export default Grocery;
