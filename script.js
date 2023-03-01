const pianokeys = document.querySelectorAll(".pianokeys .key"),
 volumeSlider = document.querySelectorAll(".slider input");
 keycheck = document.querySelectorAll(".check input");
let  audio = new Audio("g.wav");
const playtune=(key)=>{
    audio.src=`${key}.wav`;
 audio.play();
 const clickedkey = document.querySelector(`[data-key="${key}"]`);//GETTING CLICKED KEY ELEMENT
 clickedkey.classList.add("active");
 setTimeout(()=>{
    clickedkey.classList.remove("active");

 },150);
}
pianokeys.forEach(key=>{
    key.addEventListener("mouseenter",() => playtune(key.dataset.key));

});
const handleVolume=(e)=>{
    audio.volume = e.target.value;
}
const pressedKey=(e)=>
{
    console.log(e);
    playtune(e.key);
}
const hide=()=>
{
    pianokeys.forEach(key => key.classList.toggle("hide"));

}
document.addEventListener("click",hide);
document.addEventListener("input",handleVolume);
document.addEventListener("keydown",pressedKey);

