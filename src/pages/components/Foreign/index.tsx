import { Flex, Row } from "antd";
import Info from "./components/Info";
import useForeign from "./hooks/useForeign";
import Loading from "@/components/Loading";
import ContentWrapper from "@/components/ContentWrapper";

interface Props {
  money: number;
}

const Foreign = (props: Props) => {
  const { money } = props;

  const { data, isFetching } = useForeign();

  const InfoList = () =>
    data?.data.map((info, index) => (
      <Info key={`${index}-${info.cur_nm}`} data={info} money={money} />
    ));

  return (
    <ContentWrapper
      title={
        <Flex justify="space-between">
          <p className="text-xl font-bold">외화는 얼마나 벌었을까 ?</p>
        </Flex>
      }
    >
      {isFetching ? (
        <Loading />
      ) : (
        <>
          {!data?.data || data?.data.length === 0 ? (
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
