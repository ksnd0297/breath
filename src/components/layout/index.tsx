import {Layout as _Layout} from "antd";
import {Content} from "antd/es/layout/layout";

import {ReactNode} from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const {children} = props;

  return (
    <_Layout>
      <Header />
      <_Layout style={{backgroundColor: "white"}}>
        <Content>{children}</Content>
      </_Layout>
      <Footer />
    </_Layout>
  );
};

export default Layout;
