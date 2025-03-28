export default function Resume() {
  return (
    <div className="container my-5">
      
      <div className="text-center mb-5">
        <h2>
          <a href="/" className="text-decoration-none text-white ">My Resume</a>
        </h2>
        <p><small className="text-white ">Currently in progress — more to come!</small></p>
      </div>

     
      <div className="row">
       
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title text-primary">Front-End Proficiencies</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">jQuery</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title text-success">Back-End Proficiencies</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">APIs</li>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">Express.js</li>
                <li className="list-group-item">MySQL / Sequelize</li>
                <li className="list-group-item">MongoDB / Mongoose</li>
                <li className="list-group-item">REST</li>
                <li className="list-group-item">GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
