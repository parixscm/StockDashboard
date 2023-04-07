/**
 * 파일 역할: 주식 종목(심볼) fetch utility function
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

export const searchSymbols = async query => {
  const response = await fetch(
    `${process.env.BASE_PATH}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`
  );
  if (!response.ok) {
    const message = `Unexpected error: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchStockDetails = async stockSymbol => {
  const response = await fetch(
    `${process.env.BASE_PATH}/stock/profile2?symbol=${stockSymbol}&token={process.env.REACT_APP_API_KEY}`
  );
  if (!response.ok) {
    const message = `Unexpected error: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchQuote = async stockSymbol => {
  const response = await fetch(
    `${process.env.BASE_PATH}/quote?symbol=${stockSymbol}&token={process.env.REACT_APP_API_KEY}`
  );
  if (!response.ok) {
    const message = `Unexpected error: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchHistoricalData = async (
  stockSymbol,
  resolution,
  from,
  to
) => {
  const response = await fetch(
    `${process.env.BASE_PATH}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token={process.env.REACT_APP_API_KEY}`
  );
  if (!response.ok) {
    const message = `Unexpected error: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};
