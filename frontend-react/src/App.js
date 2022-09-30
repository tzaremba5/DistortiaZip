import './App.css';
import { useEffect, useState} from 'react';

import Label from './components/Label';
import Logo from './components/Logo';

import Points from './components/Points';
import Scoreboard from './components/Scoreboard';
import MaxScore from './components/MaxScore';

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function App() {

  let distortions = [1, 2, 3, 4, 5, 12, 20]
  const [distortI, setDistortI] = useState(3)
  const [blurString, setBlurString] = useState('blur-[0px]')

  const [details, setDetails] = useState([{}])
  const [details2, setDetails2] = useState([{}])
  const [details3, setDetails3] = useState([{}])
  const [details4, setDetails4] = useState([{}])
  let detailsArr = []
  detailsArr = [details, details2, details3, details4]
  
  const [correctChoice, setCorrectChoice] = useState(random(0, 3))
  const [score, setScore] = useState(0)
  const [worldRecord, setWorldRecord] = useState(20)

  const handleClick = async (choice) => {
    if (choice == correctChoice) {
      setScore(score + 1)
    } else {
      setScore(0)
    }

    setDistortI(distortI + 1)
    if (distortI < 7){
      setBlurString(`blur-[${distortions[distortI]}px]`)
    }

    setCorrectChoice(random(0, 3))
    try {
      // Sets all the details
      const response = await fetch("/api/image")
      const result = await response.json();
      setDetails(result);

      const response2 = await fetch("/api/image")
      const result2 = await response2.json();
      setDetails2(result2);

      const response3 = await fetch("/api/image")
      const result3 = await response3.json();
      setDetails3(result3);

      const response4 = await fetch("/api/image")
      const result4 = await response4.json();
      setDetails4(result4);


    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetch("/api/image", {method: 'GET'}).then(
      (response) => response.json()
    ).then(
      data => {
        setDetails(data)
      }
    )
    fetch("/api/image", {method: 'GET'}).then(
      (response) => response.json()
    ).then(
      data => {
        setDetails2(data)
      }
    )
    fetch("/api/image", {method: 'GET'}).then(
      (response) => response.json()
    ).then(
      data => {
        setDetails3(data)
      }
    )
    fetch("/api/image", {method: 'GET'}).then(
      (response) => response.json()
    ).then(
      data => {
        setDetails4(data)
      }
    )
  }, [])
  return (
    <div className="bg-gray-900 h-screen font-mono">
      <div className="flex justify-center mt-[30px]">
        <Logo/>
      </div>
      <div className="h-[100px]">
      </div>
      <div className="flex justify-center mb-20">
        <img className={`transition delay-150 rounded-xl pointer-events-none mt-[20px] blur-[5px] h-[500px] w-[500px]`} src={detailsArr[correctChoice].OriginalURL} blurRadius={10}/>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center">
          <grid className="grid grid-cols-4 gap-2">
            <button onClick={() => handleClick(0)}>
              <Label label={details.Display} className="h-[200px] w-[200px]"/>
            </button>
            <button onClick={() => handleClick(1)}>
              <Label label={details2.Display}/>
            </button>
            <button onClick={() => handleClick(2)}>
              <Label label={details3.Display}/>
            </button>
            <button onClick={() => handleClick(3)}>
              <Label label={details4.Display}/>
            </button>
          </grid>
        </div>

      </div>
      <div className="flex justify-center pt-10">
        <Points score = {score}/>
        <Scoreboard percent = {'5'}/>
        <MaxScore worldRecord={worldRecord}/>
      </div>
      <div>
      </div>
    </div>

  );
}

export default App;
