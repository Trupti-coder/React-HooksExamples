
function ArrayDemo(){
  var color=["red","yellow","pink","green","blue","black"];
  
    var student=[
        {rollno:1,name:"aaa",marks:45},
        {rollno:2,name:"bb",marks:85},
        {rollno:2,name:"ccc",marks:65},
    ];
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
       {
                    color.filter((x)=>{
                        if(x.startsWith('b')){
                            return<li>{x}</li>
                        }

                    })
                }
      <ul>
      </ul>
    </div>
      
    </>
  );
}
export default ArrayDemo;
