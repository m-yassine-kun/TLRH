import { faker } from "@faker-js/faker";

const labels = [...Array(6).keys()].map(() =>
  faker.datatype.number({ min: 20, max: 100 })
);
const Table = (data) => {
  return (
    <table className="min-w-full table-auto p-1">
      <thead className="bg-gray-50">
        <tr>
          <th className=" text-left font-medium text-gray-500 upeprcase tracking-wider p-2">
            Compétences
          </th>
          <th className=" text-left font-medium text-gray-500 upeprcase tracking-wider p-2">
            Niveau d’expertise
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data["labels"].map((e) => (
          <tr key={faker.datatype.uuid()}>
            <td className="text-left font-medium text-gray-500 upeprcase tracking-wider p-2">
              {faker.commerce.productName()}
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

const MatriceCompetence = () => {
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
    <div className="mx-2 my-2 ">
      {/* Components of table and chart of Evolution  */}

      <h1 className="text-2xl m-2 mb-4 text-center  font-bold ">
        Evolution de la Matrice de Compétence du collaborateur{" "}
        {faker.name.firstName()} par niveau d’expertise
      </h1>

      <div className="w-full p-1">
        <h2 className="text-xl m-2 text-center font-bold ">
          Table de l'évolution de la Matrice de Compétence
        </h2>
        {Table(data)}
      </div>
    </div>
  );
};

export default MatriceCompetence;
