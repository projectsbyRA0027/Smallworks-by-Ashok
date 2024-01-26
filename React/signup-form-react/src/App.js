
import './App.css';

function App() {
  return(
    <div className="App">
      <h1>Signup Form in  React</h1>
      <fieldset>
        <form action="#" method="get">
          <div className ="row g-3 align-items-center"></div>
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
             <label htmlFor="email">E-Mail Address</label>
             <input type="email"
             name="email"
             id="email"
             placeholder="Enter your Email"
             requried /> 
             <br /><br />
             <label htmlFor="contact">Contact number</label>
             <input type="text"
             name="contact"
             id="contact"
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
             <label for="lang">Your Best Subject</label>
             <br />
             <input type="checkbox" name="lang" id="english" checked/>
             English
             <input type="checkbox" name="lang" id="maths" />
             Maths
             <input type="checkbox" name="lang" id="physics"/>
             Physics
             <br /><br />
             <label htmlFor="file">Upload Resume</label>
             <input 
             type="file"
             name="file"
             id="file"
             placeholder="Enter Upload File"
             required 
             />
             <br /><br />
             <label htmlFor="url">Enter URL</label>
             <input 
             type="url"
             name="url"
             id="url"
             placeholder="Enter url"
             required
              />
              <br /><br />
              <label>Select Your Choice</label>
              <select name="select" id="select">
                <option value="" disabled selected>
                  Select Your Ans
                </option>
                <optgroup label="Beginers">
                  <option value="1">HTML</option>
                  <option value="2">CSS</option>
                  <option value="3">JavaScript</option>
                </optgroup>
                <optgroup label="Advance">
                    <option value="1">React</option>
                    <option value="2">Node</option>
                    <option value="3">Express</option>
                    <option value="4">MongoDB</option>
                </optgroup>
              </select>
              <br /><br />
              <label htmlFor="about">About</label>
              <br />
              <textarea 
              name="about" 
              id="about" 
              cols="30" 
              rows="10"></textarea>
              <br /><br />
              <label htmlFor="#">Submit OR Reset</label>
              <br />
              <button type="reset" value="reset">
                Reset
              </button>
              <button type="submit" value="Submit">
                Submit
              </button>
        </form>
      </fieldset>
    </div>
  );
}
  

export default App;
