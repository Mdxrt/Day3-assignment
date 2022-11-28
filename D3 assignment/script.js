//------------------------------------------------    2   ---------------------------------------------------
var myresume={
   "Name": "Madhana Gopal TS",
    "Gender":"male",
    "Age":"21",
    "Email":"ggmdxt25@gmail.com",
    "Phone":"9791964664",
    "Linkedin": "md.linkedin.com",
    "Location": "#39 kalaingar road,Pammal",
    "City": "chennai",
    "Country": "India",
    "Softwareknown": ["Python","JavaScript","Illustrator","Photoshop","Figma","Html","CSS"], 
    "Language-known": ["English","Tamil","Hindi","Sourashtra","kannada"],
    "Project":"Women safety system using IoT technology",
    "Experience":"Fresher",
    "Educational Background":["10th: CBSE(80%)","12th: StateBoard(80.42%)","Degree: B.E.Electronics and Instrumentation(78%)"],
}

console.log(myresume);


//-------------------------------------------------     1    -------------------------------------------------

var person=[
   {
"name":"John",
         "age":"20",
         "gender":"male"
      },
     {
         "name":"Doe",
         "age":"21",
         "gender":"female"
      },
    {
         "name":"ram",
         "age":"22",
         "gender":"male"
      },
    {
         "name":"Sue",
         "age":"23",
         "gender":"female"
      }
]
for(var i=0;i<person.length;i++){
      console.log(person[i].name);
}
for(let x in person) { 
    console.log(person[x].name,person[x].age);
}
for(let obj of person){
    console.log(obj.gender)
}

