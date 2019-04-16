import React, { Component } from 'react';
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';

class Languages extends Component {
  render() {

    const header = (
        <div>
            <Topbar />
            <Navbar />
        </div>
    )
    return (
      <div>
        { header }
        <div className="languages-container">
          <h1 className="languages-page-header"> Our currently supported languages 
          </h1>
            <div className="row">
              <div className="col language-box">
                <h1 className="language-title">Spanish
                  </h1>
                   <ul className="language-ul">
                      <li>HTML</li>
                    <li>Django</li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Languages;
