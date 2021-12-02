const link = document.querySelectorAll(".head_menu>ul>li");
const ball = document.querySelector(".ball");
let index = 0;
console.log(ball);
const srcrol= n =>
{
         ball.classList.remove("active0");
         ball.classList.remove("active1");
         ball.classList.remove("active2");
         ball.classList.remove("active3");
    
    if(n==0)
    {
        ball.classList.add("active0")
    }
    if(n==1)
    {
        ball.classList.add("active1")
    }
    if(n==2)
    {
        ball.classList.add("active2")
    }
    if(n==3)
    {
        ball.classList.add("active3")
    }

}

link.forEach((obj,index1) => 
{
obj.addEventListener("click",()=>
{
    index=index1;
    srcrol(index);
} )

} )

const box = document.querySelectorAll(".cont");
const close_box = document.querySelectorAll(".close");
const in_box = document.querySelectorAll(".cont_a")
let index_a = 0;
const active_new_cont=n=>
{
    
    in_box[n].classList.add("active_new");
}
box.forEach((obj, indexci) => {
    obj.addEventListener("click", () => {
        index_a = indexci;
        active_new_cont(index_a);
    })
});
const after =n=>
{
    in_box[n].classList.remove("active_new");
}
close_box.forEach((obj, indexci) => {
    obj.addEventListener("click", () => {
        index_a = indexci;
        after(index_a);
    })
});


// box1.addEventListener("click");
// if (box1.addEventListener("click"))
// {
//     inbox1.classList.remove("active_new");
//     box1.classList.add("active_new");
// }
