import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './actions/counterActions.js';
import { login, logout } from './actions/isLoggedActions.js';

function App() {

  //useSelector is used to extract the store state from the redux store
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  
  //useDispatch allows us to dispatch actions to the store reducer
  const dispatch = useDispatch();

  const incrementAction = () => dispatch(increment());
  const decrementAction = () => dispatch(decrement());
  const loginAction = () => dispatch(login());
  const logoutAction = () => dispatch(logout());

  return (
    <div className="App">
      <h1>Verified Access Only</h1>
      
      {!isLogged? <button onClick={loginAction}>Login</button> : <button onClick={logoutAction}>Logout</button>}
      
      {
        isLogged?<>
                  <h1>Counter: {counter}</h1>
                  <button onClick={incrementAction}>+</button>
                  <button onClick={decrementAction}>-</button>
                </>:''
      }
    </div>
  );
}

export default App;
