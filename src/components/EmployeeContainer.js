import React from "react";

// l2map
function EmployeeContainer(props) {
    return (
        <table>
            <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Cell</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>            
            {props.results.map((result) => {
                return (
                <tr key={result.id.value}  >
                <td><img src={result.picture.thumbnail} alt={result.name.first}/></td>
                <td>{result.name.first} {result.name.last}</td>
                <td>{result.cell}</td>
                <td>{result.email}</td>
                <td>{result.dob.age}</td>
                </tr>
                )
            })}
            </tbody>
        </table>
    )
};

export default EmployeeContainer;