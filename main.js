var cognomi = ['martino','regna','marra','dizoglio'];

var cognomeUtente= prompt('inseriri il tuo cognome');

cognomi.push(cognomeUtente);

var i=0;
while ( i<cognomi.length ) {
 document.writeln(cognomi.sort()[i] +'<br>');
 i++;
}

document.writeln('Il tuo cognome è il' + cognomeUtente[i] + 'della lista');
