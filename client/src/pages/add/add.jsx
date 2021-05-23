import React from 'react'
import Label from "../../components/label/label.component";

function Add() {
    return (
        <div className='text-center'>
            <h2>Add new business</h2>
            <form action='' method="POST" className='mt-6 text-left'>
                <Label title='Hello' required/>
            </form>
        </div>
    )
}

export default Add;
