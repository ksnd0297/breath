import { Flex, Typography } from 'antd';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    height?: string;
    padding?: string;
    title?: ReactNode | string;
    justify?: string;
}

const ContentWrapper = (props: Props) => {
    const { children, height = 'h-90', padding = 'p-5', title, justify = 'center' } = props;

    return (
        <Flex className={clsx(height, padding)} vertical gap={20} justify={justify}>
            {title ? typeof title === 'object' ? title : <Typography.Title level={4}>{title}</Typography.Title> : <></>}
            {children}
        </Flex>
    );
};

export default ContentWrapper;
