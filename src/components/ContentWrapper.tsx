import { Flex, Typography } from "antd";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    title?: ReactNode | string;
}

const ContentWrapper = (props: Props) => {
    const { children, title } = props;

    return (
        <Flex className="h-90 p-5" vertical gap={20} justify="center">
            {title ? (
                typeof title === "object" ? (
                    title
                ) : (
                    <Typography.Title level={4}>{title}</Typography.Title>
                )
            ) : (
                <></>
            )}
            {children}
        </Flex>
    );
};

export default ContentWrapper;
