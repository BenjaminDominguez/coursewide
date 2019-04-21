import React, { Component } from 'react';

class ModuleListItem extends Component {


  render() {

    const { name, handleModuleRedirect, order, moduleURL, activeOrder } = this.props;

    return (
      <div>
        <li 
        onClick={() =>  handleModuleRedirect(moduleURL,  order)} 
        className={ order === parseInt(activeOrder, 10) ? "module-list-item active" : "module-list-item"}> 
        { order }{"  "}{ name }
        </li>
      </div>
    )
  }
}

export default ModuleListItem;