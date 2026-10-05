function calcularServico() {
    let cliente = document.getElementById("cliente").value;
    let servico = document.getElementById("servico").value;
    let quantidade = document.getElementById("quantidade").value;

    let nomeServico = "";
    let valorUnitario = 0;

    switch (servico) {
        case "formatacao":
            nomeServico = "Formatação de Computador";
            valorUnitario = 100;
            break;

        case "limpeza":
            nomeServico = "Limpeza Interna / Manutenção";
            valorUnitario = 80;
            break;

        case "instalacao":
            nomeServico = "Instalação de software";
            valorUnitario = 40;
            break;

        case "troca_peca":
            nomeServico = "Troca de Peça / Hardware";
            valorUnitario = 150;
            break;
    }

 
    let valorTotal = valorUnitario * quantidade;

    
    document.getElementById("resultado").innerHTML = `
=================================<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ATENDIMENTO</b><br>
=================================<br><br>
<b>Cliente:</b> ${cliente}<br><br>
<b>Serviço:</b> ${nomeServico}<br>
<b>Quantidade:</b> ${quantidade}<br><br>
<b>Valor unitário:</b> R$ ${valorUnitario},00<br>
<b>Valor total:</b> R$ ${valorTotal},00<br><br>
=================================
    `;

  
    document.getElementById("resultado").style.display = "block";
}