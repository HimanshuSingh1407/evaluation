
let id;
//let count = 0;
let a = 'Your order is accepted'
let b= 'Your order is being Prepared '
let c = 'Your order is being packed  '
let d = 'Your order is out for delivery '
let e = 'Order delivered'

document.getElementById('confirm').addEventListener('click', finalOutput)

function finalOutput(){
     event.preventDefault();
   
     for(let i=0; i<=12; i++)
     {
         if(i==0 || i==3 || i==8 || i==10 || i==12)
         {
            id = i;
            setTimeout(finalOutput1, 1000*i)
            function finalOutput1(){

                if(i==0) alert(a)
                if(i==3) alert(b)
                if(i==8) alert(c)
                if(i==10) alert(d)
                if(i==12) alert(e)
                
                //console.log('Your order is accepted')
                //count++;
                //console.log(count, id)
            }
             
         }
     }
 }



