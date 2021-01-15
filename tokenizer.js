
const LETTERS = /[a-z]/i;

module.exports = function tokenizer(input){

    const tokens = [];
    
    let current = 0;
    while (current < input.length) {
        let char = input[current];

        switch(char) {
            case '(':
                tokens.push({
                    type: 'paren',
                    value: '('
                  });
                  current++;
                  continue;
            break;
            case LETTERS.test(char):
                let value = '';
                while (LETTERS.test(char)) {
                    value += char;
                    char = input[++current];
                }
                tokens.push({
                    type: 'name',
                    value
                  });
                  continue;
            break;
          }

        throw new TypeError(`Unknown char: '${char}'`)
    }


    return tokens;
    
}