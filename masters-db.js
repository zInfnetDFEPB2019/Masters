// index.js

var static = {
	idUser: 0
};

module.exports = () => {

	const starIcon = '../../../assets/icons/star.svg'
	
	let users = [];
	
	// Create 100 users
	for (let i = 0; i < 40; i++) {
		
		let kpis = [
			buildKpi("danger", starIcon, "KPI-1"),
			buildKpi("success",starIcon, "KPI-2"),
			buildKpi("info",starIcon, "KPI-3"),
			buildKpi("warning",starIcon, "KPI-4")
		]
		
		const user = buildUser(i, kpis);
		users.push(user);
	}		
	return {users};
}

function buildKpi(classWrap, icon, title) {
	let item = {
		score: getRandom(0, 1000),
		classWrapperName: classWrap,
		iconUrl: icon,
		title: title
	}
	return item;
}

function buildUser(i, kpis) {
	static.idUser += 1;

	const user = {
		id: static.idUser,
		name: "Usuario " + i,
		nickName: "@user"+i+"-master",
		position: i +1,
		scoreKpis: kpis,
		updatePosition: getRandomChoice()
	}
	return user;
}

function getRandomChoice() {
	let ran = (Math.random() * 2 -1);
	return (ran < -0.3) ? -1 
					: (ran > 0.3) ? 1
					: 0;
}

function getRandom(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}