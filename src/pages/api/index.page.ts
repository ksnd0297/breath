import { isSameDay, isWeekend, subDays } from 'date-fns';

import { NextApiRequest, NextApiResponse } from 'next';
import getRestDeInfo from './utils/getRestInfo';
import getExchange from './utils/getExchange';

async function handler(req: NextApiRequest, response: NextApiResponse) {
    const restInfo = await getRestDeInfo();

    let searchDate = new Date();

    while (restInfo.some(v => isSameDay(new Date(v.locdate), searchDate)) || isWeekend(searchDate)) {
        searchDate = subDays(searchDate, 1);
    }

    const data = await getExchange({ searchDate });

    try {
        return response.json(data);
    } catch (error) {
        return response.json({ error: error });
    }
}

export default handler;
