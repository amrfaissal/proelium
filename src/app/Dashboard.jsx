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

const ReportChart = () => {
  return (
    <div className="card card-header">
      <div className="card-content">
        <span className="card-title black-text">
          Report
        </span>
        <div className="ct-chart"></div>
      </div>
    </div>
  );
};

const Card = (props) => {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-content black-text">
          <p><i className="mdi-social-group-add"></i>{props.title}</p>
          <h4 className="card-stats-number">{props.value}</h4>
          <p className="card-stats-compare"><i className="mdi-hardware-keyboard-arrow-up"></i> {props.percentage} <span className="deep-orange-text text-lighten-2">from yesterday</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const CardRow = () => {
  return (
    <div className="row">
      <Card title="New Users" value="56,000" percentage="15%"/>
      <Card title="New Users" value="56,000" percentage="15%"/>
      <Card title="New Users" value="56,000" percentage="15%"/>
      <Card title="New Users" value="56,000" percentage="15%"/>
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

const Dashboard = () => {
  return (
    <main>
      <div className="breadcrumb grey lighten-3">
        <h6>Dashboard</h6>
      </div>
      <ReportChart />
      <CardRow />
      <LogOutput/>
      <ClearOutput />
    </main>
  );
};

export default Dashboard;