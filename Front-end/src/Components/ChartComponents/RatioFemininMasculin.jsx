import { faker } from "@faker-js/faker";
import Chart from "chart.js/auto";
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import ReportingService from "../services/ReportingService";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";

const ChartGraph = (data, options) => {
  return (
    <div className="w-5/12 m-auto p-1 ">
      <h2 className="text-xl m-2 text-center font-bold  ">
        Graphe du Ratio Féminin Masculin
      </h2>
      <Doughnut options={options} data={data} />
    </div>
  );
};

const labels = ["Féminin", "Masculin"];

const RatioFM = () => {
  const [datas, setDatas] = useState([0, 0]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    setloading(true);
    try {
      //data could use some time to render so we use the await
      //so we convert the method to async
      const response = await ReportingService.getSexe();
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

  const resData = [datas.F, datas.M];
  //const resData = [12, 34];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        //  ReportingService.getSexe()
        //labels.map(() => faker.datatype.number({ min: 10, max: 100 }))
        data: resData,

        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgb(54, 162, 235)"],
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

      <h1 className="text-2xl m-2 mb-4 text-center font-bold ">
        Le Ratio Féminin Masculin
      </h1>

      {!loading ? (
        ChartGraph(data, options)
      ) : (
        <div className="text-center m-auto p-1 ">
          <ReactBootStrap.Spinner animation="border" />
        </div>
      )}
    </div>
  );
};

export default RatioFM;
