function validate() {
   let elementValueToValidate = document.getElementsByTagName("input")[0];
   let pattern = /^[a-z]+@[a-z]+?\.[a-z]+$/;
   elementValueToValidate.addEventListener("change",function(){
   let decision =  pattern.test(elementValueToValidate.value)
   if(decision !== true){
    elementValueToValidate.className = "error";
   } else {
    elementValueToValidate.className = "";
   }
   })
}