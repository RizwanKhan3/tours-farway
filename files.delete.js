
import fs from 'fs'
const directory = 'F:\\WordPress\\Udemy - Wordpress for Beginners - Master Wordpress Quickly 2022-9'
const di = fs.readdirSync(directory)


di.forEach((item) => {
    const direc = item
    const insideFile = fs.readdirSync(`${directory}\\${item}`)

    insideFile.flat().map((item) => {
        if (item.includes('.srt')) {
            fs.unlinkSync(`${directory}\\${direc}\\${item}`)
            console.log(`${item} Delete`);
        }

    })
})