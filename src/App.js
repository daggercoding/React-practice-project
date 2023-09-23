import './App.css';
import Box from './Components/Box';
import Circle from './Components/Circle';
import Text from './Components/Text';
import Timer from './Components/Timer';
import { useState,useEffect } from 'react';

function App() {
const[disp1,setDisplay1]=useState(false);
const[disp2,setDisplay2]=useState(false);
const[disp3,setDisplay3]=useState(false);
const[disp4,setDisplay4]=useState(false);
const[timer,setTimer]=useState(10);
const[start,stop]=useState(false)

useEffect(()=>{
  let interval;
  if(start)
  {
    interval=setInterval(()=>{
    setTimer(timer-1)
    console.log(timer)
    },1000)
  }
  if(timer===0)
  {
    clearInterval(interval)
  }
  return()=>clearInterval(interval)
},[timer,start])


function box1()
{
 setDisplay1(!disp1)
 setDisplay2(false)
 setDisplay3(false)
 setDisplay4(false)
 stop(true)
 setTimer(10)
 }

function box2()
{
 setDisplay2(!disp2)
 setDisplay1(false)
 setDisplay3(false)
 setDisplay4(false)
 stop(true)
 setTimer(10)
}
function box3()
{
 setDisplay3(!disp3)
 setDisplay2(false)
 setDisplay1(false)
 setDisplay4(false)
 stop(true)
 setTimer(10)
}
function box4()
{
 setDisplay4(!disp4)
 setDisplay3(false)
 setDisplay2(false)
 setDisplay1(false)
 stop(true)
 setTimer(10)
}


  return (
<>
<div className='container'>

{disp1?<Box position="left2"/>:null}
{disp1?<Timer>{timer}</Timer>:null}
{disp2?<Box position="right2"/>:null}
{disp2?<Timer>{timer}</Timer>:null}
{disp3?<Box position="bottomRight2"/>:null}
{disp3?<Timer>{timer}</Timer>:null}
{disp4?<Box position="bottomLeft2"/>:null}
{disp4?<Timer>{timer}</Timer>:null}


<Box position="left" name="Box1" onClick={box1}/>
<Text position="left1" height="80px" width="20px">h<br/>e<br/>l<br/>l<br/>o</Text>

<Box position="right" name="Box2" onClick={box2}/>
<Text position="right1" height="20px" width="80px">Vishal</Text> 

<Box position="bottomRight" name="Box3" onClick={box3} />
<Text position="bottomRight1" height="80px" width="20px">S<br/>i<br/>n<br/>g<br/>h</Text>


<Box position="bottomLeft" name="Box4" onClick={box4}/>
<Text position="bottomLeft1"  height="20px" width="80px">Raj</Text>

<Circle/>



</div>
</>
    
  );
}

export default App;
