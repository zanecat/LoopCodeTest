import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getKeyByNode } from '../helpers';

class ManageNode extends Component {
  state = {
    name: '',
    type: ''
  };

  updateValue = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateClick = e => {
    e.preventDefault();

    const { createNode } = this.props;
    createNode(this.state.name, this.state.type);
    this.setState({ name: '', type: '' });
  };

  handleDeleteClick = e => {
    e.preventDefault();

    const { deleteNode } = this.props;
    const key = getKeyByNode(this.state.name, this.state.type);
    if (typeof key !== 'undefined') {
      deleteNode(this.state.name, this.state.type, key);
      this.setState({ name: '', type: '' });
    }
  };

  render() {
    return (
      <div className="container section">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Type</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>
                <input
                  className="control"
                  type="text"
                  name="name"
                  value={this.state.name}
                  placeholder="Name"
                  onChange={e => this.updateValue(e)}
                />
              </td>
              <td>
                <select
                  className="control"
                  name="type"
                  value={this.state.type}
                  onChange={this.updateValue}
                >
                  <option value="">Select type</option>
                  <option value="user">User</option>
                  <option value="group">Group</option>
                </select>
              </td>
              <td>
                <button className="main-btn" onClick={this.handleCreateClick}>
                  Create
                </button>
              </td>
              <td>
                <button className="main-btn" onClick={this.handleDeleteClick}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = () => {};
export default connect(
  mapStateToProps,
  actions
)(ManageNode);
