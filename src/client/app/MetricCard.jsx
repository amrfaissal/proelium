/**
   Copyright 2017 Faissal Elamraoui

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
import React, {Component} from 'react';

export default class MetricCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col s12 m6 l3">
        <div className="card">
          <div className="card-content black-text">
            <p><i className="mdi-social-group-add"></i>{this.props.title}</p>
            <h4 className="card-stats-number">{this.props.value}</h4>
            <p className="card-stats-compare"><i className="mdi-hardware-keyboard-arrow-up"></i> {this.props.percentage} <span className="deep-orange-text text-lighten-2">from yesterday</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
