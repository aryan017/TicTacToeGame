import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {StreamChat} from "stream-chat";
import Cookies from "universal-cookie"

function App() {
  const cookies=new Cookies();
  const api_key="hc629nv5h2uh";
  const token =cookies.get("token")
  const client =StreamChat.getInstance(api_key);
  
  if(token){
    client.connectUser({
      id:cookies.get("userId"),
      name:cookies.get("username"),
      firstName: cookies.get("firstName"),
      lastName: cookies.get("lastName"),
      hashedPassword: cookies.get("hashedPassword")
    },
    token
    ).then((user) => {
      console.log(user)
    })

  }
  
  return (
    <div className="App">
    <SignUp/>
    <Login/>
    </div>
  );
}

export default App;
