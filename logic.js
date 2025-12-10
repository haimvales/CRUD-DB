


export function isLetters(word){
    for (let i = 0;i<word.length;i++){
        if (word.charAt(i).toLowerCase() == word.charAt(i).toUpperCase())
            return false
    }     
    return true
}

export function proper_length(word){return word.length >= 2}






