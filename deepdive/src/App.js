
import './App.css';
import UserList from './components/DataFetching';
import CustomButton from './components/ForwardingProps';

function App() {
  return (
    <div>
      <CustomButton onClick={()=>alert('Button Clicked')} className='my-button' ></CustomButton>;
      <UserList />

    </div>
 
  )
}

export default App;
