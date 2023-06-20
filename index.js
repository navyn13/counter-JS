const increase= document.querySelector('.b1')
const reset= document.querySelector('.b2')
const decrease= document.querySelector('.b3')
let counter= document.querySelector('.time')
let temp=0

increase.addEventListener('click',function(){
    console.log("increase")
    temp+=1
    counter.textContent=temp
    counterColor()

})


reset.addEventListener('click',function(){
    console.log("reset")  
    temp=0
    counter.textContent=temp
    counterColor()

})

decrease.addEventListener('click',function(){
    console.log("decrease")
    temp-=1
    counter.textContent=temp
    counterColor()
})
function counterColor(){
    if(temp===0){
        counter.style.color='black'
    }
    if(temp>0){
        counter.style.color='green'
    }
    if(temp<0){
        counter.style.color='red'
    }
}