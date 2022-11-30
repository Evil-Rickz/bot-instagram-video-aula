// Deixar de seguir automaticamente
let contador = 0;
document.querySelectorAll('._acat').forEach((item, index) => {
    setTimeout(() => {
        if(item.innerText == 'Seguindo') {
            item.click();
            document.querySelectorAll('._a9-_').forEach(item => {
                if(item.innerText == 'Deixar de seguir') {
                    item.click();
                    contador++;
                    console.log(`Você deixou de seguir ${contador} pessoa(s)!`)
                }
            document.querySelectorAll('._a9_1').forEach(item => {
                if(item.innerText == 'OK') {
                    item.click();
            })
        } 
    }, index * 10000);
});
