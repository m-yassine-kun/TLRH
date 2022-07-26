import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import SalaireEvolution from "./SalaireEvolution";
import SalaireMoyenne from "./SalaireMoyenne";

const start = 2000;
const end = 2022;
const labels = [...Array(end - start + 1).keys()].map((x) => x + start);

const Salaire = () => {
  const [type, setType] = useState("0");

  const data = {
    labels: labels,
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
    <div>
      <form className="w-full m-auto p-4 col-span-2 ">
        <fieldset>
          <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
            <label htmlFor="frm-whatever" className="sr-only">
              My field
            </label>

            <select
              className="appearance-none w-full py-1 px-2 bg-white"
              name="whatever"
              id="frm-whatever"
              onChange={(e) => setType(e.currentTarget.value)}
            >
              <option key="0" value="0">
                Selectionner ...
              </option>
              <option key="1" value="1">
                Mon évolution du salaire
              </option>
              <option key="2" value="2">
                Mon évolution de la moyenne d’augmentation du salaire par durée
              </option>
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
        {/* <h1>{type}</h1> */}
      </form>
      {type == 1 ? (
        <SalaireEvolution data={data} options={options} />
      ) : type == 2 ? (
        <SalaireMoyenne data={data} options={options} />
      ) : (
        <h2 className="text-xl m-2 text-center font-bold  ">
          Merci de choisir un type à afficher.
        </h2>
      )}
    </div>
  );
};

export default Salaire;
