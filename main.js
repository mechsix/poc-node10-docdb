const MongoClient = require('mongodb').MongoClient

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

const client = MongoClient.connect(
    `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}`,
    // {
    //   tlsCAFile: `rds-combined-ca-bundle.pem` //Specify the DocDB; cert
    // },
    (err, client) => {
        if(err) {
            throw err;
        }

        db = client.db(DB_NAME);

        db.listCollections().toArray((getErr, coll) => {
            console.log(">>>", coll)
        })

        client.close()
    }
);

