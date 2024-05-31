import {ForeignInfo} from "@/pages/api/type";
import {getKoreanPostPosition} from "@/utils/string";
import {Col, Flex, Popover} from "antd";
import Image from "next/image";

interface Props {
  data: ForeignInfo;
  money: number;
}

const Info = (props: Props) => {
  const {data, money} = props;

  const {cur_unit, cur_nm, deal_bas_r} = data;

  const url = `/flag/${cur_unit}.svg`;

  const foreignMoney = Math.round(money / Number(deal_bas_r));

  const title = `${cur_nm}${getKoreanPostPosition(cur_nm ?? "")} 총 얼마 벌었을까 ?`;

  const content = (
    <>
      숨만쉬며 <span className='font-bold'>{`${foreignMoney.toLocaleString()} ${cur_unit}`}</span> 을 벌었어요
    </>
  );

  return (
    <Col span={12}>
      <Popover title={title} content={content} placement='topLeft'>
        <Flex gap={10}>
          <Image src={url} alt={cur_nm ?? ""} width={18} height={18} style={{width: 18, height: 18}} />
          <p className='font-bold'>{cur_nm}</p>
        </Flex>
      </Popover>
    </Col>
  );
};

export default Info;
