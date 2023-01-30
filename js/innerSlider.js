// const pics = [document.getElementById("pic1"),
//     document.getElementById("pic2"),
//     document.getElementById("pic3"),
//     document.getElementById("pic4")];
let pic1 = document.getElementById("pic1")
function Highlight(obj) {
    console.log(pic1.classList)
    // pics.map((value)=>{
    //     value.classList.remove('active');
    // })
    obj.classList.add('active');
    alert(obj.classList);
}