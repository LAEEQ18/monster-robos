import React , {Component}from 'react';
// import logo from './logo.svg';

import {CardList} from './components/card-list/card-list.components';
import {SearchBox} from './components/saerch-box/search-box.component';
import './App.css';
import './index.css';

// function App() {
 
// } instead of function we write class of that function below

class App extends Component {
  constructor(){
    super();
    // this.state={string: "Hello Maliks ..!"}
    this.state={
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    // .then(users=>console.log(users))
    .then(users=>this.setState({monsters:users}));
  }

  handlechange = e =>
     {
      this.setState({searchField: e.target.value})
    };
  render() {

    const {monsters,searchField}=this.state;
    const FilterMonster = monsters.filter(monsters=> monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex @M.L</h1>
        <SearchBox
          placeholder='search-monsters'
          handlechange = {this.handlechange}

         
  
      
      />
        <CardList monsters = {FilterMonster}>
          {/* {<h1>Maliks..</h1>   these are childrens so here i pass monsters name }  after i shift map function card-list file*/}
          
          
        </CardList>
        

      </div>
    );
  }
}

export default App;
