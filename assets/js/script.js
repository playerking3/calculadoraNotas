const aluno = {
    aritmetica: function(n1,n2,n3,n4,n5){
        let total = (n1 + n2 + n3 + n4 + n5) / 5
        return aluno.validate(total.toFixed(2))
    },
    ponderada: function(n1,n2,n3,n4,n5,p1,p2,p3,p4,p5){
        let f1 = n1 * p1
        let f2 = n2 * p2
        let f3 = n3 * p3
        let f4 = n4 * p4
        let f5 = n5 * p5
        let divisor = p1 + p2 + p3 + p4 + p5
        total = (f1 + f2 + f3 + f4 + f5) / divisor
        return aluno.validate(total.toFixed(2))  
    },
    condicao: function(nota){
        if (nota >= 7){
            return "O aluno foi aprovado com a média: "+ nota
        }else if(nota < 7 && nota >= 5){
            return "O aluno está em exame com a média: "+ nota
        }else{
            return "O aluno reprovou com a média: "+ nota
        }
    },
    validate: function(nota){
        if (nota == "NaN"){
            return "Erro, adicione apenas números e casso houver casa decimal separar com ponto ( . )"
        }else{
            return aluno.condicao(nota)
        }
    }
}

var notaAritmetica = document.getElementById("form1")
notaAritmetica.addEventListener("submit", enviarAritmetica)
function enviarAritmetica(event){
    event.preventDefault()
    let data = new FormData(this)
    let n1 = parseFloat((data.get("nota1")))
    let n2 = parseFloat((data.get("nota2")))
    let n3 = parseFloat((data.get("nota3")))
    let n4 = parseFloat((data.get("nota4")))
    let n5 = parseFloat((data.get("nota5")))
    resultado.innerHTML = (aluno.aritmetica(n1,n2,n3,n4,n5))
}

let notaPonderada = document.getElementById("form2")
notaPonderada.addEventListener("submit", enviarPonderada)
function enviarPonderada(event){
    event.preventDefault()
    let data = new FormData(this)
    let n1 = parseFloat((data.get("nota1")))
    let n2 = parseFloat((data.get("nota2")))
    let n3 = parseFloat((data.get("nota3")))
    let n4 = parseFloat((data.get("nota4")))
    let n5 = parseFloat((data.get("nota5")))
    let p1 = parseFloat((data.get("peso1")))
    let p2 = parseFloat((data.get("peso2")))
    let p3 = parseFloat((data.get("peso3")))
    let p4 = parseFloat((data.get("peso4")))
    let p5 = parseFloat((data.get("peso5")))
    resultado.innerHTML = (aluno.ponderada(n1,n2,n3,n4,n5,p1,p2,p3,p4,p5))
}

let resultado = document.getElementById("resultado")


let btnAritmetica = document.getElementById("btnAritmetica")
let btnPonderada = document.getElementById("btnPonderada")

btnAritmetica.addEventListener("click",() => {
    if (btnAritmetica.className != "btn selected") {
        btnAritmetica.className = "btn selected"
        let aberto = document.getElementById("sectionForm1")
        aberto.style.display = "block"
        let fechado = document.getElementById("sectionForm2")
        fechado.style.display = "none"
        btnPonderada.className = "btn"
    }
})

btnPonderada.addEventListener("click",() => {
    if (btnPonderada.className != "btn selected") {
        btnPonderada.className = "btn selected"
        let aberto = document.getElementById("sectionForm2")
        aberto.style.display = "block"
        let fechado = document.getElementById("sectionForm1")
        fechado.style.display = "none"
        btnAritmetica.className = "btn"
    }
})