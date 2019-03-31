import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { USER, GROUP } from '../constants';

class ManageMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      member: '',
      group: ''
    };
  }

  updateValue = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddClick = e => {
    const { addMember } = this.props;
    addMember(this.state.member, this.state.group);
    this.setState({ member: '', group: '' });
  };

  handleRemoveClick = e => {
    const { removeMember } = this.props;
    removeMember(this.state.member, this.state.group);
    this.setState({ member: '', group: '' });
  };

  renderSelectOptions = type => {
    let nodes = [];
    if (type === USER) {
      nodes = this.props.users;
    }

    if (type === GROUP) {
      nodes = this.props.groups;
    }

    if (nodes) {
      return nodes.map(node => <option key={node.id} value={node.id}>{node.name}</option>);
    }
  };

  render() {
    return (
      <div className="container section">
        <table>
          <tbody>
            <tr>
              <td>Member</td>
              <td>Group</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>
                <select
                  className="control"
                  name="member"
                  value={this.state.member}
                  onChange={this.updateValue}
                >
                  <option value="">Select member</option>
                  {this.renderSelectOptions(USER)}
                  {this.renderSelectOptions(GROUP)}
                </select>
              </td>
              <td>
                <select
                  className="control"
                  name="group"
                  value={this.state.group}
                  onChange={this.updateValue}
                >
                  <option value="">Select group</option>
                  {this.renderSelectOptions(GROUP)}
                </select>
              </td>
              <td>
                <button className="main-btn" onClick={this.handleAddClick}>
                  Add
                </button>
              </td>
              <td>
                <button className="main-btn" onClick={this.handleRemoveClick}>
                  remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: filterTypeFromNodes(state.nodes, USER),
    groups: filterTypeFromNodes(state.nodes, GROUP)
  };
};

const filterTypeFromNodes = (nodes, type) => {
  return Object.entries(nodes)
    .filter(entry => entry[1].type === type)
    .map(entry => ({ id: entry[0], name: entry[1].name, type: entry[1].type }));
};

export default connect(
  mapStateToProps,
  actions
)(ManageMember);
