
name = "Samantha"

function nicknameGenerator(name){
    for (let i in name) {
        if (name.length <= 3) {
            return "Error: Name too short"
        }
        else if ('aeiou'.includes(name[2])) {
            return name.slice(0 , 4)
            } else {
                return name.slice(0, 3)
            }
    }
}