import React from "react";
import ReactApexChart from "react-apexcharts";
const ApexChart = () => {

  // for configuration settings of the ApexChart.
  const options: any = {
    title: { text: "Sales Analytics" },
    style: { fontSize: 30 },
    colors: ["	#008080"],
    chart: {
      id: "mixed-chart",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
  };
// for the data series of the ApexChart.
  const series: any = [
    {
      name: "Bar Series",
      type: "bar",
      data: [30, 40, 45, 50, 49, 60, 70],
    },
    {
      name: "Line Series",
      type: "line",
      data: [20, 30, 35, 40, 39, 50, 60],
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        width={700}
        height={400}
      />
    </div>
  );
};

export default ApexChart;
