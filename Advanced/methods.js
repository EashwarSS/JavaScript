function userData(name, age, experience, languages) {
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.languages = languages;
    this.workStatus = function () {
        alert("Serving in notice period...");
    }
}

// var userData1 = new userData(Anirudh, 25, 3, ["English", "Hindi", "Telugu"]);
// userData1.clean()