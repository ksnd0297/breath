import { Row } from "antd";
import { JOB_LIST } from "./constant/job";
import Job from "./components/Job";
import ContentWrapper from "@/components/ContentWrapper";

interface Props {
    count: number;
}

const Work = (props: Props) => {
    const { count } = props;

    const elapsedSec = count * 4;

    return (
        <ContentWrapper title="숨 쉬는동안 다른일을 했다면 ?">
            <Row justify="space-around" gutter={[16, 16]}>
                {JOB_LIST.map((work, index) => (
                    <Job
                        key={index}
                        title={work.title}
                        sec={work.sec}
                        elapsedSec={elapsedSec}
                        postfix={work.postfix}
                    />
                ))}
            </Row>
        </ContentWrapper>
    );
};

export default Work;
