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
      <_Layout className='bg-sky-50 w-full h-full'>
        <Header handleOpen={handleOpen} />
        <Divider />
        <_Layout className='bg-sky-50 w-full h-full'>
          <Content>{children}</Content>
        </_Layout>
        <Footer />
      </_Layout>
      <Modal isModalOpen={isModalOpen} handleClose={handleClose} />
    </>
  );
};

export default Layout;
