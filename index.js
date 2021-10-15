

const textArea = document.getElementById('textArea');
const lineTextToText = (lineText, convertFunc = null) => {
  const line = lineText.split('\t');
  if (convertFunc != null) {
    return toText(convertFunc(line));
  }
  return toText(line);
}

const toText = (lineArray) => {
  return `|${lineArray.join('|')}|\n`;
}


textArea.addEventListener('change', (ev) => {
  const text = ev.target.value;
  
  const lines = text.split('\n');
  const firstLine = lines[0];

  const headerText = lineTextToText(firstLine);
  const borderText = lineTextToText(firstLine, (arr) => arr.map(x => `---`));
  console.log(headerText);
  console.log(borderText);

  const bodies = lines.slice(1).map(line => {
    return lineTextToText(line);
  });
  
  const result = document.getElementById('resultArea');
  result.innerText = `${headerText}${borderText}${bodies.join('')}`;
})