interface RestDeInfoResponse {
    response: Response;
}

interface Response {
    header: Header;
    body: Body;
}

interface Body {
    items: Items;
    numOfRows: string;
    pageNo: string;
    totalCount: string;
}

interface Items {
    item: Item[];
}

interface Item {
    dateKind: string;
    dateName: string;
    isHoliday: string;
    locdate: string;
    seq: string;
}

interface Header {
    resultCode: string;
    resultMsg: string;
}

const getRestDeInfo = async () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();

    const [prevMonthRestDeInfoResponse, nowMonthRestDeInfoResponse] = await Promise.all([
        fetch(
            `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?serviceKey=QBwEicFyLk1BClr3wuUBSJVUEd5fwJjjt4yk7%2FFfyQ6ZaDjZlTXR0ygx9BTUUJi6PEsdOfKw%2BenxTN3XmSbkMw%3D%3D&solYear=${year}&solMonth=${month - 1}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
        ),
        fetch(
            `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?serviceKey=QBwEicFyLk1BClr3wuUBSJVUEd5fwJjjt4yk7%2FFfyQ6ZaDjZlTXR0ygx9BTUUJi6PEsdOfKw%2BenxTN3XmSbkMw%3D%3D&solYear=${year}&solMonth=${month}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
        ),
    ]);

    const prevMonthRestInfo = (await prevMonthRestDeInfoResponse.json()) as RestDeInfoResponse;
    const nowMonthRestInfo = (await nowMonthRestDeInfoResponse.json()) as RestDeInfoResponse;

    const prevMonthRestInfoArray = Array.isArray(prevMonthRestInfo.response.body.items.item)
        ? prevMonthRestInfo.response.body.items.item
        : [prevMonthRestInfo.response.body.items.item];
    const nowMonthRestInfoArray = Array.isArray(nowMonthRestInfo.response.body.items.item)
        ? nowMonthRestInfo.response.body.items.item
        : [nowMonthRestInfo.response.body.items.item];

    const restArray = [...prevMonthRestInfoArray, ...nowMonthRestInfoArray].filter(v => !!v);

    return restArray;
};

export default getRestDeInfo;
