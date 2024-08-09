import { useState } from "react"
function Category(){
    const [select, setSelect]=useState('All')
    const selectCategory=(e)=>{
        console.log(e.target.value)
        setSelect(e.target.value)
    }
    return(
        <div className="category">
            <h1>{select} News</h1>
            <div className="select">
                <label>Choose a Category</label>
                <select className="select-box" name="category" id="category"
                onChange={selectCategory}>
                    <option value="All">All</option>
                    <option value="Science">Science</option>
                    <option value="Sports">Sports</option>
                    <option value="India">India</option>
                    <option value="World">World</option>
                    <option value="Politics">Politics</option>
                    <option value="Technology">Technology</option>
                </select>
            </div>
        </div>
    )
}
export default Category