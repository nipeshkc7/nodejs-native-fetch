async function main(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const json = await res.json();
    console.log(json);
}

main();