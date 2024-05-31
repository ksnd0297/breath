import {Info, Time} from "@/components/Modal";
import {getItem} from "@/utils/localStorage";
import {Divider, Flex} from "antd";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

interface Props {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  money: number;
  setMoney: Dispatch<SetStateAction<number>>;
}

const Money = (props: Props) => {
  const {count, setCount, money, setMoney} = props;

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
      setCount((prev: number) => prev + 1);
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
    <Flex className='h-60 p-5' vertical gap={20} justify='center'>
      <p className='text-2xl font-bold'>숨만쉬며 번 돈</p>
      <p className='text-base'>
        당신은 지금까지 <span className='text-xl font-bold'>{count}</span> 번 숨을 쉬었으며
      </p>
      <p className='text-base'>
        <span className='text-2xl font-bold'>{money.toLocaleString()}</span> 원을 벌었어요
      </p>
    </Flex>
  );
};

export default Money;
