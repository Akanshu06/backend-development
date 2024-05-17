const form = document.querySelector('form');
const playerInfoDiv = document.getElementById('playerInfo')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
     const name = event.target.name.value;
     const dob = event.target.dob.value;
     const photoURL = event.target.photoURL.value;
     const birthplace = event.target.birthplace.value;
     const career = event.target.career.value;
     const numberOfMatches = event.target.matches.value;
     const score = event.target.score.value;
     const fifties = event.target.fifties.value;
     const average = event.target.average.value;

     const  playerInfo ={
        name,dob,photoURL,birthplace,career,numberOfMatches,score,fifties,average
     }
     axios.post('https://crudcrud.com/api/fa65f359dad04b53abdf71a4676fe422/playerInfo',playerInfo)
})

const form2 = document.querySelector('form:nth-of-type(2)');
form2.addEventListener('submit',(Event)=>{
    Event.preventDefault();
    const playerName = Event.target.searchPlayer.value;
    axios.get(`https://crudcrud.com/api/fa65f359dad04b53abdf71a4676fe422/playerInfo`)
    .then((response)=>{
        const playerData = response.data;
const foundPlayer = playerData.find(player => player.name.toLowerCase() === playerName.toLowerCase());
if (foundPlayer) {
    displayData(foundPlayer);
} else {
    playerInfoDiv.innerHTML = 'Player not found.';
}
    })
    .catch((error) => {
        console.error('Error fetching player data:', error);
        alert('Error fetching player data. Please try again later.');
    });
});

function displayData(player){
    playerInfoDiv.innerHTML = `
                <h3>${player.name}</h3>
                <p>Date of Birth: ${player.dob}</p>
                <img src="${player.photoURL}" alt="Player Photo">
                <p>Birthplace: ${player.birthplace}</p>
                <p>Career: ${player.career}</p>
                <p>Number of Matches: ${player.matches}</p>
                <p>Score: ${player.score}</p>
                <p>Fifties: ${player.fifties}</p>
                <p>Average: ${player.average}</p>
            `;
}