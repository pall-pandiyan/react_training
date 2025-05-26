import GroceryTable from "../components/GroceryTable";
import GroceryAddForm from "../components/GroceryAddForm";

function Grocery() {
  return (
    <>
      <div className="m-3">
        <div className="mb-3 w-50 p-3" style={{ border: "solid" }}>
          <GroceryAddForm onAdd={(data) => console.log(data)} />
        </div>

        <div className="mb-3 w-50" style={{ border: "solid" }}>
          <GroceryTable />
        </div>
      </div>
    </>
  );
}
export default Grocery;
