let img1=document.getElementById('image1');
let img2=document.getElementById('image2');
let img3=document.getElementById('image3');
let img4=document.getElementById('image4');
let img5=document.getElementById('image5');
let img6=document.getElementById('image6');
let img7=document.getElementById('image7');
let img8=document.getElementById('image8');
let img9=document.getElementById('image9');
let img10=document.getElementById('image10');

 // function click(msg){
 // if(msg ){
 //     let images1=document.getElementById('image11');
 //     images1.style.display="block";
 //     console.log('image1')}
 
 // if(msg.includes('image2')){
 //     let images1=document.getElementById('image12');
 //     images1.style.display="block";
 //     document.getElementsByClassName('head').innerHTML = msg;
 //     console.log('image2')}
 // }
 let clickhid=document.getElementById('clickhid');
 
 let x = window.matchMedia("(max-width: 600px)");

 function click1(){
    
     if(clickhid.style.display == "block"){
         document.getElementById('ico').classList.add('iconblur');
     }
 
     else{
     document.getElementById('image1').classList.add('place');
     document.getElementById('clickhid').style.display = 'block';
     document.getElementById('btn').addEventListener("click",()=>{
         let blank=document.getElementById('blank');
         blank.style.display = 'block';
         document.getElementById('imgs').src = "img11.jpg";
     })
     if(x.matches){
     document.getElementById('empty').style.height = "410px";
     }
     else{
        document.getElementById('empty').style.height = "90px";     
     }      
   }
 // document.getElementById('image11').style.display = "block";
 // document.getElementById('image11').classList.add('trans');

 }

 function click2(){
    
     if(clickhid.style.display == "block"){
         document.getElementById('ico').classList.add('iconblur');
     }
     else{
     document.getElementById('image2').classList.add('place');
     document.getElementById('clickhid').style.display = "block";
     document.getElementById('btn').addEventListener("click",()=>{
        let blank=document.getElementById('blank');
         blank.style.display = 'block';
         document.getElementById('imgs').src = "img2.jpg";
     })
     if(x.matches){
        document.getElementById('empty').style.height = "410px";
        }
        else{
           document.getElementById('empty').style.height = "90px";     
        }  
 }
     // document.getElementById('image12').style.display = "block";
     // document.getElementById('image12').classList.add('trans');
    
 }
 function click3(){
     if(clickhid.style.display == "block"){
         document.getElementById('ico').classList.add('iconblur');
     }
     else{
     document.getElementById('image3').classList.add('place');
     document.getElementById('clickhid').style.display = "block";
     document.getElementById('btn').addEventListener("click",()=>{
        let blank=document.getElementById('blank');
         blank.style.display = 'block';
         document.getElementById('imgs').src = "img3.jpg";
     })
     if(x.matches){
        document.getElementById('empty').style.height = "410px";
        }
        else{
           document.getElementById('empty').style.height = "90px";     
        }    
 }
     // document.getElementById('image13').style.display = "block";
     // document.getElementById('image13').classList.add('trans');
     // document.getElementById('image13').style.zIndex = "1";
 }
 function click4(){
     if(clickhid.style.display == "block"){
         document.getElementById('ico').classList.add('iconblur');
     }
     else{
     document.getElementById('image4').classList.add('place');
     document.getElementById('clickhid').style.display = "block";
     document.getElementById('btn').addEventListener("click",()=>{
        let blank=document.getElementById('blank');
        blank.style.display = 'block';
        document.getElementById('imgs').src = "img4.jpg";
     })
     if(x.matches){
        document.getElementById('empty').style.height = "410px";
        }
        else{
           document.getElementById('empty').style.height = "90px";     
        }  
 }
     // document.getElementById('image14').style.display = "block";
     // document.getElementById('image14').classList.add('trans');
     // document.getElementById('image14').style.zIndex = "1";
 }
 function click5(){
     if(clickhid.style.display == "block"){
         document.getElementById('ico').classList.add('iconblur');
     }
     else{
     document.getElementById('image5').classList.add('place');
     document.getElementById('clickhid').style.display = "block";
     document.getElementById('btn').addEventListener("click",()=>{
        let blank=document.getElementById('blank');
        blank.style.display = 'block';
        document.getElementById('imgs').src = "img5.jpg";
     })
     if(x.matches){
        document.getElementById('empty').style.height = "410px";
        }
        else{
           document.getElementById('empty').style.height = "90px";     
        }  
 }
    
     // document.getElementById('image15').style.display = "block";
     // document.getElementById('image15').classList.add('trans');
     // document.getElementById('image15').style.zIndex = "1";
 }
 function click6(){
     if(clickhid.style.display == "block"){
         document.getElementById('ico').classList.add('iconblur');
     }
     else{
     document.getElementById('image6').classList.add('place');
     document.getElementById('clickhid').style.display = "block";
     document.getElementById('btn').addEventListener("click",()=>{
        let blank=document.getElementById('blank');
        blank.style.display = 'block';
        document.getElementById('imgs').src = "img6.jpg";
     }) 
     if(x.matches){
        document.getElementById('empty').style.height = "410px";
        }
        else{
           document.getElementById('empty').style.height = "90px";     
        }    
 }
     // document.getElementById('image16').style.display = "block";
     // document.getElementById('image16').classList.add('trans');
     // document.getElementById('image16').style.zIndex = "1";
 }
 function click7(){
     if(clickhid.style.display == "block"){
         document.getElementById('ico').classList.add('iconblur');
     }
     else{
     document.getElementById('image7').classList.add('place');
     document.getElementById('clickhid').style.display = "block";
     document.getElementById('btn').addEventListener("click",()=>{
        let blank=document.getElementById('blank');
        blank.style.display = 'block';
        document.getElementById('imgs').src = "img7.jpg";
     })
     if(x.matches){
        document.getElementById('empty').style.height = "410px";
        }
        else{
           document.getElementById('empty').style.height = "90px";     
        }  
     }   
     // document.getElementById('image17').style.display = "block";
     // document.getElementById('image17').classList.add('trans');
     // document.getElementById('image17').style.zIndex = "1";
 }
 function click8(){
     if(clickhid.style.display == "block"){
         document.getElementById('ico').classList.add('iconblur');
     }
     else{
     document.getElementById('image8').classList.add('place');
     document.getElementById('clickhid').style.display = "block";
     document.getElementById('btn').addEventListener("click",()=>{
        let blank=document.getElementById('blank');
         blank.style.display = 'block';
         document.getElementById('imgs').src = "img8.jpg";
     })
     if(x.matches){
        document.getElementById('empty').style.height = "410px";
        }
        else{
           document.getElementById('empty').style.height = "90px";     
        }  
   }
     // document.getElementById('image18').style.display = "block";
     // document.getElementById('image18').classList.add('trans');
     // document.getElementById('image18').style.zIndex = "1";
 }
 function click9(){
     if(clickhid.style.display == "block"){
         document.getElementById('ico').classList.add('iconblur');
     }
     else{
     document.getElementById('image9').classList.add('place');
     document.getElementById('clickhid').style.display = "block";
     document.getElementById('btn').addEventListener("click",()=>{
        let blank=document.getElementById('blank');
        blank.style.display = 'block';
        document.getElementById('imgs').src = "img9.jpg";
     })
     if(x.matches){
        document.getElementById('empty').style.height = "410px";
        }
        else{
           document.getElementById('empty').style.height = "90px";     
        }  
 }
     // document.getElementById('image19').style.display = "block";
     // document.getElementById('image19').classList.add('trans');
     // document.getElementById('image19').style.zIndex = "1";
 }
 function click10(){
     if(clickhid.style.display == "block"){
         document.getElementById('ico').classList.add('iconblur');
     }
     else{
     document.getElementById('image10').classList.add('place');
     document.getElementById('clickhid').style.display = "block";
     document.getElementById('btn').addEventListener("click",()=>{
        let blank=document.getElementById('blank');
        blank.style.display = 'block';
        document.getElementById('imgs').src = "img1.jpg";
     })
     if(x.matches){
        document.getElementById('empty').style.height = "410px";
        }
        else{
           document.getElementById('empty').style.height = "90px";     
        }  
 }
     // document.getElementById('image20').style.display = "block";
     // document.getElementById('image20').classList.add('trans');
     // document.getElementById('image20').style.zIndex = "1";
 }
 
 document.getElementById('close').addEventListener("click",()=>{
    document.getElementById('blank').style.display = "none";
 })


 function hide(){
     clickhid.style.display = "none";
    img1.classList.remove('place');
    img2.classList.remove('place');
    img3.classList.remove('place');
    img4.classList.remove('place');
    img5.classList.remove('place');
    img6.classList.remove('place');
    img7.classList.remove('place');
    img8.classList.remove('place');
    img9.classList.remove('place');
    img10.classList.remove('place');
    document.getElementById('ico').classList.remove('iconblur');
    document.getElementById('empty').style.height = "490px";   
 }

