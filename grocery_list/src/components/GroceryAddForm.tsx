function GroceryAddForm() {
  return (
    <form>
      <input className="form-control" type="text" placeholder="Name" />
      <input className="form-control" type="text" placeholder="Amount" />
      <select className="form-control" name="category" id="">
        <option value="one">one</option>
        <option value="two">two</option>
        <option value="three">three</option>
        <option value="four">four</option>
        <option value="five">five</option>
      </select>
    </form>
  );
}

export default GroceryAddForm;
