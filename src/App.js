import Calculate from './Components/calculate';
import {ContextProvider} from './Context';

function App() {
 
  return (

    <ContextProvider>
        <Calculate />
    </ContextProvider>
  );
}

export default App;
