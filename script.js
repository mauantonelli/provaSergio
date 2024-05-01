const vetorObjetos = [ 
    {   
        issn: 1,
        autor: 'Bill Gates',
        titulo: 'The Road Ahead',
        statusLeitura: true
    },
    {   
        issn: 2,
        autor: 'Steve Jobs',
        titulo: 'Walter Isaacson',
        statusLeitura: false
    },
    {   
        issn: 3,
        autor: 'Alex Fergusson',
        titulo: 'Manchester United Legend', 
        statusLeitura: true
    },
    {   
        issn: 4,
        autor: 'Suzanne Collins',
        titulo: 'Mockingjay: The Final Book of The Hunger Games', 
        statusLeitura: false
    }
];

function funcao1a() {
    const naoLidos = vetorObjetos.filter(objeto => objeto.statusLeitura === false);
    imprimir(naoLidos);
}

function funcao1b() {
    const novoObjeto = {
        issn: parseInt(document.getElementById("ipt_ISSN").value),
        autor: document.getElementById("ipt_Autor").value,
        titulo: document.getElementById("ipt_Titulo").value,
        statusLeitura: (document.getElementById("ipt_StatusLeitura").value === "true")
    };

    const existeISSN = vetorObjetos.some(objeto => objeto.issn === novoObjeto.issn);

    if (existeISSN) {
        alert("Erro: ISSN já existente.");
    } else {
        vetorObjetos.push(novoObjeto);
    }
}

function funcao2() {
    const ul = document.createElement("ul");

    vetorObjetos.forEach(objeto => {
        const li = document.createElement("li");
        li.textContent = `ISSN: ${objeto.issn}, Autor: ${objeto.autor}, Título: ${objeto.titulo}, Status de Leitura: ${objeto.statusLeitura}`;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

function imprimir(vetor) {
    const div = document.getElementById("div1");
    div.textContent = JSON.stringify(vetor);
}
