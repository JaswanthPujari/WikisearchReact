import { useState} from "react";
import './App.css';

const App=()=>{
 
const [searchInput,setsearchinput]=useState('');
  const [wikisearch,setwikisearch]=useState([])
 const change1=event=>{
   setsearchinput(event.target.value)
  }
const  change2=async(event)=>{
    if(event.key==='Enter'){
    const {searchInput}=this.state
    const url=`https://apis.ccbp.in/wiki-search?search=${searchInput}`
    const options={
      method:'GET'
    }
    const response=await fetch(url,options)
    const data=await response.json()
    if(response.ok){
      const formatteddata=data.search_results
      setwikisearch(formatteddata)
    }
  }
  }

    return(
      <div className="bg">
        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png" alt="wiki" className="im1" />
        <input type="search" placeholder="Search" value={searchInput} onChange={change1} onKeyDown={change2}/>
        {wikisearch.length>0?
        <div>
          {wikisearch.map(each=>(
            <>
            <h1><a href={each.link}>{each.title}</a></h1>
            <a href={each.link}>{each.link}</a>
            <p>{each.description}</p>
            </>
          ))}
          </div>:<h1>Enter your search input to get results</h1>}
      </div>
    )
  }

export default App