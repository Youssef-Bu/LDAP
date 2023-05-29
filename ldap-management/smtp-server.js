const SMTPServer = require("smtp-server").SMTPServer;
const mailparser = require("mailparser");

const server = new SMTPServer({
  onAuth(auth, session, callback) {
    const username = auth.username;
    const password = auth.password;
  },

  onData(stream, session, callback) {
    const emails = [];

    const parser = new mailparser.Parser();

    parser.on("headers", (headers) => {
      const email = {
        from: headers.get("from").text,
        to: headers.get("to").text,
        subject: headers.get("subject"),
      };

      emails.push(email);
    });

    parser.on("end", () => {
      callback(null, emails.slice(0, 10));
    });

    stream.pipe(parser);
  },
});

server.listen(25, () => {
  console.log("Serveur SMTP démarré sur le port 25");
});
