import Calculate from './Components/calculate';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (

    <>
        <Calculate />
    </>
  );
}
<Switch>
  <Route path="/" component={Calculate} />
</Switch>

export default App;
