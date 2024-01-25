import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className="App">
      <h1>Signup Form in  React</h1>
      <fieldset>
        <form action="#" method="get">
              <label htmlFor="firstname">First Name</label>
              <input type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter your First Name"
              required
              /> 
             <br /><br />
             <label htmlFor="lastname">Last Name</label>
             <input type="text"
             name="lastname"
             id="lastname"
             placeholder="Enter your Last Name"
             required /> 
             <br /><br />  
             <label htmlFor="email">E Mail Address</label>
             <input type="email"
             name="email"
             id="email"
             placeholder="Enter your Email"
             requried /> 
             <br /><br />
             <label htmlFor="email">EContact number</label>
             <input type="email"
             name="email"
             id="lastname"
             placeholder="Enter your mobile Number"
             requried /> 
             <br /><br />
             <label htmlFor="gender">Gender</label>
             <br />
             <input type="radio" name="gender" value="" id="male" />
             male
             <input type="radio" name="gender" value="" id="female" />
             female
             <input type="radio" name="gender" value="" id="other" />
             other
             <br /><br />
        </form>
      </fieldset>
    </div>
  )
}
  

export default App;
