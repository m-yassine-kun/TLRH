import { faker } from "@faker-js/faker";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
import ReportingService from "../services/ReportingService";

import * as ReactBootStrap from "react-bootstrap";

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
const coutTechnologies = (arrayTechno, data) => {
  const res = [];
  arrayTechno.forEach((techno) => {
    let cpt = 0;
    data.forEach((e) => {
      if (e["competenceName"] == techno) {
        cpt++;
      }
    });
    res.push(cpt);
  });
  return res;
};
const generateValues = (dataArray) => {
  const competenceName = [];
  const expertise = [];
  dataArray.forEach((e) => {
    competenceName.push(e["competenceName"]);
    expertise.push(e["expertise"]);
  });

  return [competenceName, expertise];
};
const Technologie = () => {
  const [datas, setDatas] = useState([
    {
      id: 0,
      competenceName: "",
      expertise: "",
    },
  ]);

  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    setloading(true);
    try {
      //data could use some time to render so we use the await
      //so we convert the method to async
      const response = await ReportingService.getCompetences();
      setDatas(response.data);
      //console.log(datas);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };
  useEffect(() => {
    fetchData();
    //console.log(datas);
  }, []);

  const labels = Array.from(new Set(generateValues(datas)[0]));
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: coutTechnologies(labels, datas),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgb(54, 162, 235)",
          "rgb(84, 34, 88)",
          "rgb(23, 44, 66)",
          "rgb(22, 73, 25)",
          "rgb(245, 73, 25)",
          "rgb(123, 44, 84)",
          "rgb(86, 4, 32)",
          "rgb(45, 73, 23)",
          "rgb(45, 73, 45)",
          "rgb(45, 73, 12)",
          "rgb(45, 54, 77)",
          "rgb(45, 78, 99)",
          "rgb(45, 97, 36)",
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
      {!loading ? (
        ChartGraph(data, options)
      ) : (
        <div className="text-center m-auto p-1 ">
          <ReactBootStrap.Spinner animation="border" />
        </div>
      )}
      {/* {ChartGraph(data, options)} */}
    </div>
  );
};

export default Technologie;
