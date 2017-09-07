import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class MuisList extends Component {

  constructor(props){
    super(props);
    console.log(props);
    let { parent } = props;
    if(parent){
      parent.setHeader('Home');
    }
    this.state = {
      logged: true,
    };

    this.handleChange = this.handleChange.bind();
  }

  componentWillMount() {
    //this.props.fetchMuis();
  }

  renderCategories(categories) {
     return categories.map((c) => {
        c = c.trim();
        return (
          <Link to={"filter/" + c} key={c} className="list-group-item-text">{" " + c + " "}</Link>
        );
     });
  }

  renderMuis(muis) {
    console.log('MuisList renderMuis', muis)
    return muis ? muis.map((mui) => {
      return (
        <li className="list-group-item" key={mui.ID}>
          <Link style={{color:'black'}} to={"muis/" + mui.ID}>
            <h3 className="list-group-item-heading">{mui.MuiName}</h3>
          </Link>
            {this.renderCategories([mui.Company])}
        </li>
      );
    }) : null;
  }

  handleTouchTap() {
    alert('onClick triggered on the title component');
  }

  handleChange(event, logged){
    this.setState({logged: logged});
  };

  render() {

    const { muis, loading, error } = this.props.muisList

    if(loading) {
      return <div className="container"><h1>Muis</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="container">
        <h1>Material UI Example Page</h1>

        <h4>RaisedButton</h4>
          <RaisedButton label="Default" />
        {' '}
        <h4>AppBar</h4>
          <AppBar
            title="App Bar in Default"
            onTitleTouchTap={ this.handleTouchTap }
          />
        <br/>
          <AppBar
            title={<span style={{ cursor: 'pointer' }}>App Bar Title with css + right css icon</span>}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onTitleTouchTap={ this.handleTouchTap }
          />
        <br/>
          <AppBar
            title={<span style={{ cursor: 'pointer' }}>App Bar Title with css + right & left button</span>}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={<FlatButton label="Save" />}
            onTitleTouchTap={ this.handleTouchTap }
          />
        <br/>
          <Toggle
            label="Logged"
            defaultToggled={true}
            onToggle={this.handleChange}
            labelPosition="right"
            style={{margin: 20}}
          />
        <br/>
          <AppBar
            title="App Bar with dynamic change content"
            iconElementRight={this.state.logged ? <Logged /> : <Login />}
            onTitleTouchTap={ this.handleTouchTap }
          />

        <h4>AppBar - Default</h4>
        <h4>AppBar - Default</h4>
        <h4>AppBar - Default</h4>
        
        <button onClick={this.props.fetchMuis}>Reload Data</button>
        <RaisedButton onClick={this.props.fetchMuis} label="Reload Data" />
        <ul className="list-group">
          { this.renderMuis(muis) }
        </ul>
      </div>
    );
  }

}

export default MuisList;
