
function ArrayDemo(){
  var color=["red","yellow","pink","green","blue","black"];
  return(
    <>
    <div>
    <ul>
    {
      color.map((x,ind)=>{
       return <li>{x}{ind}</li>
        
      })
    }
    </ul>
    </div>
    </>
  );
}
export default ArrayDemo;
