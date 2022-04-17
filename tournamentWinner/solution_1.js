
// Time complexity O(N) and Space Complexity O(k) where k is the number of teams. 
function tournamentWinner(competitions, results) {
	let winnersStanding = {};
	let winner = "";
  let highestScore = 0;
	
	// Creamos el hashmap para manejar los datos.
	for (let i = 0; i < competitions.length; i++ ) {
		const [homeTeam, awayTeam] = competitions[i];
		const result = results[i];

		if (result === 0) {
			if (winnersStanding[awayTeam]) {
				winnersStanding[awayTeam] = winnersStanding[awayTeam] + 3;
			} else {
				winnersStanding[awayTeam] = 3;
			}
			
			if (winnersStanding[awayTeam] > highestScore) {
				highestScore = winnersStanding[awayTeam];
				winner = awayTeam;
			}
		} else {
			if (winnersStanding[homeTeam]) {
				winnersStanding[homeTeam] = winnersStanding[homeTeam] + 3;
			} else {
				winnersStanding[homeTeam] = 3;
			}
			
			if (winnersStanding[homeTeam] > highestScore) {
					highestScore = winnersStanding[homeTeam];
					winner = homeTeam;
				}
		}
	}
	

	return winner;
}
