const main = document.querySelector("main")
const template = document.querySelector(".hanoi");
const botao3 = document.querySelector(".facil");
const botao4 = document.querySelector(".medio");
const botao5 = document.querySelector(".dificl");

botao5.addEventListener("click", criarCincoDiscos)
botao4.addEventListener("click", criarQuatroDiscos)
botao3.addEventListener("click", criarTresDiscos)


function criarCincoDiscos() {
    template.innerHTML = '';

    const torre1 = document.createElement("div");
    const torre2 = document.createElement("div");
    const torre3 = document.createElement("div");
    const torreEspera = document.createElement("div");

    const disco1 = document.createElement("div");
    const disco2 = document.createElement("div");
    const disco3 = document.createElement("div");
    const disco4 = document.createElement("div");
    const disco5 = document.createElement("div");
    const discoPermanente1 = document.createElement("div");
    const discoPermanente2 = document.createElement("div");
    const discoPermanente3 = document.createElement("div");


    torre1.classList.add('torre', 'torre1');
    torre2.classList.add('torre', 'torre2');
    torre3.classList.add('torre', 'torre3');
    torreEspera.classList.add('torre', 'torre4');

    disco1.classList.add('disco', 'd1', 'torre1', 'p5');
    disco2.classList.add('disco', 'd2', 'torre2', 'p4');
    disco3.classList.add('disco', 'd3', 'torre2', 'p3');
    disco4.classList.add('disco', 'd4', 'torre2', 'p2');
    disco5.classList.add('disco', 'd5', 'torre2', 'p1');
    discoPermanente1.classList.add('disco', 'disco-base');
    discoPermanente2.classList.add('disco', 'disco-base');
    discoPermanente3.classList.add('disco', 'disco-base');


    template.appendChild(torre1);
    template.appendChild(torre2);
    template.appendChild(torre3);
    template.appendChild(torreEspera);


    torre1.appendChild(discoPermanente1);
    torre2.appendChild(discoPermanente2);
    torre3.appendChild(discoPermanente3);


    torre2.appendChild(disco1);
    torre2.appendChild(disco2);
    torre2.appendChild(disco3);
    torre2.appendChild(disco4);
    torre2.appendChild(disco5);


    //CHAMANDO FUNÇÃO QUANDO CLICAR NA TORRE//
    disco5.addEventListener("click", pegarDisco);
    disco4.addEventListener("click", pegarDisco);
    disco3.addEventListener("click", pegarDisco);
    disco2.addEventListener("click", pegarDisco);
    disco1.addEventListener("click", pegarDisco);

    let discosEspera = torreEspera.childElementCount;

    function pegarDisco(e) {
        let clique = e.currentTarget;
        let torre = clique.closest('.torre')
        let disco = clique.closest('.disco');
        discosEspera = torreEspera.childElementCount;
        console.log(clique, disco)

        if (clique === disco) {
            if (discosEspera == 0) {  
                if(disco === torre.lastElementChild){ 
                torreEspera.appendChild(disco);
                }
                }
            

        }

    }

    torre1.addEventListener("click", deixarDisco);
    torre2.addEventListener("click", deixarDisco);
    torre3.addEventListener("click", deixarDisco);

    function deixarDisco(e) {
        let clique = e.target;
        let torre = clique.closest('.torre');
        if (torreEspera.lastElementChild.clientWidth < torre.lastElementChild.clientWidth) {
            torre.appendChild(torreEspera.lastElementChild);
        }
        if (torre.childElementCount === 6) {
            const ganhou = document.createElement("div");
            ganhou.classList.add("ganhou");
            main.appendChild(ganhou);
            ganhou.innerHTML = 'Você ganhou!';
            ganhou.style.visibility = 'visible';

            const button = document.createElement("BUTTON");
            button.classList.add('buttonWinner');
            button.id = 'buttonWinner'
            button.innerText = 'Reset';
            ganhou.appendChild(button);
            const buttonWinner = document.getElementById('buttonWinner');
            buttonWinner.addEventListener('click', function(){
                template.innerHTML='';
                ganhou.style.display = 'none';
            });
        }

    }
}

