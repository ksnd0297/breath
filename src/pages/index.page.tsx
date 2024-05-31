import {Divider} from "antd";
import Foreign from "./components/Foreign";
import Money from "./components/Money";
import {useState} from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [money, setMoney] = useState(0);

  return (
    <>
      <Money money={money} setMoney={setMoney} count={count} setCount={setCount} />
      <Divider />
      <Foreign money={money} />
      <Divider />
    </>
  );
}
