import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ActionLink from './containers/ActionLink'
import { addContact } from './actions'

import '../../css/ListTable.css'

class ListItems extends Component {

  state = {
    'items' : [],
    'total' : 0,
  }

  constructor(props){
    super(props)
    console.log('ListItems.js', props)
  }

  componentDidMount(){
    console.log('componentDidMount', this.props.contacts);
    var { contactlist } = this.props.contacts;

    var f = new Promise(function(resolve) {
        // this timeout is only here for demo purpose ;)
        setTimeout(function() {
          resolve();
        }, 2000);
    });

    f.then(() => {
      contactlist.push(this.NewObj({id: 1, 'Code': 'C1', 'Contact': 'May', 'Company': 'May Limited', 'Tel': '111'}));
      contactlist.push(this.NewObj({id: 2, 'Code': 'C2', 'Contact': 'Sam', 'Company': 'Sam Limited', 'Tel': '222'}));
      contactlist.push(this.NewObj({id: 3, 'Code': 'C3', 'Contact': 'John', 'Company': 'John Limited', 'Tel': '333'}));
      contactlist.push(this.NewObj({id: 4, 'Code': 'C4', 'Contact': 'Stephen', 'Company': 'Stephen Limited', 'Tel': '444'}));
      contactlist.push(this.NewObj({id: 5, 'Code': 'C5', 'Contact': 'Susan', 'Company': 'Susan Limited', 'Tel': '555'}));
      let total = contactlist.length;
      this.setState({contactlist, total});
    });
  }

  NewObj = (data) => {
    let ret = Object.assign({}, data);
    //console.log('start', ret);
    this.props.config.title.forEach((title) => {
      ret[title.f] = ret[title.f] || '';
    });
    //console.log('end', ret);
    return ret;
  }

  render(){
    //let { items } = this.props;
    let items = [];

    let filter = this.props.filter.toLowerCase();

    let title = this.props.config.title;

    console.log('contacts', this.props.contacts);

    if(this.props.contacts.contactlist){
      this.props.contacts.contactlist.forEach((item) => {
        var flag = false;
        title.forEach((title) => {
          // filter != '' && 
          if (item[title.f].toLowerCase().indexOf(filter) === -1){
            return;
          }else{
            flag = true;
            return true;
          }
        });
        if(flag) items.push(item);
      });
    }
//    console.log(title);

    return (
      <div>
        <button onClick={this.props.addContact}>Add</button>
        <table className='ListTabe-Panel ListTabe-Panel-1st table table-striped table-hover'>
          <thead className='panel-heading'>
            <tr>
              {
                title ? title.map((c, i) =>
                  <td key={i} className="text-left text-left-default">
                    { c.t ? c.t : c.f }
                  </td>
                ) : null
              }
            </tr>
          </thead>
          <tbody>
              {
                items ? items.map((r, i) =>
                  <tr key={i} className="panel">
                    {
                      title ? title.map((c, j) =>
                        <td key={ i+'_'+j } className="text-left text-left-default">
                          { r[c.f] }
                        </td>
                      ) : null
                    }
                  </tr>
                ) : null
              }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={title.length}>{ items.length }</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    'contacts' : state.contacts
  };
}

const mapDispatchToProps = (dispatch, ownProps = {}) => {
  return bindActionCreators({
    addContact: addContact
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);