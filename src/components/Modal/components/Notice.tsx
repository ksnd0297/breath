import { Flex } from "antd";

const Notice = () => {
    return (
        <Flex className="bg-slate-100 p-3 text-xs text-slate-400">
            <ul className="flex flex-col gap-1">
                <li>기재된 정보는 별도로 활용되지 않습니다.</li>
                <li>저장 시 정확한 측정을 위해 저장된 데이터는 초기화 됩니다.</li>
                <li>데이터를 모두 채우기 전에는 버튼이 활성화되지 않습니다.</li>
            </ul>
        </Flex>
    )
}

export default Notice;