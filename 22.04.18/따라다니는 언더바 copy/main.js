const links = document.querySelectorAll("ul li a");
const target = document.querySelector(".target");
const colors = ['deepskyblue', 'orange', 'black', 'green', 'gold', 'magenta', 'darkblue'];

console.log(links);

for(let i=0; i<links.length; i++){
    links[i].addEventListener("click", function(e){
        e.preventDefault();
    });

    links[i].addEventListener("mouseenter", mouseenterFunc);
}

function mouseenterFunc(){
    if(!this.parentNode.classList.contains("active")){
        for(let i=0; i<links.length; i++){
            if(links[i].parentNode.classList.contains("active")){
                links[i].parentNode.classList.remove("active");
            }
            links[i].style.opacity = 0.25;
        }
        
        this.parentNode.classList.add("active");
        this.style.opacity = 1;

        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left + window.pageXOffset;
        const top = this.getBoundingClientRect().top + window.pageYOffset;
        const color = colors[Math.floor(Math.random() * links.length)];
        

        target.style.top = `${top}px`;
        target.style.left = `${left}px`;
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.borderColor = color;

    }
}