// const btn1=document.getElementById("button1")
// const btn2=document.getElementById("button2")
// const btn3=document.getElementById("button3")



//   function colorchange()
//         {
//             if(btn1.innerText==='click'){
                
//             btn1.innerText='clicked';
//             btn1.style.background='green';


//             }
//             else if(onclick="btn1" && btn1.innerText==='clicked'){

//             btn1.innerText='click';
//             btn1.style.background='red';
//             }

//         }


//   function clrch()
//         {
//             if(btn2.innerText==='click'){
//                 btn2.innerText='clicked';
//                 btn2.style.background='green';
//             }

//             else if(btn2.innerText==='clicked'){
//                 btn2.innerText='click';
//                 btn2.style.background='red';
//             }
//         }



//   function changeclr()
//         {
//             if (btn3.innerText==="click"){
//                 btn3.style.backgroundColor='green';
//                 btn3.innerHTML="clicked";
//             }
//             else if(btn3.innerText==='clicked'){
//                 btn3.innerText='click';
//                 btn3.style.background='red';
//         }



//         }



// btn1.addEventListener("click",colorchange)

// btn2.addEventListener("click",clrch)

// btn3.addEventListener("click",changeclr)




let btn = document.querySelectorAll("button");
// console.log(btn);

for (let i=0; i<btn.length; i++) {
    btn[i].count=0;
    btn[i].addEventListener("click",function() {
        if (btn[i].count == 0){
            btn[i].innerText = "Clicked";
            btn[i].style.backgroundColor = "green";
            // btn[i].style.color = "green";
            btn[i].count=1;
        }
        else {
            btn[i].innerText = "click";
            btn[i].style.backgroundColor = "red";
            // btn[i].style.color = "red";
            btn[i].count=0;
        }
    })
}
