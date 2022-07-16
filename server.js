function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    await sleep(500);
    console.log('Travis CI in the buildingggg')
    await sleep(500)
  }
}

main();
