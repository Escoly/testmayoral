import itemsList from "../bdd/itemsList.json";

export default function GetProductsByQuery(query?:string) {
  if (query) {
    const filteredList = itemsList.filter((item) => item.title.toLowerCase().includes(query)
    );
    return filteredList;
  } else {
    return itemsList;
  }
}
