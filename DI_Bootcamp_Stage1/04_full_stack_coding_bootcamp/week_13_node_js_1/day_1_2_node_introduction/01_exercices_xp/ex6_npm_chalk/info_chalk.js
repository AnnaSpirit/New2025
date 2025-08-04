// chalk_reference.js

// Importer la bibliothèque chalk
// Import chalk library
import chalk from 'chalk';

const log = console.log;




// Text colors
// Couleurs de texte
console.log('\n=== Text Colors ===');
console.log(chalk.black('black'));
console.log(chalk.red('red'));
console.log(chalk.green('green'));
console.log(chalk.yellow('yellow'));
console.log(chalk.blue('blue'));
console.log(chalk.magenta('magenta'));
console.log(chalk.cyan('cyan'));
console.log(chalk.white('white'));
console.log(chalk.gray('blackBright (gray alias)'));
console.log(chalk.redBright('redBright'));
console.log(chalk.greenBright('greenBright'));
console.log(chalk.yellowBright('yellowBright'));
console.log(chalk.blueBright('blueBright'));
console.log(chalk.magentaBright('magentaBright'));
console.log(chalk.cyanBright('cyanBright'));
console.log(chalk.whiteBright('whiteBright'));


// Background colors
// Couleurs de fond
console.log('\n=== Background Colors ===');
console.log(chalk.bgBlack('bgBlack'));
console.log(chalk.bgRed('bgRed'));
console.log(chalk.bgGreen('bgGreen'));
console.log(chalk.bgYellow('bgYellow'));
console.log(chalk.bgBlue('bgBlue'));
console.log(chalk.bgMagenta('bgMagenta'));
console.log(chalk.bgCyan('bgCyan'));
console.log(chalk.bgWhite('bgWhite'));
console.log(chalk.bgGray('bgBlackBright (bgGray alias)'));
console.log(chalk.bgRedBright('bgRedBright'));
console.log(chalk.bgGreenBright('bgGreenBright'));
console.log(chalk.bgYellowBright('bgYellowBright'));
console.log(chalk.bgBlueBright('bgBlueBright'));
console.log(chalk.bgMagentaBright('bgMagentaBright'));
console.log(chalk.bgCyanBright('bgCyanBright'));
console.log(chalk.bgWhiteBright('bgWhiteBright'));

// COMBINE TEXT AND BACKGROUND COLORS
// Combiner les couleurs de texte et de fond
console.log(chalk.white.bgRed('white text on red background'));

// Modifiers
// Modificateurs de style
console.log('\n=== Modifiers ===');

console.log(chalk.reset('reset - Text reset to default')); // 🔄
console.log(chalk.bold('bold - Bold text'));               // 🅱️
console.log(chalk.dim('dim - Dim text (low opacity)'));    // 🌫️
console.log(chalk.italic('italic - Italic text (maybe)')); // *Italique*
console.log(chalk.underline('underline - Underlined text'));// ➖
console.log(chalk.overline('overline - Overlined text'));   // ➖ en haut
console.log(chalk.inverse('inverse - Inverted colors'));     // ⬛⬜
console.log(chalk.hidden('hidden - You should not see this text 😶')); // 👻
console.log(chalk.strikethrough('strikethrough - Like this')); // ~Rayé~
console.log(chalk.visible('visible - This should always show if color is supported')); // 👁️