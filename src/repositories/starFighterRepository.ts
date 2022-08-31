import postgres from "../databases/pgsql.js";




async function insertFighter(userName, wins, losses, draws) {
	return postgres.query('INSERT INTO fighters (username, wins, losses, draws) VALUES ($1,$2,$3,$4)', [userName, wins, losses, draws])
}

async function getFighterStargazers() {
	get
}




export const starFighterRepository = {
	insertFighter
}