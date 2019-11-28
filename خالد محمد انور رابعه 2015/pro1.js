function Interaction(type,target,time){
    this.type=type;
    this.target=target;
    this.time=time;    
}
window.addEventListener('load',function(){
    
window.localStorage.interactions=[];
var counter=0;

window.localStorage.interactions[counter++]=new Interaction('load','load window',(new Date).toLocaleTimeString());
var btn=document.getElementById('generate');
var char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

btn.addEventListener('click',function(){
    window.localStorage.interactions[counter++]=new Interaction('click','click to generate letter',(new Date).toLocaleTimeString());
    var rand=[];
    var nbr=document.getElementById('number').value;
    if(nbr>26){
        alert('you must enter number less than or equal 26');
    }else{
   while(rand.length < nbr){
    var val = Math.floor(Math.random() * 26) ;
    rand.push(val);
    var str='';
    for(i=0;i<rand.length;i++){
        str+="<button class='images' value='"+char[rand[i]]+"'>"+char[rand[i]]+"</button>"
    }
    document.getElementById('bt').innerHTML=str;
}
    var images=document.getElementsByClassName('images');
    for(i=0;i<images.length;i++){
        images[i].addEventListener('click',function(e){
            window.localStorage.interactions[counter++]=new Interaction('click','click to show picture of letter '+e.target.value,(new Date).toLocaleTimeString());
        document.getElementById('pict').innerHTML="<img src='images/"+e.target.value+".jpg'>";
    })
}
    }
    
});
});

window.addEventListener('unload',function(){
    window.localStorage.interactions[counter++]=new Interaction('unload','unload window',(new Date).toLocaleTimeString());
});
setInterval(function(){
    window.localStorage.interactions=[];
    counter=0;
},5000);
