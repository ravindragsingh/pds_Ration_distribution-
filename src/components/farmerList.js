import React, {Component} from 'react';
import './comp.css'

class farmerList extends Component {

    render() {
        let {type, quantity, produceid,owner} = this.props.produce;
        console.log(this.props.produce);
        return (

             <tbody>
                            <tr className="td">
                                <td className ="tdData">{owner.name}</td>
                                <td className ="tdData">{owner.type}</td>
                                <td className ="tdData">{type}</td>
                                <td className ="tdData">{quantity}</td>
                                <td className ="tdData">{produceid}</td>
                            </tr>
                        </tbody>
        )
    }
}

export default farmerList;