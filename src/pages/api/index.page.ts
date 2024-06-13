import { wrapApiHandlerWithSentry } from '@sentry/nextjs';

import { NextApiRequest, NextApiResponse } from 'next';
import getExchange from './utils/getExchange';

async function handler(req: NextApiRequest, response: NextApiResponse) {
    const searchDate = new Date();

    const data = await getExchange({ searchDate });

    try {
        return response.json(data);
    } catch (error) {
        return response.json({ error: error });
    }
}

export default wrapApiHandlerWithSentry(handler, '/api');
