
import { FaTrashAlt } from "react-icons/fa";
import './Maincontent.css';

const Maincontent = (items, handleChange, handleDelete) => {



  return (
    <div>
      {(items.length) ? (<ul>
        {items.map((item) =>
        (< li className='item' >
          <input
            type="checkbox"
            role='button'
            tabIndex="0"
            onChange={() => handleChange(item.id)}
            checked={item.checked}
          />
          <label

            onClick={() => handleChange(item.id)}
            style={(item.checked) ? { textDecoration: 'line-through' } : null}>{item.item}</label>
          <FaTrashAlt
            role='button'
            tabIndex="0"
            onClick={() => handleDelete(item.id)}
            aria-label={`Delete ${item.item}`}

          />
        </li>
        ))}
      </ul>) : (<p>List is empty</p>)
      }
    </div >
  )
}

export default Maincontent