class Eleitor{
    constructor(nome, idade, titulo){
        this.nome = nome
        this.idade = idade
        this.titulo = titulo
    }

    verifcaVoto(){
        let idade = this.idade

        if(idade<16){
            console.log("Abaixo da idade minima para votar")
            return "Abaixo da idade minima para votar"
        }else if((idade>=16)&&(idade<18)){
    console.log("Idade onde o voto é facultativo")
    return "Idade onde o voto é facultativo"
            }else if((idade>=18)&&(idade<=70)){
                console.log("Idade onde o voto é obrigatório")
                return "Idade onde o voto é obrigatório"
            }else if(idade > 70){
                console.log("Idade onde o voto é facultativo")
                return "Idade onde o voto é facultativo"
            }
            
        }
}