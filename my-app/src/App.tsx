
import * as React from 'react';
import './App.css';
import ResultItem from './ResultItem'

interface IUser{
  name:string;
}

interface IState{
  title:string;
  users:IUser[]
}
const userList =[

    {
      name:"anill"

    },{
 name:"vijay"

    },{
 name:"Ram"

    },{
 name:"Laxman"

    },
    {
 name:"sita"

    }
  
  ]
class App extends React.Component<{},IState> {
  public state:Readonly<IState> ={
    title:"initial title",
    users:userList
 
}


 public  onBtnClick=()=>{
   this.setState({
     title:"new title"
   });
  }
  public onQuery=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const val=e.target.value;

    const filterUsers=userList.filter((u:IUser)=>{
      return u.name.includes(val);
    });
    this.setState({
      users:filterUsers
    })
    
  }
  public render() {
    const listItems=this.state.users.map((u,index) =>(<ResultItem  key={index} title={u.name}/>));
    return (
      <div className="App">
        <input type="text" onChange={this.onQuery}/>
      <ul>
          {listItems}
      </ul>

      </div>
    );
  }
}
  
export default App;
