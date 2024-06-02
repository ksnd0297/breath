import { SELECT_OPTION } from "@/constant/layout";
import { Flex, Input, InputNumber, Select } from "antd";

interface Props {
    option?: string;
    wage?: number | null;
    name?: string;
    handleChangeOption?: (value: string) => void;
    handleChangeWage?: (value: number | null) => void;
    handleChangeName?: (value: string) => void;
}

const Content = (props: Props) => {
    const {
        option,
        wage,
        name,
        handleChangeName,
        handleChangeOption,
        handleChangeWage,
    } = props;

    return (
        <Flex vertical gap={30}>
            <p className="font-bold">당신이 버는 금액을 입력해주세요</p>
            <Flex gap={20} vertical>
                <Flex gap={10}>
                    <Select
                        style={{ fontWeight: "bold" }}
                        status={option ? "" : "error"}
                        options={SELECT_OPTION}
                        value={option}
                        placeholder="선택"
                        onChange={handleChangeOption}
                    />
                    <InputNumber<number>
                        className="w-52"
                        status={wage ? "" : "error"}
                        value={wage}
                        formatter={(value) =>
                            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                        parser={(value) =>
                            value?.replace(/\$\s?|(,*)/g, "") as unknown as number
                        }
                        placeholder="금액을 입력해주세요"
                        onChange={handleChangeWage}
                    />
                </Flex>
                <Input
                    className="w-64"
                    status={name ? "" : "error"}
                    placeholder="이름을 입력해 주세요"
                    value={name}
                    onChange={(event) => handleChangeName?.(event.target.value)}
                />
            </Flex>
        </Flex>
    );
};

export default Content;
