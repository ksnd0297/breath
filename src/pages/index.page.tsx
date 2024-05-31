import {Divider} from "antd";
import Foreign from "./components/Foreign";
import {useState} from "react";
import dynamic from "next/dynamic";
import {Loading} from "./components/Money";

const Money = dynamic(() => import("./components/Money"), {
  ssr: false,
  loading: () => <Loading />,
});

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
