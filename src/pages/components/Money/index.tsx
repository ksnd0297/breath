import ContentWrapper from "@/components/ContentWrapper";
import {Info, Name, Time} from "@/components/Modal";
import {SELECT_OPTION_ENUM} from "@/constant/layout";
import {SELECT_HOUR_TO_SEC} from "@/constant/time";
import {getItem} from "@/utils/localStorage";
import {LoadingOutlined} from "@ant-design/icons";
import {Dispatch, SetStateAction, useEffect} from "react";

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
    const name = getItem<Name>("name");

    useEffect(() => {
        if (!time) return;

        const elapsedMSec = new Date().getTime() - new Date(time.time).getTime();

        // 경과한 초
        const elapsedSec = elapsedMSec / 1000;

        // 4초 당 1번 호흡
        setCount(Math.round(elapsedSec / 4));

        const interval = setInterval(() => {
            setCount((prev: number) => prev + 1);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [time]);

    useEffect(() => {
        if (!info) return;
        const {option, wage} = info;

        

        const elapsedSec = count * 4;
        let wagePerSec = 0;
        if (option === SELECT_OPTION_ENUM.HOURLY) {
            wagePerSec = wage / SELECT_HOUR_TO_SEC[SELECT_OPTION_ENUM.HOURLY];
        } else if (option === SELECT_OPTION_ENUM.DAILY) {
            wagePerSec = wage / SELECT_HOUR_TO_SEC[SELECT_OPTION_ENUM.DAILY];
        } else if (option === SELECT_OPTION_ENUM.WEEKLY) {
            wagePerSec = wage / SELECT_HOUR_TO_SEC[SELECT_OPTION_ENUM.WEEKLY];
        } else if (option === SELECT_OPTION_ENUM.MONTHLY) {
            wagePerSec = wage / SELECT_HOUR_TO_SEC[SELECT_OPTION_ENUM.MONTHLY];
        } else if (option === SELECT_OPTION_ENUM.YEARLY) {
            wagePerSec = wage / SELECT_HOUR_TO_SEC[SELECT_OPTION_ENUM.YEARLY];
        }


        setMoney(+(elapsedSec * wagePerSec).toFixed(2));
    }, [count]);

    return (
        <ContentWrapper title={`${name?.name ? `${name?.name} 님이` : ""} 숨만쉬며 번 돈`}> 
            <p>
                당신은 지금까지 <span className='font-bold'>{count}</span> 번 숨을 쉬었으며
            </p>
            <p>
                <span className='font-bold'>{money.toLocaleString()}</span> 원을 벌었어요
            </p>
        </ContentWrapper>
    );
};

export default Money;

export const Loading = () => (
    <ContentWrapper title="숨만쉬며 번 돈">
        <LoadingOutlined className='text-xl' />
    </ContentWrapper>
);
