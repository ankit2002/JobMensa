function LoadOption(id)
{
    if(id==1)
    {
     
        document.getElementById('education').disabled=false;
        document.getElementById('institute').disabled=false;
        document.getElementById('subject').disabled=false;
        document.getElementById('designation').disabled=false;
        document.getElementById('cbiz').disabled=false;
        document.getElementById('location').disabled=false;
        document.getElementById('train').disabled=false;
        document.getElementById('category').disabled=false;
    }
    if(id==0)
    {

        document.getElementById('education').disabled=true;
        document.getElementById('institute').disabled=true;
        document.getElementById('subject').disabled=true;
        document.getElementById('designation').disabled=true;
        document.getElementById('cbiz').disabled=true;
        document.getElementById('location').disabled=true;
        document.getElementById('train').disabled=true;
        document.getElementById('category').disabled=true;
    }
}

