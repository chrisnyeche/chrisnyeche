import {Component} from "react"

const imgs = [{author:"The Lazy Artist Gallery", tag:"People", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/1.jpg?raw=true"},
              {author:"Daria Shevtsova", tag:"Food", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true"},
              {author:"Kasuma", tag:"Animals", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/3.jpg?raw=true"},
              {author:"Dominika Roseclay", tag:"Plants", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true"},
              {author:"Scott Webb", tag:"Plants", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true"},
               {author:"Jeffrey Czum", tag:"People", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true"},
              {author:"Dominika Roseclay", tag:"Food", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/7.jpg?raw=true"},
              {author:"Valeria Boltneva", tag:"Animals", src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true"}
];

const filters = [
  {name:"People", status: false},
  {name:"Animals", status: false},
  {name:"Plants", status: false},
  {name:"Food", status: false}
];

const Filters = ({onClickAll, all, onClick, filters}) =>
  <form>
    <ul>
      <li onClick={onClickAll}>
        <input 
          type="checkbox"
          checked={all}
        />
        <label htmlFor="all">All</label>
      </li>
       {filters.map(
        (filter, i)=>
          <li  key={i} data-index={i} onClick={onClick} >
            <input 
              id={filter.name} 
              type="checkbox" 
              checked={filter.status}
            />
            <label htmlFor={filter.name}>{filter.name}</label>
          </li>)}
    </ul>
  </form>

const Cards = ({imgs}) =>
  <ul>
    {imgs.map(
      (img, i)=>
      <li  key={i}>
        <figure>
          <img src={img.src} alt={img.author}/>
          <figcaption> 
            <div>{img.author} </div>
            <span>{img.tag}</span>
          </figcaption>
        </figure>
      </li>)}
  </ul>

class App extends Component{
  state ={
    imgs, 
    filters,
    all: true
  };

  setFilter = (e) =>{
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;
   
    filters[index].status = !filters[index].status;
    this.setState({
      filters
    });
    
    this.updateFilters();
    this.updateImgs();
  }
  
  setAll = () =>{
    const {filters} = this.state;
    
    filters.forEach( 
      filter => {
        filter.status = false;
      }
    );
    
    this.setState({
      all: true,
      filters
    });
  }
  
  updateFilters(){
    const allFiltersTrue = filters.every( filter => filter.status === true);
    const allFiltersFalse = filters.every( filter => filter.status === false);
    
    if(allFiltersTrue||allFiltersFalse){
      this.setAll();
    }else{
      this.setState({
        all: false
      });
    } 
  }
  
  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;
    
    imgs.forEach((img, imgKey) => { 
      filters.forEach((filter, filterKey)=> {  
        if((img.tag==filter.name)&&(filter.status==true)){
          newImgs[a] = img;
          a++;
        }
      })
    });
        
    this.setState({
      imgs: newImgs
    });
  }

  render(){
    const {filters, all} = this.state;  
    return(
      <div>
        <Filters 
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters} />
        {(all)?(
            <Cards imgs = {imgs}/>
          ):(
            <Cards imgs = {this.state.imgs}/>
        )}
        <div className="photo-source">
          All photos are from &nbsp;
          <a href="https://www.pexels.com">
             www.pexels.com
          </a>
        </div>
      </div>
    );
  }
}
