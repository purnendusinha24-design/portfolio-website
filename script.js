function openLink(url){window.open(url,"_blank");}
document.getElementById("year").textContent=new Date().getFullYear();

const plantInput=document.getElementById("plant-input");
const animalInput=document.getElementById("animal-input");
const makeBtn=document.getElementById("make-poem");
const resetBtn=document.getElementById("reset-poem");
const poemOutput=document.getElementById("poem-output");

function makePoem(){
  const plant=plantInput.value||"orchid";
  const animal=animalInput.value||"dolphin";
  poemOutput.innerHTML=`<h3>The ${plant} and the ${animal}</h3>
  <p>Wake up the ${plant}</p><p>The morning has come</p>
  <p>Rouse the ${animal}</p><p>The day is waiting to start</p>`;
}
function resetPoem(){plantInput.value="";animalInput.value="";poemOutput.innerHTML="";}
makeBtn.addEventListener("click",makePoem);
resetBtn.addEventListener("click",resetPoem);
