interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <div className="card">
          <div className="card-header">
            <p>Data</p>
          </div>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="card bg-primary mt-4 col-md-8 text-white text-start">
                <div className="card-body">
                  <p>
                    <strong>Request tokens</strong>
                  </p>
                  <p>Request some tokens here using the form bellow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
