import "./styles.css";

export default function App() {
  const hidden = (id, e) => {
      let card = document.getElementsByClassName("card");
          card[id].className += " car dHidden";
            };
              return (
                  <div className="App d-flex justify-content-center row">
                        {[1, 2, 3].map((item, index) => (
                                <div className="row" key={index}>
                                          <div className="col">
                                                      <div className="card" style={{ width: "18rem" }} index={index}>
                                                                    <div className="card-body">
                                                                                    <h5 className="card-title">Card title {index}</h5>
                                                                                                    <p className="card-text">
                                                                                                                      Some quick example text to build on the card title and make up
                                                                                                                                        the bulk of the card's content.
                                                                                                                                                        </p>
                                                                                                                                                                        <button
                                                                                                                                                                                          className="btn btn-danger"
                                                                                                                                                                                                            onClick={(e) => hidden(index, e)}
                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                              X
                                                                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                      