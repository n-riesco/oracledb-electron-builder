try {
	require("oracledb");
} catch (error) {
	console.log(error);
	process.exit(1);
}

console.log("oracledb required successfully");
process.exit(0);
