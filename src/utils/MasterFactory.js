import React, { Component } from 'react'

const Master = (Component) => {
  return class extends React.Component {
    config = {
      name : 'Unknown',
      fields : ['NA'],
      title : [
        { 'f' : 'NA', 't' : 'N/A' },
      ],
    }

    constructor(props){
      super(props);
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
  //    var { items } = this.state;
  //
  //    var f = new Promise(function(resolve) {
  //        // this timeout is only here for demo purpose ;)
  //        setTimeout(function() {
  //          resolve();
  //        }, 2000);
  //    });
  //
  //    f.then(() => {
  //      items.push({id: 2, 'name': 'Sam'});
  //      items.push({id: 3, 'name': 'John'});
  //      items.push({id: 4, 'name': 'Stephen'});
  //      items.push({id: 5, 'name': 'Susan'});
  //      let total = items.length;
  //      this.setState({items, total});
  //    });
    }

    UpdateItems = (items) => {
  //    let { total } = this.state
  //    total = items.length
  //    this.setState({items, total})
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
      return <Component {...this.props} {...this.state} />
    }

  //  render(){
  //    //console.log(this.props);
  //    let { items } = this.state.items;
  //    return (
  //      <div>
  //        <ListToolbar filter={ this.state.filter } on={ this.onAction }/>
  //        <ListItems filter={ this.state.filter } items={this.state.items} UpdateItems={this.UpdateItems}/>
  //        <ListIndex />
  //      </div>
  //    )
  //  }

  }
}
//Contacts.propTypes = {
//  route: {
//    parent: PropTypes.func
//  }
//};

export default Master
