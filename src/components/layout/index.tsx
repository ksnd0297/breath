import {Divider, Layout as _Layout} from "antd";
import {Content} from "antd/es/layout/layout";

import {ReactNode, useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";

import dynamic from "next/dynamic";
import {getItem} from "@/utils/localStorage";
import {Info} from "../Modal";

const Modal = dynamic(() => import("../Modal"), {
  ssr: false,
});

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const {children} = props;

  const info = getItem<Info>("info");

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!info) setIsModalOpen(true);
  }, [info]);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <_Layout className='bg-sky-50'>
        <Header handleOpen={handleOpen} />
        <Divider className='my-4 mt-0' />
        <_Layout className='bg-sky-50'>
          <Content>{children}</Content>
        </_Layout>
        <Footer />
      </_Layout>
      <Modal isModalOpen={isModalOpen} handleClose={handleClose} />
    </>
  );
};

export default Layout;
