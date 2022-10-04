function deafGrandma() {
    let input = prompt('HEY KID');
    let count = 0;
    
    
    while (count < 2){
        if (input.replace(/[^A-Za-z]/ig, '') === 'GOODBYE' && count === 1) {
            alert('LATER, SKATER!');
            count ++;
        } else if (input.replace(/[^A-Za-z]/ig, '') === 'GOODBYE') {
            input = prompt('LEAVING SO SOON?');
            count ++;
        } else if (input === ''){
            input = prompt('WHAT?!');
        } else if (input.toUpperCase() === input && input != 'GOODBYE') {
            input = prompt('NO, NOT SINCE 1946!');
        } else {
            input = prompt('SPEAK UP, KID!')
        }
    }        
}
    


deafGrandma()