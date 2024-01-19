import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './AddItem.css'

const AddItem = (props) => {



    return (
        <form className='addForm'>
            <label htmlFor="addItem">Add Item</label>
            <input type="text"
                autoFocus

                placeholder='Add Item'

                value={props.newItem}
                onChange={(e) => props.setNewItem(e.target.value)}

            />

            <button type='submit'
                aria-label='Add Item'>
                <FaPlus />

            </button>
        </form>
    )
}

export default AddItem