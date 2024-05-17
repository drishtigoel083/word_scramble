const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span")
const refreshBtn = document.querySelector(".refresh")
const checkBtn = document.querySelector(".check")
const inputWord = document.querySelector("input")
const timeText = document.querySelector(".time b")

let correctWord ,timer;

const initTimer = maxTime => {
  clearInterval(timer);
   timer = setInterval( () => {
      if (maxTime>0){
        maxTime-- ;
        return timeText.innerText = maxTime ;
      }
      clearInterval(timer);
      alert(`TIMES UP ! ${correctWord.toUpperCase()} was the correct word`);
      initGame();
   },1200)
}
const initGame= () => {
    /* step 1: generating ramdom words
       step 2: shuffling obtained word*/
    initTimer(30);
     let randomObj =  words[Math.floor(Math.random() * words.length)];
     let wordSplit = randomObj.word.split("");
      //  console.log( wordSplit);
       for(let i = wordSplit.length - 1; i>0 ; i--){
        let j = Math.floor(Math.random()* (i+1));
        [wordSplit[i],wordSplit[j]] = [wordSplit[j],wordSplit[i]];
       }
       wordText.innerText = wordSplit.join("");
       hintText.innerText = randomObj.Hint;
       correctWord = randomObj.word.toLowerCase();
       inputWord.value = "" ;
       inputWord.setAttribute("maxlength",correctWord.length)
  //  console.log(wordSplit,randomObj.word);
   
}
initGame();

const checkword = ()=>{
  let userWord = inputWord.value.toLocaleLowerCase();
  if (!userWord) return alert("please enter a word")
  if (userWord !== correctWord) return alert(`sorry ! ${userWord} is not correct :(`)
  alert(`HURRY !! ${userWord.toUpperCase()} is correct word :)`)
// refreshing word when corrrect 
  initGame(); 
}
//  Step 3: refresh button 
refreshBtn.addEventListener("click",initGame)

// step 4: check button 
checkBtn.addEventListener("click",checkword);

