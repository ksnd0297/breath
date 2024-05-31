import fetch from "node-fetch";
import {format, subDays} from "date-fns";
import {wrapApiHandlerWithSentry} from "@sentry/nextjs";

async function handler(request, response) {
  const yesterDay = format(subDays(new Date(), 1), "yyyyMMdd");

  const res = await fetch(`https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=lKvuroHtj4Fh2aq842GxUW57gUmErxNj&data=AP01&searchdate=${yesterDay}`);
  const data = await res.json();
  return response.status(200).json({
    data,
  });
}

export default wrapApiHandlerWithSentry(handler, "/api");
