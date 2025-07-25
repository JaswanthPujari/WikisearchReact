import { Component} from "react";
import './App.css';

class App extends Component{
  state={searchInput:'',wikisearch:[]}
  change1=event=>{
    this.setState({searchInput:event.target.value})
  }
  change2=async(event)=>{
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
      this.setState({wikisearch:formatteddata})
    }
  }
  }
  render(){
    const {searchInput,wikisearch}=this.state
    return(
      <div className="bg">
        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png" alt="wiki" className="im1" />
        <input type="search" placeholder="Search" value={searchInput} onChange={this.change1} onKeyDown={this.change2}/>
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
}
export default App