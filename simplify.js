const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Preprocess all images in the folder by resizing, grayscaling, and saving raw buffers
async function preprocessFolderImages(inputFolder, outputFolder) {
    const files = fs.readdirSync(inputFolder).filter(file => ['.png', '.jpg', '.jpeg'].includes(path.extname(file).toLowerCase()));

    // Ensure output folder exists
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
    }

    // Process all images in parallel
    await Promise.all(files.map(async (file) => {
        const inputFilePath = path.join(inputFolder, file);
        const outputFilePath = path.join(outputFolder, file + '.bin');

        const processedImage = await sharp(inputFilePath)
            .resize(64, 64, { fit: 'fill' })
            .grayscale()
            .removeAlpha()
            .raw()
            .toBuffer();

        // Save the processed image as a binary file
        fs.writeFileSync(outputFilePath, processedImage);
        console.log(`Processed and saved: ${file}`);
    }));
}

// Example usage
const inputFolder = './balls/temp';   // Absolute path to folder with images
const outputFolder = './newballs';    // Absolute path to output folder

preprocessFolderImages(inputFolder, outputFolder)
    .then(() => console.log("Preprocessing complete!"))
    .catch((err) => console.error("Error during preprocessing:", err));
