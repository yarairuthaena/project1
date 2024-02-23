let input = document.querySelector(".signIn input")
let label = document.querySelector(".email")
let errorMsg = document.querySelector(".error")
let NxtBtn = document.querySelectorAll(".btn a")[1]
let loader = document.querySelector(".loading")

let input2 = document.querySelector(".passContainer input")
let label2 = document.querySelector(".pass")
let errorMsg2 = document.querySelector(".error2")
let NxtBtn2 = document.querySelectorAll(".btn2 a")[1]
let passContainer = document.querySelector(".passContainer")
let signIn = document.querySelector(".signIn")
let name = document.querySelector(".name")
let info =document.querySelector(".info")

let k = 0,l = 0


function myFunction()
{
  if(input.value == "")
   {
      
     label.style.setProperty("--labelBeforeColor","#4285f4")
     label.style.setProperty("--labelBeforeFontSize","12px")
     
     label.style.setProperty("--labelBeforeZindex","1")
     label.style.setProperty("--labelBeforeTop","-55px")
     input.style.borderColor="#4285f4"
     if (k > 0)
     {
       errorMsg.style.display = "flex"
       input.style.borderColor = "#AA2222"
       label.style.setProperty("--labelBeforeColor", "#AA2222")
       label.style.setProperty("--labelBeforeFontSize", "12px")
     
       label.style.setProperty("--labelBeforeZindex", "1")
       label.style.setProperty("--labelBeforeTop", "-55px")
     
     }
   }
   else{
     
     if(k <= 0)
     {
     label.style.setProperty("--labelBeforeColor","#4285f4")
     input.style.borderColor="#4285f4"
     }
     
   }
}

input.addEventListener("blur",()=>{
  if(input.value == "")
  {
    
    
    label.style.setProperty("--labelBeforeColor", "#878787")
    label.style.setProperty("--labelBeforeFontSize", "16px")
    
    label.style.setProperty("--labelBeforeZindex", "-1")
    label.style.setProperty("--labelBeforeTop", "-35px")
    input.style.borderColor="#878787"
    if (k > 0)
    {
      errorMsg.style.display = "flex"
      input.style.borderColor = "#AA2222"
    
    }
    
  }
  else{
    label.style.setProperty("--labelBeforeColor", "#4285f4")
    input.style.borderColor="#4285f4"
 
  }
})


NxtBtn.addEventListener("click",()=>{
  if(input.value == "")
  {
    k++;
    errorMsg.style.display="flex"
    input.focus();
    label.style.setProperty("--labelBeforeColor", "#AA2222")
    label.style.setProperty("--labelBeforeFontSize", "12px")
    
    label.style.setProperty("--labelBeforeZindex", "1")
    label.style.setProperty("--labelBeforeTop", "-55px")
    input.style.borderColor="#AA2222"
  }
  else{
    label.style.setProperty("--labelBeforeColor", "#878787")
    label.style.setProperty("--labelBeforeFontSize", "12px")
    
    label.style.setProperty("--labelBeforeZindex", "1")
    label.style.setProperty("--labelBeforeTop", "-55px")
    errorMsg.style.display = "none"
    input.style.borderColor = "#878787"
    loader.style.display = "block"
    setTimeout(function(){
      signIn.style.left = "-330px"
      passContainer.style.left = "0"
      name.textContent = input.value + "@gmail.com"
    },2700)
    setTimeout(function() {
      input2.focus()
      loader.style.display = "none"
      
    }, 3000)
  }
})





function myFunction2() {
  if (input2.value == "")
  {

    label2.style.setProperty("--label2BeforeColor", "#4285f4")
    label2.style.setProperty("--label2BeforeFontSize", "12px")

    label2.style.setProperty("--label2BeforeZindex", "1")
    label2.style.setProperty("--label2BeforeTop", "-55px")
    input2.style.borderColor = "#4285f4"
    if (l > 0)
    {
      errorMsg2.style.display = "flex"
      input2.style.borderColor = "#AA2222"
      label2.style.setProperty("--label2BeforeColor", "#AA2222")
      label2.style.setProperty("--label2BeforeFontSize", "12px")

      label2.style.setProperty("--label2BeforeZindex", "1")
      label2.style.setProperty("--label2BeforeTop", "-55px")


    }

  }


}
input2.addEventListener("blur", () => {
  if (input2.value == "")
  {


    label2.style.setProperty("--label2BeforeColor", "#878787")
    label2.style.setProperty("--label2BeforeFontSize", "16px")

    label2.style.setProperty("--label2BeforeZindex", "-1")
    label2.style.setProperty("--label2BeforeTop", "-34px")
    input2.style.borderColor = "#878787"
    if (l > 0)
    {
      errorMsg2.style.display = "flex"
      input2.style.borderColor = "#AA2222"

    }

  }

})

function Loader() {
  loader.style.display = "block"
  setTimeout(function() {
    loader.style.display = "none"
  }, 3000)
}


NxtBtn2.addEventListener("click", () => {
  l++;

  if (input2.value == "")
  {
    errorMsg2.style.display = "flex"
    input2.focus();
    label2.style.setProperty("--label2BeforeColor", "#AA2222")
    label2.style.setProperty("--label2BeforeFontSize", "12px")

    label2.style.setProperty("--label2BeforeZindex", "1")
    label2.style.setProperty("--label2BeforeTop", "-55px")
    input2.style.borderColor = "#AA2222"
  }
  else {
    Loader();
  }

})

info.addEventListener("click",()=>{
  k = 0,l = 0
  loader.style.display = "block"
  setTimeout(function() {
    signIn.style.left = "0"
    passContainer.style.left = "330px"
    
  }, 2700)
  setTimeout(function() {
    loader.style.display = "none"
  }, 3000)
})



let createAccBtn = document.querySelectorAll(".btn a")[0]
let option = document.querySelector(".option")

createAccBtn.addEventListener("mouseover",()=>{
  createAccBtn.style.backgroundColor="#283AFF17"
  option.style.width="initial"
  option.style.transition="1s"
  option.style.height="initial"
  
})
createAccBtn.addEventListener("blur", () => {
  createAccBtn.style.backgroundColor = "transparent"
  option.style.width = 0
  option.style.height = 0
  option.style.transition="0s"
})