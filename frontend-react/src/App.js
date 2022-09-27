import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Label from './components/Label';
import Logo from './components/Logo';
import Points from './components/Points';
import Scoreboard from './components/Scoreboard';
import MaxScore from './components/MaxScore';

function App() {
  const [details, setDetails] = useState([{}])

  useEffect(() => {
    fetch("/api/image").then(
      response => response.json()
    ).then(
      data => {
        setDetails(data)
        console.log(details)
      }
    )
  }, [])
  return (
    // <div className="bg-gray-800 h-screen">
    //   <Logo/>
    //   <div className="flex justify-center">
    //     <img className="mt-[20px] max-h-[500px] max-w-[500px]" src={"https://farm4.staticflickr.com/3859/15276702002_4c8e11c657_o.jpg"}/>
    //   </div>
    //   <div className="mt-[20px] flex justify-center space-x-3 text-gray-800 text-[40px]">
    //     <button className="bg-yellow-200">
    //       {details.Display}
    //     </button>
    //     <button className="bg-yellow-200">
    //       Dog
    //     </button>
    //     <button className="bg-yellow-200">
    //       Bus
    //     </button>
    //     <button className="bg-yellow-200">
    //       Train
    //     </button>
    //   </div>
    // </div>
    <div className="h-screen font-mono">
      <div className="flex justify-center mt-[30px]">
        <Logo/>
      </div>
      <div className="h-[100px]">
      </div>
      <div className="flex justify-center mb-20">
        <img className="mt-[20px] max-h-[500px] max-w-[500px]" src={details.OriginalURL}/>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center">
          <grid className="grid grid-cols-4 gap-2">
            <button>
              <Label label={details.Display} className="h-[200px] w-[200px]"/>
            </button>
            <button>
              <Label label={"dog"}/>
            </button>
            <button>
              <Label label={"chicken"}/>
            </button>
            <button>
              <Label label={"bus"}/>
            </button>
          </grid>
        </div>

      </div>
      <div className="flex justify-center pt-10">
        <Points/>
        <Scoreboard/>
        <MaxScore/>
      </div>
      <div>
        <button className="">
          New Image
        </button>
      </div>
    </div>

  );
}

export default App;
