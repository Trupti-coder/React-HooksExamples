
function FormDemo(){
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
