/* eslint-disable arrow-body-style */
import React from 'react';
import axios from 'axios';
import MinerForm from './MinerForm';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // crypto: [],
      GPUs: [],
    };
    this.getGPUs = this.getGPUs.bind(this);
  }

  componentDidMount() {
    this.getGPUs();
  }

  getGPUs() {
    axios.get('/api/GPUs')
      .then(({ data }) => {
        this.setState({ GPUs: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // const { GPUs } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <MinerForm />
        </div>
      </div>
    );
  }
}

export default App;
