import {format} from "date-fns";
import { wrapApiHandlerWithSentry} from "@sentry/nextjs";
import https from "https";
import {NextApiRequest, NextApiResponse} from "next";
import fetch from "node-fetch";

async function handler(req: NextApiRequest, response: NextApiResponse) {
    const today = format(new Date(), "yyyy-MM-dd");

    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    });

    const res = await fetch(`https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${process.env.FINANCIAL_AUTH_TOKEN}&data=AP01&searchdate=${today}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        agent: httpsAgent,
    });

    const data = await res.json();

    try {
        return response.json({
            data,
        });
    } catch (error) {
        return response.json({error: error});
    }
}

export default wrapApiHandlerWithSentry(handler, "/api");
