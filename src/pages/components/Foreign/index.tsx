import { Flex, Row, Tooltip } from 'antd';
import Info from './components/Info';
import useForeign from './hooks/useForeign';
import Loading from '@/components/Loading';
import ContentWrapper from '@/components/ContentWrapper';
import { SyncOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

interface Props {
    handleSync: () => void;
    money: number;
}

const Foreign = (props: Props) => {
    const { money, handleSync } = props;

    const { data, isFetching } = useForeign();

    const [open, setOpen] = useState(false);

    const InfoList = () =>
        data?.map((info, index) => <Info key={`${index}-${info.cur_nm}`} data={info} money={money} />);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOpen(false);
        }, 3000);

        setOpen(true);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const onClick = () => {
        setOpen(false);
        handleSync();
    };

    return (
        <ContentWrapper
            title={
                <Flex justify="space-between">
                    <p className="text-xl font-bold">외화는 얼마나 벌었을까 ?</p>
                    <Tooltip title={'현재의 정보로 갱신해보세요!'} open={open} placement="topLeft">
                        <SyncOutlined onClick={onClick} />
                    </Tooltip>
                </Flex>
            }
        >
            {isFetching ? (
                <Loading />
            ) : (
                <>
                    {!data || data.length === 0 ? (
                        <Empty />
                    ) : (
                        <Row gutter={[20, 20]}>
                            <InfoList />
                        </Row>
                    )}
                </>
            )}
        </ContentWrapper>
    );
};

export default Foreign;

const Empty = () => {
    return <p>찾으려는 정보가 없습니다.</p>;
};
