import React, { Component } from 'react'
import PropTypes from 'prop-types';

//import Footer from './Footer'
//import AddTodo from './containers/AddTodo'
//import VisibleTodoList from './containers/VisibleTodoList'

//const ListToolbar = () => { return (<div>Toolbar</div>) }
import ListToolbar from './ListToolbar'

//const ListItem = () => { return (<div>List Item</div>) }
import ListItems from './ListItems'

const ListIndex = () => { return (<div>List Index</div>) }
//const Header = () => { return (<div><h1>Contact</h1></div>) }

class Contacts extends Component {
  config = {
    name : 'Contact Master',
    fields : ['Code', 'Company', 'Contact', 'Tel', 'Fax', 'Email'],
    title : [
      { 'f' : 'Code' },
      { 'f' : 'Company' },
      { 'f' : 'Contact' },
      { 'f' : 'Tel' },
      { 'f' : 'Fax' },
      { 'f' : 'Email', 't' : 'Email Address' },
    ],
  }

  state = {
    items: [],
    total: 0,
    filter: '',
  }

  onAction = {
  }

  constructor(props){
    super(props);
    console.log(props);
    let { parent } = props;
    if(parent){
      parent.setHeader('Contact');
    }
    //this.UpdateFilter = this.UpdateFilter.bind(this);
    this.onAction.filter = this.onFilter;
    this.onAction.create = this.onCreate;
    this.onAction.change = this.onChange;
  }

  componentDidMount(){
    var { items } = this.state;

    var f = new Promise(function(resolve) {
        // this timeout is only here for demo purpose ;)
        setTimeout(function() {
          resolve();
        }, 2000);
    });

    f.then(() => {
      items.push(this.NewObj({id: 1, 'Code': 'C1', 'Contact': 'May', 'Company': 'May Limited', 'Tel': '111'}));
      items.push(this.NewObj({id: 2, 'Code': 'C2', 'Contact': 'Sam', 'Company': 'Sam Limited', 'Tel': '222'}));
      items.push(this.NewObj({id: 3, 'Code': 'C3', 'Contact': 'John', 'Company': 'John Limited', 'Tel': '333'}));
      items.push(this.NewObj({id: 4, 'Code': 'C4', 'Contact': 'Stephen', 'Company': 'Stephen Limited', 'Tel': '444'}));
      items.push(this.NewObj({id: 5, 'Code': 'C5', 'Contact': 'Susan', 'Company': 'Susan Limited', 'Tel': '555'}));
      let total = items.length;
      this.setState({items, total});
    });
  }

  NewObj = (data) => {
    let ret = Object.assign({}, data);
    //console.log('start', ret);
    this.config.title.forEach((title) => {
      ret[title.f] = ret[title.f] || '';
    });
    //console.log('end', ret);
    return ret;
  }

  UpdateItems = (items) => {
    let { total } = this.state
    total = items.length
    this.setState({items, total})
  }

  onFilter = (filter) => {
    this.setState({filter});
  }

  onCreate = (filter) => {
    this.setState({filter});
  }

  onChange = (filter) => {
    this.setState({filter});
  }

  render(){
    //console.log(this.props);
    let { items } = this.state.items;
    return (
      <div>
        <ListToolbar filter={ this.state.filter } on={ this.onAction }/>
        <ListItems config={this.config} filter={ this.state.filter } items={this.state.items} UpdateItems={this.UpdateItems}/>
        <ListIndex />
      </div>
    )
  }

}

//Contacts.propTypes = {
//  route: {
//    parent: PropTypes.func
//  }
//};

export default Contacts
