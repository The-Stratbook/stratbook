const fs = require('fs');
const path = require('path');

// Path to the tips folder
const tipsFolderPath = path.join(__dirname, 'public', 'data', 'siege', 'tips');
const tipsIndexFilePath = path.join(__dirname, 'public', 'data', 'siege', 'tipsIndex.json');

// Generate the tipsIndex.json file
const generateTipsIndex = () => {
  try {
    // Read all files in the tips folder
    const files = fs.readdirSync(tipsFolderPath);

    // Filter only .json files
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    // Write the list of files to tipsIndex.json
    fs.writeFileSync(tipsIndexFilePath, JSON.stringify(jsonFiles, null, 2));

    console.log('tipsIndex.json has been generated successfully!');
  } catch (error) {
    console.error('Error generating tipsIndex.json:', error);
  }
};

// Generate the operatorsIndex.json file
const generateOperatorsIndex = () => {
  try {
    // Path to the operators folder
    const operatorsFolderPath = path.join(__dirname, 'public', 'data', 'siege', 'operators');
    const operatorsIndexFilePath = path.join(__dirname, 'public', 'data', 'siege', 'operatorsIndex.json');

    // Read all files in the operators folder
    const files = fs.readdirSync(operatorsFolderPath);

    // Filter only .json files
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    // Write the list of files to operatorsIndex.json
    fs.writeFileSync(operatorsIndexFilePath, JSON.stringify(jsonFiles, null, 2));

    console.log('operatorsIndex.json has been generated successfully!');
  } catch (error) {
    console.error('Error generating operatorsIndex.json:', error);
  }
};

// Generate the mapsIndex.json file
const generateMapsIndex = () => {
  try {
    // Path to the maps folder
    const mapsFolderPath = path.join(__dirname, 'public', 'data', 'siege', 'maps');
    const mapsIndexFilePath = path.join(__dirname, 'public', 'data', 'siege', 'mapsIndex.json');

    // Read all files in the maps folder
    const files = fs.readdirSync(mapsFolderPath);

    // Filter only .json files
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    // Write the list of files to mapsIndex.json
    fs.writeFileSync(mapsIndexFilePath, JSON.stringify(jsonFiles, null, 2));

    console.log('mapsIndex.json has been generated successfully!');
  } catch (error) {
    console.error('Error generating mapsIndex.json:', error);
  }
};

// Run the scripts
generateTipsIndex();
generateOperatorsIndex();
generateMapsIndex();