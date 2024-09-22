/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pron = ["4geeks", "supergeeks", "super4geeks"];
  let adj = ["wonderful", "amazing", "great"];
  let noun = ["runner", "player", "singer", "dancer"];
  let dom = [".com", ".edu", ".gob"];

  for (let ip = 0; ip < pron.length; ip++) {
    for (let ia = 0; ia < adj.length; ia++) {
      for (let ino = 0; ino < noun.length; ino++) {
        for (let idom = 0; idom < dom.length; idom++) {
          let domainName = `${pron[ip]}${adj[ia]}${noun[ino]}${dom[idom]}`;
          console.log(domainName);

          const myLis = document.getElementById("myLisContainer");
          const myli = document.createElement("li");
          if (dom[idom] === ".com") {
            myli.className = "list-group-item bg-primary"; // Aplica la clase de Bootstrap
          }
          if (dom[idom] === ".edu") {
            myli.className = "list-group-item bg-info"; // Aplica la clase de Bootstrap
          }
          if (dom[idom] === ".gob") {
            myli.className = "list-group-item bg-secondary"; // Aplica la clase de Bootstrap
          }

          myli.innerText = `${domainName}`;
          myLis.appendChild(myli);
        }
      }
    }
  }

  console.log("Hello Rigo4G from the console!");
};
