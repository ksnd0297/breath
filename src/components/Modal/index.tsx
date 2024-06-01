import {getItem, setItem} from "@/utils/localStorage";
import {Divider, Flex, Modal as _Modal} from "antd";
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

export interface Name {
    name: string;
}

const Modal = (props: Props) => {
    const {isModalOpen, handleClose} = props;

    const router = useRouter();

    const info = getItem<Info>("info");
    const defaultName = getItem<Name>("name");

    const [option, setOption] = useState(info?.option);
    const [wage, setWage] = useState<number | null>(info?.wage || null);
    const [name, setName] = useState(defaultName?.name || "");

    const onChangeOption = (value: string) => {
        setOption(value);
    };

    const onChangeWage = (value: number | null) => {
        setWage(value);
    };

    const onChangeName = (value: string) => {
        console.log('value :',value)
        setName(value);
    };

    const onOk = () => {
        setItem("info", {option, wage});
        setItem("time", {time: new Date()});
        setItem("name", {name});

        handleClose();
        router.reload();
    };

    const isDisabled = !option || !wage || !name;

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
                <Content option={option} wage={wage} name={name} handleChangeOption={onChangeOption} handleChangeWage={onChangeWage} handleChangeName={onChangeName} />
                <Divider />
            </_Modal>
        </>
    );
};

export default Modal;
