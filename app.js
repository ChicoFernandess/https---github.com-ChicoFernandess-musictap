window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const tappers = document.querySelectorAll(".tappers div"); // select all the divs inside the father div tappers
    const visual = document.querySelector(".visual");
    const colors = [
        "rgb(243, 140, 103)",
        "rgb(27, 9, 2)",
        "rgb(199, 216, 43)",
        "rgb(50, 171, 201)",
        "rgb(88, 20, 90)",
        "rgb(241, 29, 29)",
    ];

    //Sons
    tappers.forEach((tapper, index) =>{ //index para obter o numero de cada som sound[2] corresponde ao terceiro som
        tapper.addEventListener('click', function(){
            sounds[index].currentTime = 0; //permite clicar nos botoes repetidamente sem ter que esperar que a musica acabe
            sounds[index].play();

            createBubbles(index); //o primeiro index do forEach entra nesta funcao que depois é "trabalhada" na funcao em baixo creatbubbles que assim ja reconhece o valor index
        });
    });

    //Create function to make the bubbles for the tappers
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble); //adicionar a div bubble à div visual do html
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = 'jump 1s ease'; // animacao jump depois é adicionada no style.css
        //remover bubble a cada vez que aanimacao termina 
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
});