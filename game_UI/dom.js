// ------------------------
// div container
let div0 = document.createElement("div");
div0.classList.add("div0")
div0.style.display = "flex";
div0.style.flexDirection = "column";
div0.style.justifyContent = "center";
div0.style.alignItems = "center";
div0.style.border = "10px solid #CAB392";
div0.style.borderRadius = "16px";
div0.style.padding = "20px";
div0.style.margin = "15px";

// ------------------------
// div1 (for h1)
let div1 = document.createElement("div");
div1.classList.add("div1");
div1.style.display = "flex";
div1.style.justifyContent = "center";
div1.style.alignItems = "center";

// ------------------------
// h1
let h1 = document.createElement("div");
h1.classList.add("h1")
h1.textContent = "Rock, Paper, Scissors - (DOM)";
h1.style.textAlign = "center";

// ------------------------
// div2 (for scores)
let div2 = document.createElement("div");
div2.classList.add("div2")
div2.style.display = "flex";
div2.style.justifyContent = "center";
div2.style.alignItems = "center";
div2.style.margin = "15px";

// ------------------------
// div_p (for player_score)
let div_p = document.createElement("div");
div_p.classList.add("div_p");
div_p.textContent = "PLAYER";
div_p.style.display = "flex";
div_p.style.flexDirection = "column";
div_p.style.justifyContent = "center";
div_p.style.alignItems = "center";
div_p.style.marginRight = "10px";
div_p.style.fontSize = "20px";
// ------------------------------
// div_p (for computer_score)
let div_c = document.createElement("div");
div_c.classList.add("div_c");
div_c.textContent = "COMPUTER";
div_c.style.display = "flex";
div_c.style.flexDirection = "column";
div_c.style.justifyContent = "center";
div_c.style.alignItems = "center";
div_c.style.marginLeft = "10px";
div_c.style.fontSize = "20px";

// ------------------------
// spans (for scores)
let span1 = document.createElement("span");
span1.setAttribute("id", "player_score");
span1.textContent = "0";
let span2 = document.createElement("span");
span2.setAttribute("id", "computer_score");
span2.textContent = "0";

// ------------------------
// div3 (for result)
let div3 = document.createElement("div");
div3.setAttribute("id", "result");
div3.style.textAlign = "center";
div3.style.border = "15px solid yellowgreen";
div3.style.borderRadius = "12px";
div3.style.padding = "15px";
div3.style.margin = "15px";

// ------------------------
// div4 (for 3 btns)
let div4 = document.createElement("div");
div4.classList.add("div4")
div4.style.display = "flex";
div4.style.justifyContent = "center";
div4.style.alignItems = "center";

// ------------------------
// div5 (for reset btn)
let div5 = document.createElement("div");
div5.classList.add("div5")
div5.style.display = "flex";
div5.style.justifyContent = "center";
div5.style.alignItems = "center";

// ------------------------------
// create 3 btns with pics 
let btn1 = document.createElement("button");
btn1.classList.add("choice");
btn1.textContent = "rock";
btn1.style.margin = "5px";
btn1.style.borderRadius = "12px";
btn1.style.display = "flex";
btn1.style.flexDirection = "column";
btn1.style.justifyContent = "center";
btn1.style.alignItems = "center";
btn1.style.fontSize = "20px";
// ------------------------------
let btn2 = document.createElement("button");
btn2.classList.add("choice");
btn2.textContent = "paper";
btn2.style.margin = "5px";
btn2.style.borderRadius = "12px";
btn2.style.display = "flex";
btn2.style.flexDirection = "column";
btn2.style.justifyContent = "center";
btn2.style.alignItems = "center";
btn2.style.fontSize = "20px";
// ------------------------------
let btn3 = document.createElement("button");
btn3.classList.add("choice");
btn3.textContent = "scissors";
btn3.style.margin = "5px";
btn3.style.borderRadius = "12px";
btn3.style.display = "flex";
btn3.style.flexDirection = "column";
btn3.style.justifyContent = "center";
btn3.style.alignItems = "center";
btn3.style.fontSize = "20px";

// ------------------------------
// create 3 img elemetns
let img1 = document.createElement("img");
img1.setAttribute("src", "img/rock.jpg");
img1.style.borderRadius = "12px";
let img2 = document.createElement("img");
img2.setAttribute("src", "img/paper.jpg");
img2.style.borderRadius = "12px";
let img3 = document.createElement("img");
img3.setAttribute("src", "img/scissors.jpg");
img3.style.borderRadius = "12px";

// ------------------------------
let btn4 = document.createElement("button");
btn4.setAttribute("id", "reset");
btn4.setAttribute("type", "reset");
btn4.setAttribute("onClick", "reset()");
btn4.textContent = "RESET";


// ------------------------
// APPEND CHILD
document.body.appendChild(div0);
div0.appendChild(div1);
div1.appendChild(h1);
div0.appendChild(div2); // scores
div0.appendChild(div3); // result
div0.appendChild(div4);
div2.appendChild(div_p);
div2.appendChild(div_c);
div_p.appendChild(span1);
div_c.appendChild(span2);
div4.appendChild(btn1);
div4.appendChild(btn2);
div4.appendChild(btn3);
btn1.appendChild(img1);
btn2.appendChild(img2);
btn3.appendChild(img3);
div5.appendChild(btn4); // RESET

