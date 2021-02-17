import React from 'react';

class MinerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nv1050: 0,
      nv1050Select: false,
      nv1050ti: 0,
      nv1050tiSelect: false,
      nv1060: 0,
      nv1060Select: false,
      nv1070: 0,
      nv1070Select: false,
      nv1070ti: 0,
      nv1070tiSelect: false,
      nv1080: 0,
      nv1080Select: false,
      nv1080ti: 0,
      nv1080tiSelect: false,
      nv2060: 0,
      nv2060Select: false,
      nv2070: 0,
      nv2070Select: false,
      nv2080: 0,
      nv2080Select: false,
      nv2080ti: 0,
      nv2080tiSelect: false,
      nv3060: 0,
      nv3060Select: false,
      nv3060ti: 0,
      nv3060tiSelect: false,
      nv3070: 0,
      nv3070Select: false,
      nv3080: 0,
      nv3080Select: false,
      nv3090: 0,
      nv3090Select: false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange (e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      // ...this.state,
      [e.target.name]: value,
    });
  }

  // handleToggle(e) {
  //   this.setState({
  //     [e.target.name]: e.target.checked,
  //   })
  // }

  render() {
    const { nv1050, nv1050Select, nv1050ti, nv1050tiSelect, nv1060, nv1060Select, nv1070, nv1070Select, nv1070ti, nv1070tiSelect, nv1080, nv1080Select, nv1080ti, nv1080tiSelect, nv2060, nv2060Select, nv2070, nv2070Select, nv2080, nv2080Select, nv2080ti, nv2080tiSelect, nv3060, nv3060Select, nv3060ti, nv3060tiSelect, nv3070, nv3070Select, nv3080, nv3080Select, nv3090, nv3090Select, } = this.state;
    return (

      <form id="miner-form" className="miner-form" acceptCharset="UTF-8" method="get">
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv1050Select">
              <div className="gpu-input-container">
                <input type="text" name="nv1050" id="nv1050" value={nv1050} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv1050Select" id="nv-1050-btn" value={nv1050Select} onChange={this.handleChange} hidden="hidden" className="dynamic" data-name="1050" />
                  <span className="gpu-btn" data-toggle="popover" name="nv1050Select" data-content="Adds hashrate and power consumption for 'n' 1050's <br><br> Calculations based on using +150/+500 and TDP 75%" data-placement="top" data-trigger="hover" data-html="true">
                    1050
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv1050tiSelect">
              <div className="gpu-input-container">
                <input type="text" name="nv1050ti" id="nv1050ti" value={nv1050ti} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv1050tiSelect" id="nv-1050ti-btn" value={nv1050tiSelect} onChange={this.handleChange} className="dynamic" data-name="1050ti" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 1050ti's <br><br> Calculations based on using +150/+500 and TDP 75%" data-placement="top" data-trigger="hover">
                    1050ti
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv1060Select">
              <div className="gpu-input-container">
                <input type="text" name="nv1060" id="nv1060" value={nv1060} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv1060Select" id="nv-1060-btn" value={nv1060Select} onChange={this.handleChange} className="dynamic" data-name="1060" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 1060's <br><br> Calculations based on using +150/+500 and TDP 65%" data-placement="top" data-trigger="hover">
                    1060
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv1070Select">
              <div className="gpu-input-container">
                <input type="text" name="nv1070" id="nv1070" value={nv1070} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv1070Select" id="nv-1070-btn" value={nv1070Select} onChange={this.handleChange} className="dynamic" data-name="1070" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 1070's <br><br> Calculations based on using +150/+500 and TDP 75%" data-placement="top" data-trigger="hover">
                    1070
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv1070tiSelect">
              <div className="gpu-input-container">
                <input type="text" name="nv1070ti" id="nv1070ti" value={nv1070ti} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv1070tiSelect" id="nv-1070ti-btn" value={nv1070tiSelect} onChange={this.handleChange} className="dynamic" data-name="1070ti" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 1070ti's <br><br> Calculations based on using +150/+500 and TDP 75%" data-placement="top" data-trigger="hover">
                    1070ti
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv1080Select">
              <div className="gpu-input-container">
                <input type="text" name="nv1080" id="nv1080" value={nv1080} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv1080Select" id="nv-1080-btn" value={nv1080Select} onChange={this.handleChange} className="dynamic" data-name="1080" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 1080's <br><br> Calculations based on using +125/+500 and TDP 70%" data-placement="top" data-trigger="hover">
                    1080
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv1080tiSelect">
              <div className="gpu-input-container">
                <input type="text" name="nv1080ti" id="nv1080ti" value={nv1080ti} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv1080tiSelect" id="nv-1080ti-btn" value={nv1080tiSelect} onChange={this.handleChange} className="dynamic" data-name="1080ti" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 1080ti's <br><br> Calculations based on using +125/+500 and TDP 75%" data-placement="top" data-trigger="hover">
                    1080ti
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv2060Select">
              <div className="gpu-input-container">
                <input type="text" name="nv2060" id="nv2060" value={nv2060} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv2060Select" id="nv-2060-btn" value={nv2060Select} onChange={this.handleChange} className="dynamic" data-name="2060" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 2060's <br><br> Calculations based on using +0/+500 and TDP 65%" data-placement="top" data-trigger="hover">
                    2060
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv2070Select">
              <div className="gpu-input-container">
                <input type="text" name="nv2070" id="nv2070" value={nv2070} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv2070Select" id="nv-2070-btn" value={nv2070Select} onChange={this.handleChange} className="dynamic" data-name="2070" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 2070's <br><br> Calculations based on using +0/+500 and TDP 70%" data-placement="top" data-trigger="hover">
                    2070
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv2080Select">
              <div className="gpu-input-container">
                <input type="text" name="nv2080" id="nv2080" value={nv2080} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv2080Select" id="nv-2080-btn" value={nv2080Select} onChange={this.handleChange} className="dynamic" data-name="2080" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 2080's <br><br> Calculations based on using +0/+500 and TDP 60%" data-placement="top" data-trigger="hover">
                    2080
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv2080tiSelect">
              <div className="gpu-input-container">
                <input type="text" name="nv2080ti" id="nv2080ti" value={nv2080ti} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv2080tiSelect" id="nv-2080ti-btn" value={nv2080tiSelect} onChange={this.handleChange} className="dynamic" data-name="2080ti" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 2080ti's <br><br> Calculations based on using +125/+500 and TDP 60%" data-placement="top" data-trigger="hover">
                    2080ti
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv3060Select">
              <div className="gpu-input-container">
                <input type="text" name="nv3060" id="nv3060" value={nv3060} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv3060Select" id="nv-3060-btn" value={nv3060Select} onChange={this.handleChange} className="dynamic" data-name="3060" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 3060's <br><br> Calculations based on using TDP 60-80%" data-placement="top" data-trigger="hover">
                    3060
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv3060tiSelect">
              <div className="gpu-input-container">
                <input type="text" name="nv3060ti" id="nv3060ti" value={nv3060ti} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv3060tiSelect" id="nv-3060ti-btn" value={nv3060tiSelect} onChange={this.handleChange} className="dynamic" data-name="3060ti" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 3060ti's <br><br> Calculations based on using TDP 60-80%" data-placement="top" data-trigger="hover">
                    3060ti
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv3070Select">
              <div className="gpu-input-container">
                <input type="text" name="nv3070" id="nv3070" value={nv3070} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv3070Select" id="nv-3070-btn" value={nv3070Select} onChange={this.handleChange} className="dynamic" data-name="3070" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 3070's <br><br> Calculations based on using +0/+800 and TDP 50%" data-placement="top" data-trigger="hover">
                    3070
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="miner-form-row">
          <div className="col">
            <label htmlFor="nv3080Select">
              <div className="gpu-input-container">
                <input type="text" name="nv3080" id="nv3080" value={nv3080} onChange={this.handleChange} className="gpu-input" />
                <div className="gpu-input-btn">
                  <input type="checkbox" name="nv3080Select" id="nv-3080-btn" value={nv3080Select} onChange={this.handleChange} className="dynamic" data-name="3080" />
                  <span className="btn" data-content="Adds hashrate and power consumption for 'n' 3080's <br><br> Calculations based on using +0/+500 and TDP 60%" data-placement="top" data-trigger="hover">
                    3080
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
      </form>
    );
  }
}


{/* <div className="miner-form-row">
<div className="col">
  <label htmlFor="">
    <div className="gpu-input-container">
      <input type="text" name="" id="" value={} onChange={this.handleChange} className="gpu-input" />
      <div className="gpu-input-bttn">
        <input type="checkbox" name="" id="" value={} onChange={this.handleChange} hidden="hidden" className="dynamic" data-name="" />
        <span className="bttn" data-content="Adds hashrate and power consumption for 'n' 1070's <br><br> Calculations based on using +150/+500 and TDP 75%" data-placement="top" data-trigger="hover">
          CHANGE ME
        </span>
      </div>
    </div>
  </label>
</div>
</div> */}

export default MinerForm;
