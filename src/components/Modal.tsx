import {SELECT_OPTION} from "@/constant/layout";
import {getItem, setItem} from "@/utils/localStorage";
import {Divider, Flex, InputNumber, Select, Modal as _Modal} from "antd";
import {useState} from "react";

interface Props {
  isModalOpen: boolean;
  handleClose: () => void;
}

export interface Info {
  option: string;
  wage: number;
}

const Modal = (props: Props) => {
  const {isModalOpen, handleClose} = props;

  const info = getItem<Info>("info");

  const [option, setOption] = useState(info?.option);
  const [wage, setWage] = useState<number | null>(info?.wage || null);

  const onChangeOption = (value: string) => {
    setOption(value);
  };

  const onChangeWage = (value: number | null) => {
    setWage(value);
  };

  const onOk = () => {
    setItem("info", {option, wage});

    handleClose();
  };

  const isDisabled = !option || !wage;

  return (
    <>
      <_Modal
        title='하우 머치?'
        centered
        okText='저장'
        open={isModalOpen}
        closable={false}
        okButtonProps={{
          disabled: isDisabled,
        }}
        onOk={onOk}
        footer={(_, {OkBtn}) => (
          <Flex justify='center'>
            <OkBtn />
          </Flex>
        )}
      >
        <Divider />
        <Flex vertical gap={20}>
          <p>당신이 버는 금액을 입력해주세요</p>
          <Flex gap={10}>
            <Select status={option ? "" : "error"} options={SELECT_OPTION} value={option} placeholder='선택' onChange={onChangeOption} />
            <InputNumber<number>
              style={{
                width: "200px",
              }}
              status={wage ? "" : "error"}
              value={wage}
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              parser={(value) => value?.replace(/\$\s?|(,*)/g, "") as unknown as number}
              onChange={onChangeWage}
            />
          </Flex>
        </Flex>
        <Divider />
      </_Modal>
    </>
  );
};

export default Modal;
