import React from "react";

export const useSearch = (props) => {
    const [searchValue, setSearchValue] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchValue);
        props.setSearchValue(searchValue);
        setSearchValue("");
    }

    return {
        searchValue,
        setSearchValue,
        handleSubmit,
    };
};
