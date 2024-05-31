import {ForeignInfo, ForeignResponse} from "@/pages/api/type";
import {chunks} from "@/utils/array";
import {getItem} from "@/utils/localStorage";
import {getKoreanPostPosition} from "@/utils/string";
import {LoadingOutlined} from "@ant-design/icons";
import {useQuery} from "@tanstack/react-query";
import {Col, Divider, Flex, Popconfirm, Popover, Row} from "antd";
import Image from "next/image";
import {useEffect, useState} from "react";
import Info from "./components/Info";

interface Props {
  money: number;
}

const Foreign = (props: Props) => {
  const {money} = props;

  const {data, isFetching} = useQuery<ForeignResponse>({
    queryKey: ["Foregin"],
    queryFn: () =>
      fetch("api").then((res) => {
        return res.json();
      }),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (isFetching) {
    return (
      <Flex className='h-90 p-5' vertical gap={10} justify='center'>
        <LoadingOutlined className='text-2xl' />
      </Flex>
    );
  }

  return (
    <Flex className='h-90 p-5' vertical gap={20} justify='center'>
      <p className='text-2xl font-bold'>외화는 얼마나 벌었을까 ?</p>
      <Row gutter={[20, 20]}>
        {data?.data.map((info, index) => (
          <Info key={index} data={info} money={money} />
        ))}
      </Row>
    </Flex>
  );
};

export default Foreign;
