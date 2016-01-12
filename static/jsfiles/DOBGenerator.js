/**
 * Created by ANKIT on 12/01/16.
 */
/**
 * Created by ANKIT on 21/11/15.
 */

var monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

function populatedropdown(dayfield, monthfield, yearfield){

    var today=new Date()
    var dayfield=document.getElementById(dayfield)
    var monthfield=document.getElementById(monthfield)
    var yearfield=document.getElementById(yearfield)
    for (var i=0; i<31; i++)
        dayfield.options[i]=new Option(i+1, i+1)
    dayfield.options[today.getDate()-1]=new Option(today.getDate(), today.getDate(),true, true) //select today's day
    for (var m=0; m<12; m++)
        monthfield.options[m]=new Option(monthtext[m], monthtext[m])
    monthfield.options[today.getMonth()]=new Option(monthtext[today.getMonth()], monthtext[today.getMonth()], true, true) //select today's month
    var thisyear=today.getFullYear()
    for (var y=0; y<100; y++){
        yearfield.options[y]=new Option(thisyear, thisyear)
        thisyear-=1
    }
    yearfield.options[0]=new Option(today.getFullYear(), today.getFullYear(), true, true) //select today's year
}

function populateYear(field_nam){

    var today=new Date()
    var field_name=document.getElementById(field_nam)
    var thisyear=today.getFullYear()

    if(field_nam == "job_seeker_edu_end_year"){
        thisyear = thisyear+4
    }

    for (var y=0; y<100; y++){
        field_name.options[y]=new Option(thisyear, thisyear)
        thisyear-=1
    }

    if(field_nam == "job_seeker_edu_end_year")
        field_name.options[0]=new Option(today.getFullYear()+4, today.getFullYear()+4, true, true)
    else
        field_name.options[0]=new Option(today.getFullYear(), today.getFullYear(), true, true)

}