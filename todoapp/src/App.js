// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import Home from "./component/Home";
// import Main from "./component/Main";
import "bootstrap/dist/css/bootstrap.min.css";
// import Keys from "./component/Keys";
// import Theme from "./Theme";
// import Effects from "./component/Effects";

// import Quotes from "./component/Quotes";
// import HookCounter from "./component/HookCounter";
// import SignupForm from "./component/SignupForm";
// import Todo from "./component/Todoapp/Todo";
// import Demo from "./component/Demo";
// import Label from "./component/Label";


function App() {
  // const [color,setColor] = useState('white')
  // const click = color => {
  //   setColor(color)
  // }
  // useEffect(()=>{
  //   document.body.style.backgroundColor = color
  // },[!color])

  // const [name,setName] = useState("Muhammed Aman")

  // const resetName = () => {
  //   setName('');
  // }

  // useEffect(()=>{

  // },[])

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((posts) => setPosts(posts.splice(0, 10)));
  // }, []);



  const users = [
    {id:1,name:"Aman",age:20},
    {id:2,name:"Alice",age:25},
    {id:3,name:"Charlie",age:28}
  ]
const [count,setCount] = useState(0)

const handle2 = () => {
  setCount((prv)=>prv+1)
  setCount((prv)=>prv+1)
}


const handle5 = () => {
  setCount(count+5)
}
const handle3 = () => {
  setCount(count+3)
}

  return (
    <div className="App">
    {/* <h1 className="bg-primary">Sign up</h1> */}
    
      {/* {posts.map((post) => (
        <div key={post.id}>
          <h1 className="text-success">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))} */}

      {/* <button onClick={
        () => {click('black')}
      }>Switch Theme</button> 
      <Home />
      <Main isLoggedin={true} /> */}
      {/* <Theme /> */}
      {/* <Keys /> */}
      {/* <h1>Welcome {name}</h1>
      <button onClick={resetName}>Reset</button> */}
      {/* <Effects /> */}
      {/* <Quotes/> */}
      {/* <HookCounter/> */}
      {/* <SignupForm/> */}
      {/* <Sidebar><Content/></Sidebar> */}
      {/* <Todo/> */}
      {/* <Demo/> */}
      {/* <Label/> */}
{/* 
      {users.map(user => (
        <li key={users.id}>{user.name}-{user.age}</li>
      ))} */}


<button onClick={handle2}>incrementby2</button>
<h2>{count}</h2>
<button onClick={handle5}>incrementby5</button>
<button onClick={handle3}>incrementby3</button>
    </div>
  );
}

// function Sidebar(props){
//   return <div>
//     {props.children}
//   </div>
// }

// function Content(){
//   return(
//     <div>
//     <h1>Sidebar data 1</h1>
//     <h1>Sidebar data 2</h1>
//     <h1>Sidebar data 3</h1>
//     </div>
//   )
// }

export default App;
