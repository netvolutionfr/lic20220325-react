import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    }
  }

  recupDonnees() {
    fetch("http://localhost:3000/restaurants")
    .then(response => response.json())
    .then(data => {
      this.setState({
        loading: false,
        data: data.restaurants
      })
    });
  }

  componentDidMount() {
    this.recupDonnees();
  }

  render() {
    return (
      <>
        <h2>Liste des restaurants</h2>
        { this.state.loading ?
          <p>Chargement...</p>
          :
          <ul>
            {this.state.data.map((r) => {
            return <li key={r._id}>{r.name}</li>
          })}
          </ul>
        }
      </>
    );
  }
};

export default App;
