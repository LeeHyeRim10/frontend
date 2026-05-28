import React from 'react'
// import { EmployeeContext } from '../../no0_context/EmployeeContext'
import { useDispatch, useSelector } from 'react-redux';
import { select } from '../../no3_store/slices/employSlice';

const EmployeeList = () => {

    const { empTable } = useSelector(state => state.emp);
    const dispatch = useDispatch();

    return (
        <div>
            {empTable?.map(item => (
                <button
                    key={item.id}
                    onClick={() => dispatch(select(item.id))}
                >
                    {item.name}
                </button>
            ))}
        </div>
    )
}

export default EmployeeList