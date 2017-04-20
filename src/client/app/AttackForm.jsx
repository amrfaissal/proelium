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
import {Modal, Row, Input, Button} from 'react-materialize';


class AttackForm extends Component {
	constructor(props) {
		super(props);
		this.localStyle = {
			fontSize: "inherit"
		};
	}

	handleCreateButtonClicked(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<Modal header='New Attack'
					trigger={
						<div className="attack">
							<div className="chip grey darken-3 white-text" style={this.localStyle}>
								<i className="material-icons">add</i>
								<span>New attack</span>
							</div>
						</div> }
					actions={
						[
							<Button waves='light' modal='close' style={{margin: '2px'}}>Close</Button>,
							<Button onClick={this.handleCreateButtonClicked}
									waves='light'
									modal='close'
									style={{margin: '2px'}}>Create</Button>
						]
					}
					>
					<br/>
					<form onSubmit={this.onSubmitHandler}>
						<Input placeholder="Placeholder" s={6} />
						<Input s={6} label="Last Name" />
						<Input s={12} label="disabled" defaultValue="I am not editable" disabled />
						<Input type="password" label="password" s={12} />
						<Input type="email" label="Email" s={12} />
					</form>
				</Modal>
			</div>
		);
	}
}

export default AttackForm;
