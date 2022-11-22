import React, { Component } from 'react';
// function handlechange(data) {
//     alert(`xóa id: ${data.id} Name: ${data.name} thành công`);
// }
class SelectAction extends Component {
    constructor(props) {
        super(props);
        console.log(props.data);
        this.state = {
            id: props.data.id,
            name: props.data.Name,
        };
    }

    render() {
        return (
            <div>
                {/* <select name="" id="" onChange={handlechange(this.state)}> */}
                <select name="" id="">
                    <option value="0">Select:</option>
                    <option value="1">Xóa</option>
                    <option value="2">Sửa</option>
                </select>
            </div>
        );
    }
}

export default SelectAction;
