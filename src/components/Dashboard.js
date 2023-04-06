import { mockCompanyDetails } from "../constants/mock";
import Card from "./Card";
import Details from "./Details";
import Header from "./Header";
import Overview from "./Overview";

function Dashboard() {
  return (
    <div className="min-h-screen p-10 grid gap-6 auto-rows-fr grid-cols-1 grid-rows-8 font-quicksand md:grid-cols-2 md:grid-rows-7 xl:grid-cols-3 xl:grid-rows-5">
      <div className="flex justify-start items-center col-span-1 row-span-1 md:col-span-2 xl:col-span-3">
        <Header name={mockCompanyDetails.name} />
      </div>
      <div className="row-span-4 md:col-span-2">
        <Card>Chart</Card>
      </div>
      <div>
        <Overview
          symbol={mockCompanyDetails.ticker}
          price={300}
          change={30}
          changePercent={10.0}
          currency={"USD"}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={mockCompanyDetails} />
      </div>
    </div>
  );
}

export default Dashboard;
