import {Info, Time} from "@/components/Modal";
import {getItem} from "@/utils/localStorage";
import {Divider, Flex} from "antd";
import {useEffect, useState} from "react";

const Money = () => {
  const [count, setCount] = useState(0);
  const [money, setMoney] = useState(0);

  const info = getItem<Info>("info");
  const time = getItem<Time>("time");

  useEffect(() => {
    if (!time || !info) return;

    const elapsedMSec = new Date().getTime() - new Date(time.time).getTime();

    // 경과한 초
    const elapsedSec = elapsedMSec / 1000;

    // 4초 당 1번 호흡
    setCount(Math.round(elapsedSec / 4));
  }, [time, info]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!info) return;
    const {option, wage} = info;

    const elapsedSec = count * 4;
    let wagePerSec = 0;

    if (option === "daily") {
      wagePerSec = Math.round(wage / 86400);
    } else if (option === "weekly") {
      wagePerSec = Math.round(wage / 604800);
    } else if (option === "monthly") {
      wagePerSec = Math.round(wage / 2.628e6);
    } else if (option === "yearly") {
      wagePerSec = Math.round(wage / 3.154e7);
    }

    setMoney(elapsedSec * wagePerSec);
  }, [count]);

  return (
    <Flex style={{height: 200, padding: 20}} vertical gap={10} justify='center'>
      <p style={{fontSize: 24, fontWeight: "bold"}}>숨만쉬며 번 돈</p>
      <p
        style={{
          fontSize: 15,
        }}
      >
        당신은 지금까지{" "}
        <span
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {count}
        </span>{" "}
        번 숨을 쉬었으며
      </p>
      <p
        style={{
          fontSize: 15,
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {money.toLocaleString()}
        </span>{" "}
        원을 벌었습니다.
      </p>
    </Flex>
  );
};

export default Money;
