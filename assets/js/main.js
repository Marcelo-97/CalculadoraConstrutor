function Calculadora(){
    
    this.display=document.querySelector('.display');

    this.capturaEnter=()=>{
        this.display.addEventListener('keydown', e => {
            if(e.keyCode === 13) return this.realizaConta();
        })
    }

    this.capturaCliques=()=>{
        document.addEventListener('click', (e)=>{
            const el=e.target;
            if(el.classList.contains('btn-num')){this.addNumDisplay(el)};
            if(el.classList.contains('btn-clear')){this.clear()};
            if(el.classList.contains('btn-del')){this.del()};
            if(el.classList.contains('btn-eq')){this.realizaConta(el)};
            
            });
    };


    this.addNumDisplay= el => this.display.value += el.innerText;
    this.display.focus();

    this.clear= () => this.display.value=''

    this.del=()=>this.display.value=this.display.value.slice(0,-1)

    this.realizaConta=()=>{
        let conta= this.display.value;

        try{
            conta=eval(conta);

            if(!conta){
                alert('Conta inválida');
                return;
            }
            this.display.value=String(conta);
        }catch (e){
            alert('Conta inválida');
            return;
        }
    };

    this.inicia=()=>{
        this.capturaCliques();
        this.capturaEnter();
    };
    
}

const calculadora= new Calculadora();
calculadora.inicia(); 