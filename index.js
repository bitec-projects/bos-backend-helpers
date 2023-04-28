let moment = require('moment-timezone');

require('colors');

addDateTimeToMessage = function (message) {
	try {
		const spTime = moment.tz(`America/Sao_Paulo`);
		return `${spTime.format(`DD/MM/YYYY HH:mm:ss`)} - ${message}`;
	} catch (error) {
		console.log(`Erro adicionando data na mensagem de log ${error}`.red);
	}
};

module.exports = {
	log: {
		info: function (message) {
			console.log(addDateTimeToMessage(message).blue);
		},
		attention: function (message) {
			console.log(addDateTimeToMessage(message).yellow);
		},
		error: function (message) {
			console.log(addDateTimeToMessage(message).red);
		},
		success: function (message) {
			console.log(addDateTimeToMessage(message).green);
		}
	}
};
