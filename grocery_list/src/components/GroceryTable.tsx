interface ItemData {
  id: number;
  name: string;
  amount: number;
  category: string;
}

interface Props {
  items: Array<ItemData>;
}

function GroceryTable({ items }: Props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: ItemData) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>${item.amount}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GroceryTable;
