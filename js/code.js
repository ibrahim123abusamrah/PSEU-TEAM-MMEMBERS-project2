class members {
    constructor(firstName, Email, major, role, bio) {
        this.firstName = firstName;
        this.Email = Email;
        this.bio = bio;
        this.role = role;
        this.major = major;
        this.members = members;

    }
}

let allmember = [];

function savemember() {
    let firstName = document.getElementById("firstname1").value;
    let Email = document.getElementById("email1").value;
    let major = document.getElementById("major1").value;
    let role = document.getElementById("role1").value;
    let biog = document.getElementById("biog1").value;
    let memberitem = new members(firstName, Email, major, role, biog)
    allmember.push(memberitem);
    console.log(memberitem)
    greatmember(memberitem);
    localStorage.setItem("all-of-members", JSON.stringify(allmember))
}

function divelemnt(memberitem) {

    let divformstring = `
    <div style=" position:initial;   margin-left: 5%; margin-top: 1px;">
                        <div class="dot">
                            <span>ــ</span>
                        </div>
                        <div class="col10">
                            <h1 style="margin: 3% 0% 0% 0%">${memberitem.firstName}</h1>
                        </div>
                        <div class="col10"> <a style="color: #2D89E6">${memberitem.Email}</a> / <a style="color: #2D89E6">${memberitem.major}</a> / <a style="color: #2D89E6">${memberitem.role}</a> </div>
                        <div class="col10" style="color: #6A6A6A">
                        ${memberitem.bio}                 
                        </div>
                    </div>`
    return divformstring;
}

function greatmember(memberitem) {
    var memberdiv = document.createElement("div");
    memberdiv.innerHTML = divelemnt(memberitem)
    document.getElementById("showallmember").appendChild(memberdiv);

}

function printallmember(allmember) {
    allmember.forEach(element => {
        greatmember(element)
    });

}