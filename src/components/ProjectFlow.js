import React, {Component} from 'react';
import './comp.css';
import projectFlow from '../images/projectFlow.gif';

class ProjectFlow extends Component {

    render() {

        return (

            <div className="projectgif">
        		<img id="myImg" src={projectFlow} alt="project" />
        	</div>
        )
    }
}

export default ProjectFlow;
