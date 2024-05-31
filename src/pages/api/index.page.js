import fetch from "node-fetch";
import {format, subDays} from "date-fns";
import {wrapApiHandlerWithSentry} from "@sentry/nextjs";

async function handler(request, response) {
  const yesterDay = format(subDays(new Date(), 1), "yyyyMMdd");

  const res = await fetch(`https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${process.env.FINANCIAL_AUTH_TOKEN}&data=AP01&searchdate=${yesterDay}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  try {
    return response.status(200).json({
      data,
    });
  } catch (e) {
    return response.status(500).json({error: error});
  }
}

export default wrapApiHandlerWithSentry(handler, "/api");
