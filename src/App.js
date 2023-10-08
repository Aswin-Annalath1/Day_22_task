
import './App.css';
import FirstCode from './components/FirstCode';
function App() {

 const data=[
  {
    p:"FREE",
    num:"0",
    user:"✓ Single User",
    storage:"✓ 50GB Storage",
    req1:"✓ Unlimited Public Projects",
    req2:"✓ Community Access",
    req3:"✕ Unlimited Private Projects",
    req4:"✕ Dedicated Phone Support",
    req5:"✕ Free Subdomain",
    req6:"✕ Monthly Status Reports"
  },
  {
    p:"PLUS",
    num:"9",
    user:"✓ 5 Users",
    storage:"✓ 50GB Storage",
    req1:"✓ Unlimited Public Projects",
    req2:"✓ Community Access",
    req3:"✓ Unlimited Private Projects",
    req4:"✓ Dedicated Phone Support",
    req5:"✓ Free Subdomain",
    req6:"✕ Monthly Status Reports"
  },
  {
    p:"PRO",
    num:"49",
    user:"✓ Unlimited Users",
    storage:"✓ 50GB Storage",
    req1:"✓ Unlimited Public Projects",
    req2:"✓ Community Access",
    req3:"✓ Unlimited Private Projects",
    req4:"✓ Dedicated Phone Support",
    req5:"✓ Free Subdomain",
    req6:"✓ Monthly Status Reports"
  }
 ]

  return (
    <div className="App">
      {
        data.map((element)=>(
          <FirstCode {...element}/>
        ))
      }
      
    </div>
  );
}

export default App;
