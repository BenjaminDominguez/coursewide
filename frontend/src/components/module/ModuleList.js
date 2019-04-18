import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCourseInfo } from '../../actions/courseActions';

class ModuleList extends Component {

    componentDidMount = () => {
        if (!this.props.modules) {
            this.props.getCourseInfo(this.props.match.params.id)
            this.props.modules = this.state.course.modules
        }
    }

  render() {

    return (
    <div>
      <ul className="modules-ul">
        {this.props.modules.map((module) => (<li className={module.order === parseInt(this.props.order, 10) ? "module-list-item active" : "module-list-item"}> { module.name } </li> ) ) }
      </ul>
    </div>
    )
  }
}

const mapStateToProps = state => ({
    modules: state.course.modules
})

export default connect(mapStateToProps, { getCourseInfo })(ModuleList);