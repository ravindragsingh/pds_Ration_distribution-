import React, {Component} from 'react';
import './comp.css'

class farmerList extends Component {

    render() {
        let {type, quantity, produceid,owner} = this.props.produce;
        console.log(this.props.produce);
        return (

            <div className="tableSection">
               <table className="table">
                <tr className="td">
                    <td>{owner.name}</td>
                    <td>{owner.type}</td>
                    <td>{type}</td>
                    <td>{quantity}</td>
                    <td>{produceid}</td>
                </tr>
                </table>
            </div>
        )
    }
}

export default farmerList;