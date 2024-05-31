import {SELECT_OPTION} from "@/constant/layout";
import {Flex, InputNumber, Select} from "antd";

interface Props {
  option?: string;
  wage?: number | null;
  handleChangeOption?: (value: string) => void;
  handleChangeWage?: (value: number | null) => void;
}

const Content = (props: Props) => {
  const {option, wage, handleChangeOption, handleChangeWage} = props;

  return (
    <Flex vertical gap={20}>
      <p>당신이 버는 금액을 입력해주세요</p>
      <Flex gap={10}>
        <Select status={option ? "" : "error"} options={SELECT_OPTION} value={option} placeholder='선택' onChange={handleChangeOption} />
        <InputNumber<number>
          style={{
            width: "200px",
          }}
          status={wage ? "" : "error"}
          value={wage}
          formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          parser={(value) => value?.replace(/\$\s?|(,*)/g, "") as unknown as number}
          onChange={handleChangeWage}
        />
      </Flex>
    </Flex>
  );
};

export default Content;
