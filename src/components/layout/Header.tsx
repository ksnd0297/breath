import {UserOutlined} from "@ant-design/icons";
import {Divider, Flex} from "antd";
import {Header as _Header} from "antd/es/layout/layout";

interface Props {
  handleOpen: () => void;
}

const Header = (props: Props) => {
  const {handleOpen} = props;

  return (
    <>
      <_Header
        style={{
          padding: "10px 20px",
          backgroundColor: "white",
        }}
      >
        <Flex
          justify='flex-end'
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <UserOutlined
            style={{
              fontSize: "24px",
            }}
            onClick={handleOpen}
          />
        </Flex>
      </_Header>
    </>
  );
};

export default Header;
