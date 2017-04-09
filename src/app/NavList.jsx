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

const NavList = () => {
  let localStyle = {
    fontSize: "inherit"
  };
  return (
    <ul id="nav-mobile" className="side-nav custom-side-nav fixed blue darken-4">
        <li>
          <div className="user">
            <div className="chip grey darken-3 white-text" style={localStyle}>
              <i className="material-icons">add</i>
              <span>New attack</span>
            </div>
          </div>
        </li>
        <li>
          <a className="blue white-text darken-3 waves-effect waves-grey">
            <span>Dashboard</span>
          </a>
        </li>
      </ul>
  );
};

export default NavList;