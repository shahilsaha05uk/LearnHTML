import inquirer from 'inquirer';
import Qr from "qr-image";
import Fs from "fs";

inquirer
    .prompt([{
        message: "The URL: ",
        name: "URL"
        }])
    .then((answers) => {
        const url = answers.URL;
        var img = Qr.image(url, {type: "png"});
        img.pipe(Fs.createWriteStream("qr_image2.png"));
        
        fs.writeFile("qr_url.txt", url, (err)=>{
           if(err) throw err;
           console.log("url written success!!");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });