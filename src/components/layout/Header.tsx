import {UserOutlined} from "@ant-design/icons";
import {Flex} from "antd";
import {Header as _Header} from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

interface Props {
    handleOpen: () => void;
}

const Header = (props: Props) => {
    const {handleOpen} = props;

    return (
        <>
            <_Header className='px-2.5 bg-sky-50 h-20'>
                <Flex justify='space-between' align='center' className='w-full h-full'>
                    <Title level={4} className='m-0'>
            숨만 쉬며 얼마 벌었을까?
                    </Title>
                    <UserOutlined className='text-2xl' onClick={handleOpen} />
                </Flex>
            </_Header>
        </>
    );
};

export default Header;