function criarQuatroDiscos() {
    template.innerHTML = '';

    const torre1 = document.createElement("div");
    const torre2 = document.createElement("div");
    const torre3 = document.createElement("div");
    const torreEspera = document.createElement("div");

    const disco1 = document.createElement("div");
    const disco2 = document.createElement("div");
    const disco3 = document.createElement("div");
    const disco4 = document.createElement("div");

    const discoPermanente1 = document.createElement("div");
    const discoPermanente2 = document.createElement("div");
    const discoPermanente3 = document.createElement("div");


    torre1.classList.add('torre', 'torre1');
    torre2.classList.add('torre', 'torre2');
    torre3.classList.add('torre', 'torre3');
    torreEspera.classList.add('torre', 'torre4');

    disco1.classList.add('disco', 'd1', 'torre1', 'p5');
    disco2.classList.add('disco', 'd2', 'torre2', 'p4');
    disco3.classList.add('disco', 'd3', 'torre2', 'p3');
    disco4.classList.add('disco', 'd4', 'torre2', 'p2');

    discoPermanente1.classList.add('disco', 'disco-base');
    discoPermanente2.classList.add('disco', 'disco-base');
    discoPermanente3.classList.add('disco', 'disco-base');


    template.appendChild(torre1);
    template.appendChild(torre2);
    template.appendChild(torre3);
    template.appendChild(torreEspera);


    torre1.appendChild(discoPermanente1);
    torre2.appendChild(discoPermanente2);
    torre3.appendChild(discoPermanente3);


    torre2.appendChild(disco1);
    torre2.appendChild(disco2);
    torre2.appendChild(disco3);
    torre2.appendChild(disco4);


    disco4.addEventListener("click", pegarDisco);
    disco3.addEventListener("click", pegarDisco);
    disco2.addEventListener("click", pegarDisco);
    disco1.addEventListener("click", pegarDisco);


    let discosEspera = torreEspera.childElementCount;


    function pegarDisco(e) {
        let clique = e.currentTarget;
        let torre = clique.closest('.torre');
        let disco = clique.closest('.disco');
        discosEspera = torreEspera.childElementCount;

        if (clique === disco) {
            if (discosEspera == 0) {
                if(disco === torre.lastElementChild){ 
                console.log(discosEspera)
                torreEspera.appendChild(disco);
            }
        }

        }

    }

    torre1.addEventListener("click", deixarDisco);
    torre2.addEventListener("click", deixarDisco);
    torre3.addEventListener("click", deixarDisco);

    function deixarDisco(e) {
        let clique = e.target;
        let torre = clique.closest('.torre');
        if (torreEspera.lastElementChild.clientWidth < torre.lastElementChild.clientWidth) {
            torre.appendChild(torreEspera.lastElementChild);
        }
        if (torre.childElementCount === 5) {
            const ganhou = document.createElement("div");
            ganhou.classList.add("ganhou");
            main.appendChild(ganhou);
            ganhou.innerHTML = 'Você ganhou!';
            ganhou.style.visibility = 'visible';

            const button = document.createElement("BUTTON");
            button.classList.add('buttonWinner');
            button.id = 'buttonWinner'
            button.innerText = 'Reset';
            ganhou.appendChild(button);
            const buttonWinner = document.getElementById('buttonWinner');
            buttonWinner.addEventListener('click', function(){
                template.innerHTML='';
                ganhou.style.display = 'none';
            });
        }

    }
}

function criarTresDiscos() {
    template.innerHTML = '';
    const torre1 = document.createElement("div");
    const torre2 = document.createElement("div");
    const torre3 = document.createElement("div");
    const torreEspera = document.createElement("div");

    const disco1 = document.createElement("div");
    const disco2 = document.createElement("div");
    const disco3 = document.createElement("div");

    const discoPermanente1 = document.createElement("div");
    const discoPermanente2 = document.createElement("div");
    const discoPermanente3 = document.createElement("div");


    torre1.classList.add('torre', 'torre1');
    torre2.classList.add('torre', 'torre2');
    torre3.classList.add('torre', 'torre3');
    torreEspera.classList.add('torre', 'torre4');

    disco1.classList.add('disco', 'd1', 'torre1', 'p5');
    disco2.classList.add('disco', 'd2', 'torre2', 'p4');
    disco3.classList.add('disco', 'd3', 'torre2', 'p3');


    discoPermanente1.classList.add('disco', 'disco-base');
    discoPermanente2.classList.add('disco', 'disco-base');
    discoPermanente3.classList.add('disco', 'disco-base');


    template.appendChild(torre1);
    template.appendChild(torre2);
    template.appendChild(torre3);
    template.appendChild(torreEspera);


    torre1.appendChild(discoPermanente1);
    torre2.appendChild(discoPermanente2);
    torre3.appendChild(discoPermanente3);


    torre2.appendChild(disco1);
    torre2.appendChild(disco2);
    torre2.appendChild(disco3);


    disco3.addEventListener("click", pegarDisco);
    disco2.addEventListener("click", pegarDisco);
    disco1.addEventListener("click", pegarDisco);



    let discosEspera = torreEspera.childElementCount;


    function pegarDisco(e) {
        let clique = e.currentTarget;
        let torre = clique.closest('.torre');
        let disco = clique.closest('.disco');
        discosEspera = torreEspera.childElementCount;

        if (clique === disco) {
            if (discosEspera == 0) {
                if(disco === torre.lastElementChild){ 
                torreEspera.appendChild(disco);
            }
        }

        }

    }

    torre1.addEventListener("click", deixarDisco);
    torre2.addEventListener("click", deixarDisco);
    torre3.addEventListener("click", deixarDisco);

    function deixarDisco(e) {
        let clique = e.target;
        let torre = clique.closest('.torre');
        if (torreEspera.lastElementChild.clientWidth < torre.lastElementChild.clientWidth) {
            torre.appendChild(torreEspera.lastElementChild);
        }
        if (torre.childElementCount === 4) {
            const ganhou = document.createElement("div");
            ganhou.classList.add("ganhou");
            main.appendChild(ganhou);
            ganhou.innerHTML = 'Você ganhou!';
            ganhou.style.visibility = 'visible';

            const button = document.createElement("BUTTON");
            button.classList.add('buttonWinner');
            button.id = 'buttonWinner'
            button.innerText = 'Reset';
            ganhou.appendChild(button);
            const buttonWinner = document.getElementById('buttonWinner');
            buttonWinner.addEventListener('click', function(){
                template.innerHTML='';
                ganhou.style.display = 'none';
            });
        }

    }
}