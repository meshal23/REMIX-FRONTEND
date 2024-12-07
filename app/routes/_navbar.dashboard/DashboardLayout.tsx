import { BarChartData } from "./BarChart";
import { PieChartData } from "./PieChart";
import { RadialChartData } from "./RadialChart";

const DashboardLayout = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex gap-5">
        <PieChartData />
        <RadialChartData />
      </div>
      <BarChartData />
    </section>
  );
};

export default DashboardLayout;
