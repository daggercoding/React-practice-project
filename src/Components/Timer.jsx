
function Timer(prop)
{
return (
    <>
    <div className="timer">
   <h1  style={{fontSize:30,color:"black"}} >{prop.children}</h1>
   </div>
    </>
)
}
export default Timer;