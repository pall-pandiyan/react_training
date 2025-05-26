import items from "../data/items";

function GroceryTable() {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>${item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default GroceryTable;
