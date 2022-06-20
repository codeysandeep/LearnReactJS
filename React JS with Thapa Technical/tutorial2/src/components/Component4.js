const fruits = [
  {
    id: 1,
    name: "Apple",
    price: "$10",
  },
  {
    id: 2,
    name: "Banana",
    price: "$20",
  },
  {
    id: 3,
    name: "Coconut",
    price: "$30",
  },
  {
    id: 4,
    name: "Date",
    price: "$40",
  },
];

const List = (props) => {
  return <p>{`${props.name} ( ${props.price} )`}</p>;
};

export { fruits, List };
