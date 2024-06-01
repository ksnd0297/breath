import { SyncOutlined} from "@ant-design/icons";
import {Flex, Row} from "antd";
import Info from "./components/Info";
import useForeign from "./hooks/useForeign";
import Loading from "@/components/Loading";
import Empty from "@/components/Empty";
import { isWeekend } from "date-fns";

interface Props {
    money: number;
}

const Foreign = (props: Props) => {
    const {money} = props;

    const {data, isFetching, refetch: foreignRefetch} = useForeign();

    const InfoList = () => data?.data.map((info, index) => (
        <Info key={`${index}-${info.cur_nm}`} data={info} money={money} />
    ))

    const refetch = () => {
        if(isWeekend(new Date())) return;
        foreignRefetch();
    }

    return (
        <Flex className='h-90 p-5' vertical gap={20} justify='center'>
            <Flex justify="space-between">
                <p className='text-xl font-bold'>외화는 얼마나 벌었을까 ?</p>
                <SyncOutlined className='text-base' onClick={refetch}/>
            </Flex>
            {isFetching ? <Loading /> : <Row gutter={[20, 20]}>
                {data?.data.length === 0 ? <Empty /> : <InfoList />}
                
            </Row>}
        </Flex>
    );
};

export default Foreign;

