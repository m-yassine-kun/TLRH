import { faker } from "@faker-js/faker";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const ChartGraph = (data, options) => {
  return (
    <div className="w-5/12 m-auto p-1 ">
      <h2 className="text-xl m-2 text-center font-bold  ">
        Graphe de pourcentage des technologies
      </h2>
      <Doughnut options={options} data={data} />
    </div>
  );
};

const labels = ["ReactJS", "Spring", "nodejs", "laravel"];
const Technologie = () => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 10, max: 100 })),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgb(54, 162, 235)",
          "rgb(84, 34, 88)",
          "rgb(23, 73, 25)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        position: "bottom",
        text: "Chart.js Line Chart",
      },
    },
  };
  return (
    <div className="mx-2 my-2 ">
      {/* Components of table and chart of Evolution  */}

      <h1 className="text-2xl m-2 mb-4 text-center font-bold ">
        Le pourcentage des technologies
      </h1>

      {ChartGraph(data, options)}
    </div>
  );
};

export default Technologie;
