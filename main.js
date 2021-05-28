canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
redcar_width=120;
redcar_height=70;
background_image="https://tse3.mm.bing.net/th?id=OIP.0JxM_RuTzGbcE8i0Yf0hRQHaFH&pid=Api&P=0&w=248&h=172";
redcar_image="https://tse4.mm.bing.net/th?id=OIP.dXmknSEB7kS5bSDIqk8EtwHaEK&pid=Api&P=0&w=283&h=160";
redcar_x=10;
redcar_y=10;
pinkcar_width=120;
pinkcar_height=70;
pinkcar_image="https://tse3.mm.bing.net/th?id=OIP.ggtZfJX2zFKI4OMbxNa10AHaDZ&pid=Api&P=0&w=334&h=154";
pinkcar_x=20;
pinkcar_y=20;

function add(){
 background_imgtag=new Image();
 background_imgtag.onload=uploadbackground;
 background_imgtag.src=background_image;

 redcar_imgtag=new Image();
 redcar_imgtag.onload=uploadcarred;
 redcar_imgtag.src=rover_image;

 pinkcar_imgtag=new Image();
 pinkcar_imgtag.onload=uploadcarpink;
 pinkcar_imgtag.src=rover_image;
 
}

function uploadbackground(){
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function uploadcarred(){
    ctx.drawImage(redcar_imgtag,redcar_x,redcar_y,redcar_width,redcar_height);

}

function uploadcarpink(){
    ctx.drawImage(redpink_imgtag,pinkcar_x,pinkcar_y,pinkcar_width,pinkcar_height);

}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
 keypressed=e.keyCode;
 console.log(keypressed);

 if (keypressed="39"){
right();
console.log("right");
 }   


if (keypressed="37"){
    left();
    console.log("left");
     } 
     
     if (keypressed="38"){
        up();
        console.log("up");
         }   
         
         
         if (keypressed="40"){
            down();
            console.log("down");
             }   

            }             