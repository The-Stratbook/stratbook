const fs = require('fs');
const path = require('path');

// Path to the tips folder
const tipsFolderPath = path.join(__dirname, 'public', 'data', 'siege', 'tips');
const indexFilePath = path.join(__dirname, 'public', 'data', 'siege', 'tipsIndex.json');

// Generate the tipsIndex.json file
const generateTipsIndex = () => {
  try {
    // Read all files in the tips folder
    const files = fs.readdirSync(tipsFolderPath);

    // Filter only .json files
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    // Write the list of files to tipsIndex.json
    fs.writeFileSync(indexFilePath, JSON.stringify(jsonFiles, null, 2));

    console.log('tipsIndex.json has been generated successfully!');
  } catch (error) {
    console.error('Error generating tipsIndex.json:', error);
  }
};

// Run the script
generateTipsIndex();