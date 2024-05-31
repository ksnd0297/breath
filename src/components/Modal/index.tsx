import {SELECT_OPTION} from "@/constant/layout";
import {getItem, setItem} from "@/utils/localStorage";
import {Divider, Flex, InputNumber, Select, Modal as _Modal} from "antd";
import {useRouter} from "next/router";
import {useState} from "react";
import Content from "./components/Content";

interface Props {
  isModalOpen: boolean;
  handleClose: () => void;
}

export interface Info {
  option: string;
  wage: number;
}

export interface Time {
  time: string;
}

const Modal = (props: Props) => {
  const {isModalOpen, handleClose} = props;

  const router = useRouter();

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
    setItem("time", {time: new Date()});

    handleClose();

    router.reload();
  };

  const isDisabled = !option || !wage;

  return (
    <>
      <_Modal
        title='하우 머치?'
        centered
        okText='저장'
        cancelText='취소'
        closable={false}
        open={isModalOpen}
        okButtonProps={{
          disabled: isDisabled,
        }}
        onCancel={info && handleClose}
        onOk={onOk}
        footer={(_, {OkBtn, CancelBtn}) => (
          <Flex justify='center' gap={10}>
            {info ? (
              <>
                <CancelBtn />
                <OkBtn />
              </>
            ) : (
              <OkBtn />
            )}
          </Flex>
        )}
      >
        <Divider />
        <Content option={option} wage={wage} handleChangeOption={onChangeOption} handleChangeWage={onChangeWage} />
        <Divider />
      </_Modal>
    </>
  );
};

export default Modal;