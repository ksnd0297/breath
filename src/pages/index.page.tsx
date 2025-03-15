import { Divider, message } from 'antd';
import dynamic from 'next/dynamic';
import { Loading } from './components/Money';
import { useEffect, useRef, useState } from 'react';
import Work from './components/Work';

const Money = dynamic(() => import('./components/Money'), {
    ssr: false,
    loading: () => <Loading />,
});

const Foreign = dynamic(() => import('./components/Foreign'), {
    ssr: false,
    loading: () => <Loading />,
});

export default function Home() {
    const [, setTick] = useState(0);

    const syncMoney = useRef(0);
    const syncCount = useRef(0);

    const [messageApi, contextHolder] = message.useMessage();

    const handleSync = () => {
        messageApi.open({
            type: 'success',
            content: '갱신 완료',
        });

        setTick(prev => prev + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleSync();
        }, 10000);

        return () => {
            clearTimeout(interval);
        };
    }, []);

    const handleSyncMoney = (value: number) => {
        syncMoney.current = value;
    };

    const handleSyncCount = (value: number) => {
        syncCount.current = value;
    };

    return (
        <>
            {contextHolder}
            <Money handleSyncMoney={handleSyncMoney} handleSyncCount={handleSyncCount} />
            <Divider />
            <Foreign money={syncMoney.current} handleSync={handleSync} />
            <Divider />
            <Work count={syncCount.current} handleSync={handleSync} />
        </>
    );
}
