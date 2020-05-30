var t =0;
var n =0;
const text = "Software and Web Developer"
const name="Ilkin Aslanli"
function typing_job()
{
    if(t<text.length)
    {
        document.getElementById('job_title').innerHTML+=text.charAt(t);
        t++;
        setTimeout(typing_job,50);
    }
  
}
function typing_name()
{
    if(n<name.length)
    {
        document.getElementById('name').innerHTML+=name.charAt(n);
        n++;
        setTimeout(typing_name,50);
    }
  
}
document.addEventListener("DOMContentLoaded", function(event) { 
    
   typing_name();

   setTimeout(typing_job,1500); 
   
   
});
