import React from 'react'

const EditPage = (props) => {

    console.log(props)

    return (
        <p>Editing the expense with id of {props.match.params.id}</p>
    )
}

export default EditPage