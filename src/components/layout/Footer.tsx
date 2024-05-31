import {UpOutlined} from "@ant-design/icons";
import {FloatButton} from "antd";

const Footer = () => {
    const onClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return <FloatButton className='right-6 bottom-5' icon={<UpOutlined />} onClick={onClick} />;
};

export default Footer;
