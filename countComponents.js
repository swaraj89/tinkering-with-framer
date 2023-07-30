// countComponents.js
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

// Function to count functional components in a file
function countFunctionalComponents(fileContent) {
  const ast = parser.parse(fileContent, {
    sourceType: 'module',
    plugins: ['tsx'],
  });

  let count = 0;

  traverse(ast, {
    FunctionDeclaration(path) {
      count++;
    },
    FunctionExpression(path) {
      count++;
    },
    ArrowFunctionExpression(path) {
      count++;
    },
  });

  return count;
}

// Function to read a file and count functional components
function countFunctionalComponentsInFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return countFunctionalComponents(fileContent);
}

// Function to traverse through a folder and count functional components in all files
function traverseFolder(folderPath) {
  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      const count = countFunctionalComponentsInFile(filePath);
      console.log(`${file}: ${count} functional components`);
    } else if (stats.isDirectory()) {
      traverseFolder(filePath);
    }
  });
}

const folderPath = './src'; // Change this to the path of the folder you want to traverse
traverseFolder(folderPath);
