import { Divider } from "antd";
import dynamic from "next/dynamic";
import { Loading } from "./components/Money";
import { useRef, useState } from "react";

const Money = dynamic(() => import("./components/Money"), {
  ssr: false,
  loading: () => <Loading />,
});

const Foreign = dynamic(() => import("./components/Foreign"), {
  ssr: false,
  loading: () => <Loading />,
});

const Work = dynamic(() => import("./components/Work"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  const [, setTick] = useState(0);

  const syncMoney = useRef(0);
  const syncCount = useRef(0);

  const handleSync = () => {
    setTick((prev) => prev + 1);
  };

  const handleSyncMoney = (value: number) => {
    syncMoney.current = value;
  };

  const handleSyncCount = (value: number) => {
    syncCount.current = value;
  };

  return (
    <>
      <Money
        handleSyncMoney={handleSyncMoney}
        handleSyncCount={handleSyncCount}
      />
      <Divider />
      <Foreign money={syncMoney.current} handleSync={handleSync} />
      <Divider />
      <Work count={syncCount.current} handleSync={handleSync} />
    </>
  );
}
