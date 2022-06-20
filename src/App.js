import './App.css';
import User from "./profile/component/User";
import PropTypes from "prop-types";


function App() {
  const alertMyInput = name => alert(name);
  return (
     <div>
  
  <div>
     <User name="Amani" alertMyInput={alertMyInput} />
     
   </div>
 </div> 
  );
}
App.propTypes = {
  name: PropTypes.string
}

App.defaultProps = {
  name:"AT"
}

export default App;

