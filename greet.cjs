async function main() {
  const { default: chalk } = await import("chalk");

  console.log(chalk.green("Hello, Jude!"));
  console.log(chalk.blue.bold("Welcome to Node.js"));
  console.log(chalk.bgYellow.black(" Lab 3 complete "));
}

main();