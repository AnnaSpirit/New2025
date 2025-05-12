// CONDITIONALS 

let age = 20

if (age > 21){
    console.log('You can enter the party')
}
else if (age > 60 ){
    console.log("You can enter the party, but don't get drunk")
}
else {
    console.log("Sorry, you can't enter the party")
}

let favSong = 'Garota de Ipanema'

switch (favSong){
    case 'Unicorn by Noa Kirel':
        console.log('Thats the best song ever!')
        break

    case 'Vienna by Billy Joel':
        console.log('Slow down you crazy child...')
        break

    case 'Under The Bridge by RHCP':
        console.log('I love RHCP!!! The best rock band from the 80\'s')
        break

    default:
        console.log('IDK this song')


}