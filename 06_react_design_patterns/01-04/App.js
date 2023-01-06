import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { RegularList } from "./RegularList";
import people from "./people/people";
import products from "./products/products";

function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
    </>
  );
}

export default App;
