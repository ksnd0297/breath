import {Info, Time} from "@/components/Modal";
import {ForeignResponse} from "@/pages/api/type";
import {getItem} from "@/utils/localStorage";
import {useQuery} from "@tanstack/react-query";
import {Divider, Flex} from "antd";
import {useEffect, useState} from "react";

const Foreign = () => {
  // const {data} = useQuery<ForeignResponse>({
  //   queryKey: [],
  //   queryFn: () =>
  //     fetch("api").then((res) => {
  //       return res.json();
  //     }),
  // });

  // console.log("data : ", data);

  return (
    <Flex className='h-60 p-5' vertical gap={10} justify='center'>
      ABC
    </Flex>
  );
};

export default Foreign;
