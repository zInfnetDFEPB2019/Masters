// index.js

var static = {
	idUser: 0
};

module.exports = () => {

	const starIcon = '../../../assets/icons/star.svg'
	
	let usersKpis = [];
	
	// Create 100 users
	for (let i = 0; i < 40; i++) {
		
		let kpis = [
			buildKpi("danger", starIcon, "KPI-1"),
			buildKpi("success",starIcon, "KPI-2"),
			buildKpi("info",starIcon, "KPI-3"),
			buildKpi("warning",starIcon, "KPI-4")
		]
		
		const user = buildUser(i, kpis);
		usersKpis.push(user);
	}		

	let userTeste = buildUserDetailsWithKpiTeste(starIcon);

	usersKpis.push(userTeste.userKpis);

	let usersDetails = [];
	usersDetails.push(userTeste.userDetails);

	return {
		usersKpis,
		usersDetails
	};
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
	let idUserName = "user"+ static.idUser +"-master";

	const user = {
		id: idUserName,
		name: "Usuario " + i+1,
		nickName: idUserName,
		position: i +1,
		scoreKpis: kpis,
		lastPosition: getRandomChoice()		
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

function buildUserDetailsWithKpiTeste(starIcon) {
	let kpis = [
		buildKpi("danger", starIcon, "KPI-1"),
		buildKpi("success",starIcon, "KPI-2"),
		buildKpi("info",starIcon, "KPI-3"),
		buildKpi("warning",starIcon, "KPI-4")
	]
	
	let userKpis = buildUser(static.idUser +10, kpis);
	userKpis.id = "user-kpi-teste";	

	let userDetails = [
		{
			id: userKpis.id,
			firstName: "Nome",
			lastName: "ultimo nome",
			userName: "usernameteste",
			email: "email@test",
			company: "YoutTube Inc.",
			position: "Software Enginner",
			address: [
				"Endereço 1"
			],
			country: "Brasil",
			state: "Rio de Janeiro",
			zipCode: "21001-200",
			usersKpisId: userKpis.id
		}
	];

	return {userKpis, userDetails}
}