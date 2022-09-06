 let a='';
 let b='';
 let sign='';
 let result='';
 let finish=false;
 const digit= ['0','1','2','3','4','5','6','7','8','9','.'];
 const action=['-','+','×','÷'];
 

 const out =document.querySelector('.output');
 function clearAll () {
    a= '';
    b='';
    sign='';
    finish=false;
    out.textContent=0; 
 }

 document.querySelector('.ac').onclick = clearAll;
 
 document.querySelector('.all_btn').onclick=(event)=>{
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    out.textContent='';
    const key=event.target.textContent;

    if(digit.includes(key)){
      if(b==='' && sign ===''){
        a+=key;
        out.textContent=a;
      }
      else if(a!=='' && b!=='' &&finish)
      {
         b=key;
         finish=false;
         out.textContent=b;
      }
      else{
         b+=key;
         out.textContent=b;
      }
    }
    if(action.includes(key)){
      sign=key;
      out.textContent=sign;
      return;
    }
    if(key==='='){
      if(b==='') b=a 
      switch(sign){
               case '+':
               a= (+a) + (+b) ;
               break;
                  case '-':
                     a= a - b;
                     break;
                     case '×':
                        a= a * b;
                        break;
                        case '+':
                           a= a + b;
                           break;
                           case '÷':
                              if(b==='0'){
                                 out.textContent="Помилочка:("
                                 a=''
                                 b=''
                                 sign=''
                                 return;
                              }
                              a= a / b;
                              break;
      }
      finish=true;
      out.textContent=a;
    
    }
    if(key==='+/-'){
      if(a!=='0'&&sign===''){
         a=-a;
         out.textContent=a
      }
      else if(sign!=''&& b!=='0') {
         b=-b
         out.textContent=b
      }
    }
    if (key === '%') {
      b = a * (b / 100);
      out.textContent = b;
  }
 }
 const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
const savebtn=document.querySelector('.save');
const pastebtn=document.querySelector('.paste');

savebtn.onclick=()=>{
   result=a;
   document.cookie=result;
   console.log(document.cookie);
}
pastebtn.onclick=()=>{
   out.textContent=document.cookie;
   if(sign==='') a=document.cookie;
   else if(a!=='' && sign!=='') b=document.cookie;
}
