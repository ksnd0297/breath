import { Flex, Row } from 'antd';
import { JOB_LIST } from './constant/job';
import Job from './components/Job';
import ContentWrapper from '@/components/ContentWrapper';
import { SyncOutlined } from '@ant-design/icons';

interface Props {
    count: number;
    handleSync: () => void;
}

const Work = (props: Props) => {
    const { count, handleSync } = props;

    const elapsedSec = count * 4;

    return (
        <ContentWrapper
            height="h-102"
            justify="normal"
            title={
                <Flex justify="space-between">
                    <p className="text-xl font-bold">숨 쉬는동안 다른일을 했다면 ?</p>
                    <SyncOutlined onClick={handleSync} />
                </Flex>
            }
        >
            <Row justify="space-around" gutter={[16, 16]}>
                {JOB_LIST.map((work, index) => (
                    <Job key={index} title={work.title} sec={work.sec} elapsedSec={elapsedSec} postfix={work.postfix} />
                ))}
            </Row>
        </ContentWrapper>
    );
};

export default Work;
