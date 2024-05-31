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
      <_Header className='px-2.5 py-5 bg-sky-50'>
        <Flex justify='flex-end' className='w-full h-full'>
          <UserOutlined className='text-2xl' onClick={handleOpen} />
        </Flex>
      </_Header>
    </>
  );
};

export default Header;
