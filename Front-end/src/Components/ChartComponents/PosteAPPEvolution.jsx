import { faker } from "@faker-js/faker";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ChartGraph = (data, options) => {
  return (
    <div className="w-full p-1 ">
      <h2 className="text-xl m-2 text-center font-bold  ">
        Graphe de l'évolution du poste APP par année
      </h2>
      <Bar options={options} data={data} />
    </div>
  );
};
const Table = (data) => {
  return (
    <table className="min-w-full table-auto p-1">
      <thead className="bg-gray-50">
        <tr>
          <th className=" text-left font-medium text-gray-500 upeprcase tracking-wider p-2">
            Nombre d'années
          </th>
          <th className=" text-left font-medium text-gray-500 upeprcase tracking-wider p-2">
            Poste APP
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data["labels"].map((e) => (
          <tr key={e}>
            <td className="text-left font-medium text-gray-500 upeprcase tracking-wider p-2">
              {faker.datatype.number({ min: 0, max: 30 })}
            </td>
            <td className="text-left font-medium text-gray-500 upeprcase tracking-wider p-2">
              {e}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const labels = ["Entry", "Junior", "Senior", "Architect", "Lead"];
const PosteAPPEvolution = () => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        position: "bottom",
        text: "Chart.js Line Chart",
      },
    },
  };
  return (
    <div className="mx-2 my-2 grid grid-cols-2 space-x-2">
      {/* Components of table and chart of Evolution  */}

      <h1 className="text-2xl m-2 mb-4 text-center col-span-2 font-bold ">
        Evolution du poste APP du collaborateur {faker.name.firstName()} par
        année
      </h1>

      {ChartGraph(data, options)}

      <div className="w-full p-1">
        <h2 className="text-xl m-2 text-center font-bold ">
          Table de l'évolution du poste APP par année
        </h2>
        {Table(data)}
      </div>
    </div>
  );
};

export default PosteAPPEvolution;
