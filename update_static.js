#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ファイルパス
const contentDir = path.join(__dirname, 'content/static');
const libsDir = path.join(__dirname, 'libs');

// 読み込むファイル
const files = {
  privacy: path.join(contentDir, 'privacy.md'),
  term: path.join(contentDir, 'term.md'),
  privacy_en: path.join(contentDir, 'privacy_en.md'),
  term_en: path.join(contentDir, 'term_en.md')
};

// 出力ファイル
const outputFiles = {
  japanese: path.join(libsDir, 'static.js'),
  english: path.join(libsDir, 'static_en.js')
};

function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return '';
  }
}

function escapeBackticks(content) {
  return content.replace(/`/g, '\\`').replace(/\${/g, '\\${');
}

function updateStaticFiles() {
  console.log('Reading markdown files...');
  
  // 日本語ファイルの読み込み
  const privacyContent = readFileContent(files.privacy);
  const termContent = readFileContent(files.term);
  
  // 英語ファイルの読み込み
  const privacyEnContent = readFileContent(files.privacy_en);
  const termEnContent = readFileContent(files.term_en);
  
  console.log('Generating static.js...');
  
  // 日本語版の生成
  const staticJsContent = `export const content = \`${escapeBackticks(privacyContent)}\`;

export const content_term = \`${escapeBackticks(termContent)}\`;
`;

  console.log('Generating static_en.js...');
  
  // 英語版の生成
  const staticEnJsContent = `export const content = \`${escapeBackticks(privacyEnContent)}\`;

export const content_term = \`${escapeBackticks(termEnContent)}\`;
`;

  // ファイルの書き込み
  try {
    fs.writeFileSync(outputFiles.japanese, staticJsContent);
    console.log('✅ libs/static.js updated successfully');
  } catch (error) {
    console.error('❌ Error writing libs/static.js:', error.message);
  }

  try {
    fs.writeFileSync(outputFiles.english, staticEnJsContent);
    console.log('✅ libs/static_en.js updated successfully');
  } catch (error) {
    console.error('❌ Error writing libs/static_en.js:', error.message);
  }
}

// スクリプト実行
if (require.main === module) {
  updateStaticFiles();
}

module.exports = { updateStaticFiles };