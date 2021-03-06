import React from "react";

function SearchContainer(props){
    return (
        <div className="search">
            <div className="form-group">
                <label htmlFor="employee-search">Employee Search</label>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                className="form-control"
                placeholder="Search by Age"
                id="employee-search"
                />
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </div>
    )
};

export default SearchContainer;