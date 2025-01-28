import { useRef } from "react";
import Cookies from "js-cookie";

function FormDemo(){

   let txtUname=useRef();
    let txtPassword=useRef();

    function funSubmit(event){
        event.preventDefault();
        console.log(txtUname.current.value,txtPassword.current.value);
        Cookies.set(txtUname.current.value,txtPassword.current.value,{expires:2});

    }
    function funRead(){
        var txt=prompt("Enter the cookie name");
        Cookies.remove(txt);

    }
    function funRemove(){
        var txt=prompt("Enter the cookie name");
        var res=Cookies.get(txt);
        console.log(res);

    }
  return(
    <>
     <h3>Uncontrolled Form!!</h3>
        <form>
        <div>
            <div>
            UserName:<input type="text" ref={txtUname}></input>
            </div>
            <div>
                Password:<input type="text" ref={txtPassword}></input>

            </div>
            <div>
                <input type="submit" value="Submit"  onClick={funSubmit}></input>
            </div>
            <div>
            <input type="button" value="Read"  onClick={funRead}></input>
            </div>
            <div>
            <input type="button" value="Remove"  onClick={funRemove}></input>
            </div>
        </div>
        </form>
    </>
  );
}
export default FormDemo;
