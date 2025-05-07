import AnuPortfolio from "public/assets/files/AnanyaJayamoorthyPortfolio.pdf";
import LadaPortfolio from "public/assets/files/Lada_Portfolio.pdf";

const Home = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <p>Welcome to the homepage!</p>
      <Button className="mt-10 text-2xl">
        <a href={AnuPortfolio} target="_blank" rel="noopener noreferrer">
          Anu's Tech Portfolio
        </a>
      </Button>
      <Button className="mt-10 text-2xl">
        <a href={LadaPortfolio} target="_blank" rel="noopener noreferrer">
          Lada's Tech Portfolio
        </a>
      </Button>
      <ButtonGradient />
    </div>
  );
};

export default Home;
