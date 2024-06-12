import { Col, Flex, Typography } from "antd";

interface Props {
  title: string;
  sec: number;
  elapsedSec: number;
  postfix: string;
}

const Job = (props: Props) => {
  const { title, sec, elapsedSec, postfix } = props;

  return (
    <Col className="h-24" span={12}>
      <Flex
        className="bg-sky-50 p-2 border-2 border-sky-100 border-8 w-full h-full"
        vertical
      >
        <Typography.Title level={5}>{title}</Typography.Title>
        <Flex className="w-full h-full" justify="center" align="center">
          <Typography.Text strong={true} className="text-base">
            {`${Math.round((elapsedSec / sec) * 100) / 100} ${postfix}`}
          </Typography.Text>
        </Flex>
      </Flex>
    </Col>
  );
};

export default Job;
