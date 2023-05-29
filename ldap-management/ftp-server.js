import ftpsrv from "ftp-srv";

const ftpServer = new ftpsrv({
  url: "ftp://localhost:2121",
  anonymous: true,
  greeting: "Bienvenue sur le serveur FTP",
});

ftpServer.on("login", (data, resolve, reject) => {
  const username = data.username;
  const password = data.password;
});

ftpServer
  .listen()
  .then(() => console.log("Serveur FTP démarré sur le port 2121"))
  .catch((err) =>
    console.error("Erreur lors du démarrage du serveur FTP", err)
  );
