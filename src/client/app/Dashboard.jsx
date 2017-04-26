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

import MetricCard from './MetricCard';

const ReportChart = () => {
  return (
    <div className="card card-header">
      <div className="card-content">
        <span className="card-title black-text">
          Report
        </span>
        <div className="ct-chart">
          <p>This is just a placeholder for a graph</p>
        </div>
      </div>
    </div>
  );
};

const MetricsPanel = () => {
  return (
    <div className="row">
      <MetricCard title="New Users" value="56,000" percentage="15%"/>
      <MetricCard title="New Users" value="56,000" percentage="15%"/>
      <MetricCard title="New Users" value="56,000" percentage="15%"/>
    </div>
  );
};

const LogOutput = () => {
  return (
    <div>
      <div id="shell" className="shell">
      <div className="shell-header">
        <a href="#" className="white-text">
          <i>Output</i>
        </a>
      </div>
      <div className="shell-content">
        <h6 className="green-text text-accent-3">Proelium v1.0.0</h6>
        <div className="green-text text-lighten-3">This is a log message number 1</div>
        <div className="green-text text-lighten-3">This is a log message number 1</div>
        <div className="green-text text-lighten-3">This is a log message number 1</div>
        <div className="green-text text-lighten-3">This is a log message number 1</div>
      </div>
    </div>
  </div>
  );
};

const ClearOutput = () => {
  return (
    <div className="fixed-action-btn">
      <a href="#shell" className="btn-floating btn-large blue darken-4">
        <i className="large white-text material-icons">clear_all</i>
      </a>
    </div>
  );
};


class Dashboard extends Component {
  constructor(props) {
    super(props);
    // maybe start a websocket connection here
  }

  render() {
    return (
      <main>
        <div className="breadcrumb grey lighten-3">
          <h6>Dashboard</h6>
        </div>
        <ReportChart />
        <MetricsPanel />
        <LogOutput/>
        <ClearOutput />
      </main>
    );
  }
}

export default Dashboard;
