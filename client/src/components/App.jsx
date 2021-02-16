/* eslint-disable arrow-body-style */
// import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // crypto: [],
      // GPUs: [],
    };
    // this.getGPUs = this.getGPUs.bind(this);
  }

  componentDidMount() {
    // this.getGPUs();
  }

  // getGPUs() {
  //   axios.get('/api/GPUs')
  //     .then(({ data }) => {
  //       this.setState({ GPUs: data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    // const { GPUs } = this.state;
    return (
      <div>
        If you can see this, React is working.
      </div>
    );
  }
}

export default App;
