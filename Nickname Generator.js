function nicknameGenerator(name){
    for (let i in name) {
        if (name.length <= 3) {
            return "Error: Name too short"
        }
        else if (name[2] === 'a' || 
                 name[2] === 'e' || 
                 name[2] === 'u' || 
                 name[2] === 'i' || 
                 name[2] === 'o') {
            return name.slice(0 , 4)
        } else {
            return name.slice(0, 3)
        }
    }
}