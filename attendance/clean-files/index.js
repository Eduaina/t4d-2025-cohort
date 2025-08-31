const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const chardet = require('chardet');
const iconv = require('iconv-lite');

const inputFolder = './clean-files/input'; // the path to your folder containing CSV files
const outputFolder = './files/attendance'; // the path where you want to save the text files

// Create output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

fs.readdir(inputFolder, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    files.forEach((file) => {
        if (file.endsWith('.csv')) {
            const filePath = path.join(inputFolder, file);
            const encoding = chardet.detectFileSync(filePath);

            // Extract week number from the file name
            const weekMatch = file.match(/week[ -](\d+)/i);
            const weekNumber = weekMatch ? weekMatch[1] : 'unknown';

            // Create folder based on week number if it doesn't exist
            const weekFolder = path.join(outputFolder, `week-${weekNumber}`);
            if (!fs.existsSync(weekFolder)) {
                fs.mkdirSync(weekFolder);
            }

            // Construct output file path within the week folder
            const outputFilePath = path.join(weekFolder, file);

            // Read file content with detected encoding
            const fileContent = fs.readFileSync(filePath);
            const utf8Content = iconv.decode(fileContent, encoding);

            const [, right] = utf8Content.toLocaleString().split('2. Participants');
            const [content] = (right || utf8Content).toLocaleString().split('3. In-Meeting Activities');
            console.log({ content });
            fs.writeFileSync(outputFilePath, content.toLocaleString().trim(), { encoding: 'utf8' });

            console.log(`CSV file ${file} processed successfully.`, outputFilePath);
        }
    });
});
