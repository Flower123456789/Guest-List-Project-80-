var name_of_people=[];

function submit(){
    var GuestName=document.getElementById("Enter_Name").value;
    name_of_people.push(GuestName);
    console.log(GuestName);
    console.log(name_of_people);
    var length=name_of_people.length;
    console.log(length);
    document.getElementById("display_name").innerHTML=name_of_people.toString();
}

function show(){
    var i=name_of_people.join("<br>");
    console.log("name_of_people");
    document.getElementById("Show_Names").innerHTMLi.toString();
    document.getElementById("sortedlist_button").style.display="block";
}

function sorting(){
name_of_people.sort();
var i=name_of_people.join("<br>");
    console.log("name_of_people");
    document.getElementById("Sorting_Name").innerHTMLi.toString();
}

function searching(){
    var s=document.getElementById("Search_Name").value;
    var found=0;
    var j;
    for(j=0; j<name_of_people.length; j++)
    {
        if(s==name_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("Seach_Names").innerHTML="name found+ "+found+" time/s";
    console.log("found name "+found+" time/s");
}