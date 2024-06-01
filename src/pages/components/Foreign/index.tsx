import { SyncOutlined} from "@ant-design/icons";
import {Flex, Row} from "antd";
import Info from "./components/Info";
import useForeign from "./hooks/useForeign";
import Loading from "@/components/Loading";
import Empty from "@/components/Empty";
import { isWeekend } from "date-fns";
import ContentWrapper from "@/components/ContentWrapper";
import { useMemo } from "react";

interface Props {
    money: number;
}

const Foreign = (props: Props) => {
    const {money} = props;

    const {data, isFetching, refetch: foreignRefetch} = useForeign();

    const isDisabled = useMemo(() => isWeekend(new Date()),[])

    const InfoList = () => data?.data.map((info, index) => (
        <Info key={`${index}-${info.cur_nm}`} data={info} money={money} />
    ))

    const refetch = () => {
        if(isDisabled) return;
        foreignRefetch();
    }


    return (
        <ContentWrapper title={<Flex justify="space-between">
            <p className='text-xl font-bold'>외화는 얼마나 벌었을까 ?</p>
            <SyncOutlined className='text-base' onClick={refetch}/>
        </Flex>}>
            {isFetching ? <Loading /> : 
                <>
                    {!data?.data || data?.data.length === 0 ? <Empty /> : 
                        <Row gutter={[20, 20]}>
                            <InfoList />
                        </Row>}
                </>
            }
        </ContentWrapper>
    );
};

export default Foreign;

