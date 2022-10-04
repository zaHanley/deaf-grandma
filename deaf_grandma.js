// i wa
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
    
    

    
    
        //         input = prompt('LEAVING SO SOON?');
        //         count = 1;
    // if (input === 'GOODBYE' && prompt('LEAVING SO SOON?') === 'GOODBYE') {
    //     input = '';
    //     return prompt('LATER SKATER!')
    //     console.log(input)
    // while (count = 0) {
    //     
    //     } else if (input.toUpperCase() === input && input != 'GOODBYE') {
    //         input = prompt(`NO, NOT SINCE 1946!`);
    //         count = 0;
    //     } 
        
        
    // } 
    // else if (count === 1 && input.replace(/[^A-Za-z]/ig, '') === 'GOODBYE') {
    //     return window.prompt('LATER SKATER')
    // } console.log(input.replace(/[^A-Za-z]/ig) === input.toLowerCase()) 
    //     input = prompt('SPEAK UP')
    
        
    }
    


deafGrandma()