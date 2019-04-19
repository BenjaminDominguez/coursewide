import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCourseInfo } from '../../actions/courseActions';
import ModuleListItem from './ModuleListItem';

class ModuleList extends Component {

    componentDidMount = () => {
      //If the user visited the page before the course page
      //For example, in their browser history
        if (this.props.modules.length === 0) {
            this.props.getCourseInfo(this.props.courseID)
        }
    }

  render() {

    return (
    <div>
      <ul className="modules-ul">
        {this.props.modules.map((module) => <ModuleListItem handleModuleRedirect={this.props.handleModuleRedirect} moduleURL={`/courses/${this.props.courseID}/modules/${module.order}`} name={module.name} activeOrder={this.props.order} order={module.order} /> ) }
      </ul>
    </div>
    )
  }
}

const mapStateToProps = state => ({
    modules: state.course.modules
})

export default connect(mapStateToProps, { getCourseInfo })(ModuleList);