import React from "react";

function App() {
  let todos = []
  const body = document.querySelector("body")
  const htmlll = document.querySelector("html")

  return (
    
    <div className="appContainer">
      <div className="container">
        <header>
          <h1>TODO</h1>
          <img className="luna" src="../src/images/luna.svg" alt="" onClick={()=>{
           htmlll.classList.add("dark-mode")
            body.classList.add("dark-mode")


            const ul = document.querySelector("ul").style.boxShadow = "none"
            const darkBtn = document.querySelector(".luna").style.display = "none"
            const lightBtn = document.querySelector(".sun").style.display = "block"



          }} />
          <img className="sun" src="../src/images/sun.svg" alt="" onClick={()=>{
             htmlll.classList.remove("dark-mode")
            body.classList.remove("dark-mode")
           

            const ul = document.querySelector("ul").style.boxShadow = " 0px 35px 50px -15px rgba(194, 195, 214, 0.5)"
            const darkBtn = document.querySelector(".luna").style.display = "block"
            const lightBtn = document.querySelector(".sun").style.display = "none"

          }} />

        </header>
        <form onSubmit={(e)=>{
          e.preventDefault()
          const inputVal = document.querySelector(".input").value
        
          const form = document.querySelector("form")


      const round = document.createElement("span")

      const deleteBtn = document.createElement("button")
      const done = document.createElement("img")
      done.src = "../src/images/Path.svg"


      deleteBtn.textContent = "❌"

           const El = document.createElement("li")

           

           El.textContent = inputVal

           const item = document.querySelector(".footer")
           El.append(deleteBtn)
        
           if (inputVal) {
            item.append(El) 
           }else{
            alert("Please enter a note")
           }
       
           El.append(round)
           round.append(done)

           todos.push(El.textContent)

           deleteBtn.addEventListener("click",()=>{
            El.style.display = "none"
           })

           round.addEventListener("click",()=>{

            El.style.textDecoration = "line-through"

            if(body.classList !== "dark-mode"){
              El.style.color = "#D1D2DA"
            }else{
              El.style.color = "#4D5067"
            }

        

            round.style.background = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
            round.style.border = "none"

           })
           
        form.reset()
        }}>
          <input className="input" type="text" placeholder="Create a new todo…" />
         
        </form>
       <ul className="footer">


       </ul>
      </div>
    </div>
    
  );
 
}

export default App;
