/* eslint-disable arrow-body-style */
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crypto: [],
      GPUs: [],
    };
    this.getCrypto = this.getCrypto.bind(this);
  }

  componentDidMount() {
    this.getCrypto();
  }

  getGPUs() {
    axios.get('/api/GPUs')
      .then(({ data }) => {
        this.setState({ GPUs: data });
      })
      .catch((err) => {
        return err;
      });
  }

  render() {
    const { GPUs } = this.state;
    return (
      <div>
        If you can see this, React is working.
      </div>
    );
  }
}

export default App;
