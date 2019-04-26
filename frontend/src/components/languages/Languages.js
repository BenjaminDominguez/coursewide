import React, { Component } from 'react';
class Languages extends Component {
  render() {
    return (
      <div>
        <div className="languages-container">
          <h1 className="languages-page-header"> Our currently supported languages 
          </h1>
            <div className="row">
              <div className="col-md-4 language-box spanish">
              <img/>
              </div>
              <div className="col-md-4 langauge-box english">
              <img/>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Languages;
