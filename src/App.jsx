import './App.css'
import Lottery_Ticket from './Lottery Game/Lottery_Ticket .jsx'
import  {sum} from "./Lottery Game/helper.js";
import Form from './Form.jsx';
import CommentForm from './CommentForm.jsx';
import Comment from './Comment.jsx';
import Counter from './Counter.jsx';
import Joker from './Joker.jsx';
import TodoList from './TodoList/TodoList.jsx';

/*function App() {
  
  let winCondition = (ticketarr) =>{
    return sum(ticketarr)===15;
  }

  return (
    <>
    <Joker/>

    </>
  )
}

export default App
*/

function App(){
  return (
    <TodoList/>
  )
}

export default App;