/* eslint-disable arrow-body-style */
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crypto: [],
    };
    this.getCrypto = this.getCrypto.bind(this);
  }

  componentDidMount() {
    this.getCrypto();
  }

  getCrypto() {
    axios.get('/api/crypto')
      .then(({ data }) => {
        this.setState({ crypto: data });
      })
      .catch((err) => {
        return err;
      });
  }

  render() {
    const { crypto } = this.state;
    return (
      <div>
        If you can see this, React is working.
      </div>
    );
  }
}

export default App;
