import GroceryTable from "../components/GroceryTable";
import GroceryAddForm from "../components/GroceryAddForm";

function Grocery() {
  return (
    <>
      <div className="mb-3 w-50">
        <GroceryAddForm />
      </div>

      <div className="mb-3 w-50" style={{ border: "solid" }}>
        <GroceryTable />
      </div>
    </>
  );
}
export default Grocery;
