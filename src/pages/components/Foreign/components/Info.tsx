import {ForeignInfo} from "@/pages/api/type";
import {getKoreanPostPosition} from "@/utils/string";
import {LoadingOutlined} from "@ant-design/icons";
import {Col, Flex, Popover} from "antd";
import Image from "next/image";

interface Props {
    data: ForeignInfo;
    money: number;
}

const Info = (props: Props) => {
    const {data, money} = props;

    const {cur_unit, cur_nm, deal_bas_r} = data;

    const url = `${process.env.NEXT_PUBLIC_FLAG_SVG_HOST}/flag/${cur_unit}.svg`;

    const title = `${cur_nm}${getKoreanPostPosition(cur_nm ?? "")} 총 얼마 벌었을까 ?`;

    const content = () => {
        if (!deal_bas_r) return <LoadingOutlined />;

        let foreignMoney = 0;

        foreignMoney = Math.round((money / +deal_bas_r.replace(/,/g, "")) * 100) / 100;

        if (cur_unit?.includes("(100)")) foreignMoney *= 100;

        return (
            <>
        숨만쉬며 <span className='font-bold'>{`${foreignMoney.toLocaleString()} ${cur_unit}`}</span> 을 벌었어요
            </>
        );
    };

    return (
        <Col span={12}>
            <Popover title={title} content={content} placement='topLeft'>
                <Flex gap={10}>
                    <Image src={url} alt={cur_nm ?? ""} width={18} height={18} style={{width: 18, height: 18}} loading='eager' />
                    <p className='text-xs font-bold'>{cur_nm}</p>
                </Flex>
            </Popover>
        </Col>
    );
};

export default Info;
