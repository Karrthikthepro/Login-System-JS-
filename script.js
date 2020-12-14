var people = [
    {
        username: "Karrthik",
        password: "workhard54321"
    },

    {
        username: "ThePro",
        password: "proplayer543"
    },

    {
        username: "TheNoob",
        password: "thenoobest"
    }
]

function checkInfo(){
    var user = document.getElementById("username").value
    var pass = document.getElementById("password").value

    for(i=0; i<people.length;i++){
        if(user==people[i].username && pass==people[i].password){
            window.alert("Access Granted")
            return

        }
    }
    window.alert("Access Denied")
}











