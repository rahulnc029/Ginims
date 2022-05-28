import React, { useState } from 'react';
import JsonData from '../db.json';

function Search() {
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='search'>
            <input type="text" placeholder='search...' onChange={onChange} />
            {JsonData.filter((val) => {
                if (search == "") {
                    return val;
                } else if (val.taskName.toLowerCase().includes(search.toLowerCase())) {
                    return val;
                }
            }).map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <h5>{val.taskName}&nbsp;&nbsp;{val.startDate}&nbsp;&nbsp;{val.endDate}&nbsp;&nbsp;{val.status}&nbsp;&nbsp;{val.priority}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default Search