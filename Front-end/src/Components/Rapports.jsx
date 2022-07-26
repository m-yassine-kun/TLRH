import { useNavigate } from "react-router";

const Rapports = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-8 my-8 grid grid-cols-3 gap-8 content-center">
      <h1 className="text-2xl m-auto col-span-3 font-bold ">
        Bilans de compétences
      </h1>

      <button
        onClick={() => navigate("/rapports/salaire")}
        className=" bg-green-600 hover:bg-green-700 text-white  py-4 px-4 rounded"
      >
        Evolution de salaire
      </button>

      <button
        onClick={() => navigate("/rapports/posteApp")}
        className=" bg-green-600 hover:bg-green-700 text-white  py-4 px-4 rounded "
      >
        Evolution du poste APP
      </button>
      <button
        onClick={() => navigate("/rapports/competence")}
        className=" bg-green-600 hover:bg-green-700 text-white  py-4 px-4 rounded"
      >
        Matrice de compétence
      </button>
      <button
        onClick={() => navigate("/rapports/ratioFemininMasculin")}
        className=" bg-green-800 hover:bg-green-700 text-white  py-4 px-4 rounded"
      >
        Ratio Féminin masculin
      </button>
      <button
        onClick={() => navigate("/rapports/recrutement")}
        className=" bg-green-800 hover:bg-green-700 text-white  py-4 px-4 rounded"
      >
        Evolution recrutement par année
      </button>
      <button
        onClick={() => navigate("/rapports/turnOver")}
        className=" bg-green-800 hover:bg-green-700 text-white  py-4 px-4 rounded"
      >
        Taux de turn over
      </button>
      <button
        onClick={() => navigate("/rapports/technologie")}
        className=" bg-green-800 hover:bg-green-700 text-white  py-4 px-4 rounded"
      >
        Pourcentage de chaque technologie
      </button>
      <button
        onClick={() => navigate("/rapports/etudes")}
        className=" bg-green-800 hover:bg-green-700 text-white  py-4 px-4 rounded"
      >
        Pourcentage par école, par diplôme, par type de diplôme
      </button>
    </div>
  );
};

export default Rapports;