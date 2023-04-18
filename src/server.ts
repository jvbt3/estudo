import app from "./app";
import routes from "./routes";


try {
    app.listen(3000, 'localhost');
    console.log('listeng');
} catch (err) {
    console.log(err);
}