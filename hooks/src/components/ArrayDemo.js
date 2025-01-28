
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
        <table border="2">
        <tr>
                    <th>Rollno</th>
                    <th>Name</th>
                    <th>marks</th>
                    
                </tr>
        {
                    student.map((x)=>{
                        return <tr key={x.rollno} onClick={()=>{rowClick(x)}}>
                            <td>{x.rollno}</td>
                            <td>{x.name}</td>
                            <td>{x.marks}</td>
                            
                        </tr>
                    })
                }
        </table>
      
    </>
  );
}
export default ArrayDemo;
