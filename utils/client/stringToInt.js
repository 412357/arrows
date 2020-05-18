export default function stringToInt(str){
    const unarized = +str
    return Number.isNaN(unarized) ? parseInt(str) : unarized
}