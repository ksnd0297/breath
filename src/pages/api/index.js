import fetch from "node-fetch";

export default async function handler(request, response) {
  const res = await fetch("https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=lKvuroHtj4Fh2aq842GxUW57gUmErxNj&data=AP01");
  const data = await res.json();
  return response.status(200).json({
    data,
  });
}
