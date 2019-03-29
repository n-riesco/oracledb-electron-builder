try {
	var oracledb = require("oracledb");
	console.log(oracledb.oracleClientVersion);
} catch (error) {
	console.log(error);
	process.exit(1);
}

console.log("oracledb required successfully");
process.exit(0);
