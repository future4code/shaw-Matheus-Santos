function pessoa(name:string, date:string){
    const dateArray = date.split(' ')
    return  `ola me chamo ${name}, nasci no dia ${dateArray[0]} do mẽs de ${dateArray[1]} do ano de ${dateArray[2]}`
}
console.log(pessoa('seean', '05 março 1998'));


