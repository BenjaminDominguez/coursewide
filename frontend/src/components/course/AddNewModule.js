import React, { Component } from 'react';
import { newModule } from '../../actions/courseActions';
import { connect } from 'react-redux';

class AddNewModule extends Component {
  
  render() {
    return (
      <div>
        <form class="module-form">
            <div class="input-group">
                <h1> Add a new module </h1>
                <input onChange={this.props.handleEditChange} name="moduleName" type="text" className="module-input" placeholder="New module title"/>
                <button onClick={this.props.handleSubmit} className="module-temp-button">Add</button >
            </div>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.course.courseInfo.id,
    modules: state.course.courseInfo.modules
  }
}


export default connect(mapStateToProps, { newModule })(AddNewModule);