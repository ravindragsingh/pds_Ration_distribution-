import React, {Component} from 'react';
import './comp.css'

class farmerList extends Component {

    render() {
        let {type, quantity, produceid,owner} = this.props.produce;
        console.log(this.props.produce);
        return (

            <tbody>
                            <tr className="td">
                                <td>{owner.name}</td>
                                <td>{owner.type}</td>
                                <td>{type}</td>
                                <td>{quantity}</td>
                                <td>{produceid}</td>
                            </tr>
                        </tbody>
        )
    }
}

export default farmerList;