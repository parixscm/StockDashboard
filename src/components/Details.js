import Card from "./Card";

function Details({ details }) {
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = number => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <ul className="w-full h-full -mt-5 flex flex-col justify-between divide-y-1 md:-mt-2 xl:mt-0">
        {Object.keys(detailsList).map(item => (
          <li
            key={item}
            className="flex-1 flex justify-between items-center text-sm"
          >
            <span>{detailsList[item]}</span>
            <span className="text-right font-bold">
              {item === "marketCapitalization"
                ? `${convertMillionToBillion(details[item])}B`
                : details[item]}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Details;
