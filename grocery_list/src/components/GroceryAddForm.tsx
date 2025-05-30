import { useRef } from "react";

interface ItemData {
  id: number;
  name: string;
  amount: number;
  category: string;
}

interface Props {
  items: Array<ItemData>;
  onAdd: (data: ItemData) => void;
}

function GroceryAddForm({ items, onAdd }: Props) {
  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = {
      id: items.length + 1,
      name: nameRef.current ? nameRef.current.value : "",
      amount: amountRef.current ? parseInt(amountRef.current.value) : 0,
      category: categoryRef.current ? categoryRef.current.value : "",
    };
    onAdd(data);
    if (nameRef.current) {
      nameRef.current.value = "";
    }

    if (amountRef.current) {
      amountRef.current.value = "";
    }

    if (categoryRef.current) {
      categoryRef.current.value = "";
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name_input"
        ref={nameRef}
        className="form-control"
        type="text"
        placeholder="Name"
        required
      />
      <br />
      <input
        id="amount_input"
        ref={amountRef}
        className="form-control"
        type="number"
        placeholder="Amount"
        required
      />
      <br />
      <select
        id="category_select"
        ref={categoryRef}
        className="form-control"
        name="category"
        required
      >
        <option value="">--Select Category--</option>
        <option value="one">one</option>
        <option value="two">two</option>
        <option value="three">three</option>
        <option value="four">four</option>
        <option value="five">five</option>
      </select>
      <br />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
}

export default GroceryAddForm;
