import { Link } from "react-router-dom";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">NFT Minting</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Mint your NFT</p>
        </div>
        <div className="col-lg-6 mx-auto mt-5">
          <Link to="/dashboard">
            <button type="button" className="btn btn-primary btn-lg">
              Dashboard
            </button>
          </Link>
          ;
        </div>
      </div>
    </>
  );
};

export default Home;
