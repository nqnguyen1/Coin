const FtpDeploy = require("ftp-deploy");
const ftpConfig = require("../ftp-config.json");

const ftpDeploy = new FtpDeploy();

ftpDeploy
  .deploy(ftpConfig)
  .then(() => console.log("Deployment finished successfully"))
  .catch((err) => console.error("Deployment error:", err));
