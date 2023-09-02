import { AppBar, Sec2, Sec8 } from "../components/home_page_components";

export function Cart() {
  const cartitemsss = [
    "kdnekjdhejnhdjendde",
    "kdnekdededde",
    "kdnekkdekdekdhekdde",
    "kdnekde",
    "kdnekde",
  ];
  return (
    <>
      <AppBar />
      <Sec2 />
      <CartItems items={cartitemsss} />

      <Sec8 />
    </>
  );
}

function CartItems(props) {
  return (
    <>
      <div style={{ fontSize: 20 }}>Cart Items ({props.items.length}) </div>
      {props.items.map((e) => (
        <div>{e}</div>
      ))}
    </>
  );
}
