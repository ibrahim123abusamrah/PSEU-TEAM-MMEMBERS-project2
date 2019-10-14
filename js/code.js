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

    localStorage.setItem("all-of-members", JSON.stringify(allmember))
}