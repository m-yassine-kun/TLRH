import { faker } from "@faker-js/faker";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

const Chart = (data, options, labelsToshow) => {
  return (
    <div className="w-full p-1 ">
      <h2 className="text-xl m-2 text-center font-bold  ">
        Graphe de l'évolution de salaire du collaborateur par année
      </h2>
      <Line options={options} data={data} />
    </div>
  );
};
const Table = (labels) => {
  return (
    <table className="min-w-full table-auto p-1">
      <thead className="bg-gray-50">
        <tr>
          <th className=" text-left font-medium text-gray-500 upeprcase tracking-wider p-2">
            Année
          </th>
          <th className=" text-left font-medium text-gray-500 upeprcase tracking-wider p-2">
            Salaire Brut total
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {labels.map((e) => (
          <tr key={e}>
            <td className="text-left font-medium text-gray-500 upeprcase tracking-wider p-2">
              {e}
            </td>
            <td className="text-left font-medium text-gray-500 upeprcase tracking-wider p-2">
              {faker.datatype.number({ min: 200, max: 10000 })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const moyenneSurDureeData = (startValue, endValue) => {
  let period = endValue - startValue + 1;
  let res = ((endValue / startValue) ** (1 / period) - 1) * 100;
  return res.toFixed(2);
};

const generateStartEnd = (startValue, endValue) => {
  let list = [];
  for (let i = startValue; i <= endValue; i++) {
    list.push(i);
  }
  return list;
};

const SalaireMoyenne = ({ data, options, name }) => {
  const newData = { ...data };
  const labels = newData["labels"];
  const n = labels.length;
  const [dateDebut, setDateDebut] = useState(labels[0]);
  const [dateFin, setDateFin] = useState(labels[n - 1]);
  const labelsToshow = generateStartEnd(dateDebut, dateFin);
  const dataToshow = {
    labels: labelsToshow,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 200, max: 10000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 200, max: 10000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="mx-2 my-2 grid grid-cols-2 space-x-2">
      <form className="w-full m-auto p-4  ">
        <fieldset>
          <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
            <label htmlFor="frm-whatever" className="sr-only">
              My field
            </label>

            <select
              className="appearance-none w-full py-1 px-2 bg-white"
              name="whatever"
              id="frm-whatever"
              onChange={(e) => setDateDebut(e.currentTarget.value)}
            >
              <option key="0" value={labels[0]}>
                Selectionner Date de début
              </option>
              {labels.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </fieldset>
        <h1>{dateDebut}</h1>
      </form>
      <form className="w-full m-auto p-4  ">
        <fieldset>
          <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
            <label htmlFor="frm-whatever" className="sr-only">
              My field
            </label>

            <select
              className="appearance-none w-full py-1 px-2 bg-white"
              name="whatever"
              id="frm-whatever"
              onChange={(e) => setDateFin(e.currentTarget.value)}
            >
              <option key="0" value={labels[n - 1]}>
                Selectionner date de fin
              </option>

              {labels.map(
                //
                (l) =>
                  l >= dateDebut && (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  )
              )}
            </select>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </fieldset>
        <h1>{dateFin}</h1>
      </form>

      {/* Components of table and chart of moy Evolution  */}

      <h1 className=" text-2xl m-2 mb-4 text-center col-span-2 font-bold ">
        La moyenne d'évolution de salaire du collaborateur {name} sur{" "}
        {dateFin - dateDebut + 1}{" "}
        {dateFin - dateDebut + 1 < 2 ? "année " : "années "}est{" "}
        <span className="text-red-600">
          {moyenneSurDureeData(dateDebut, dateFin)}
          {"%"}
        </span>
      </h1>
      {Chart(dataToshow, options, labelsToshow)}
      <div className="w-full p-1">
        <h2 className="text-xl m-2 text-center font-bold ">
          Table de l'évolution de salaire du collaborateur par année
        </h2>
        {Table(labelsToshow)}
      </div>
    </div>
  );
};

export default SalaireMoyenne;
