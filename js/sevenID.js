function escolas(opc) {

    let abaActive = opc;

    if (abaActive == "High-Schools") {
        $('#btnHigh-Schools').css("background-color", "rgba(194,255,71)");
        $('#P-High-Schools').css("opacity", "1");

        $('#btnUniversidades').css("background-color", "#ffffff");
        $('#P-Universidades').css("opacity", "0.6");

        $('.escolasBodyBox3').css("display", "flex");
        $('.escolasBodyBox2').css("display", "none");

    }
    if (abaActive == "Universidades") {
        $('#btnUniversidades').css("background-color", "rgba(194,255,71)");
        $('#P-Universidades').css("opacity", "1");

        $('#btnHigh-Schools').css("background-color", "#ffffff");
        $('#P-High-Schools').css("opacity", "0.6");

        $('.escolasBodyBox2').css("display", "flex");
        $('.escolasBodyBox3').css("display", "none");
    }
}
function Compliance(opc) {

    event.preventDefault()

    let buton = opc;

    if (buton == "EDITAR") {
        $('.btnComplianceEDITAR').css("display", "none");
        $('.btnComplianceSALVAR').css("display", "flex");
        $('.complianceTdShadow').css("display", "none");
        $('.complianceTdShadowInp').css("display", "flex");

    }
    if (buton == "SALVAR") {
        $('.btnComplianceSALVAR').css("display", "none");
        $('.btnComplianceEDITAR').css("display", "flex");
        $('.complianceTdShadow').css("display", "flex");
        $('.complianceTdShadowInp').css("display", "none");
    }
}
function Biografia(opc) {

    event.preventDefault()

    let buton = opc;

    if (buton == "EDITAR") {
        $('.BIOGRAFIATXT').css("display", "none");
        $('.btnCurriculoEditar').css("display", "none");
        $('.formBiografia').css("display", "flex");

    }
    if (buton == "SALVAR") {
        $('.BIOGRAFIATXT').css("display", "flex");
        $('.btnCurriculoEditar').css("display", "flex");
        $('.formBiografia').css("display", "none");
    }
}
function CurriculoInformacoes(opc) {

    event.preventDefault()

    let buton = opc;

    if (buton == "EDITAR") {
        $('.btninformacoesEditar').css("display", "none");
        $('.btninformacoesSalvar').css("display", "flex");
        $('.informacoesBody').css("display", "none");
        $('.informacoesBoxAtr input').css("display", "flex");
    }
    if (buton == "SALVAR") {
        $('.btninformacoesEditar').css("display", "flex");
        $('.btninformacoesSalvar').css("display", "none");
        $('.informacoesBody').css("display", "flex");
        $('.informacoesBoxAtr input').css("display", "none");
    }
}
function videosFiltro(opc) {

    event.preventDefault()

    let buton = opc;

    if (buton == "TUDO") {
        $('.boxVideosTUDO').css("display", "flex");
        $('.boxVideosHIGHLIGHTS').css("display", "none");
        $('.boxVideosGOLS').css("display", "none");
        $('.boxVideosLANCES_DEFENSIVOS').css("display", "none");
        $('.boxVideosHABILIDADE').css("display", "none");
        $('.boxVideosFISICO').css("display", "none");

        $('.btnTUDO').css("background-color", "rgba(194,255,71)");
        $('.btnHIGHLIGHTS').css("background-color", "#e0e0e0");
        $('.btnGOLS').css("background-color", "#e0e0e0");
        $('.btnDEFENSIVOS').css("background-color", "#e0e0e0");
        $('.btnHABILIDADE').css("background-color", "#e0e0e0");
        $('.btnFISICO').css("background-color", "#e0e0e0");
    }
    if (buton == "HIGHLIGHTS") {
        $('.boxVideosTUDO').css("display", "none");
        $('.boxVideosHIGHLIGHTS').css("display", "flex");
        $('.boxVideosGOLS').css("display", "none");
        $('.boxVideosLANCES_DEFENSIVOS').css("display", "none");
        $('.boxVideosHABILIDADE').css("display", "none");
        $('.boxVideosFISICO').css("display", "none");

        $('.btnTUDO').css("background-color", "#e0e0e0");
        $('.btnHIGHLIGHTS').css("background-color", "rgba(194,255,71)");
        $('.btnGOLS').css("background-color", "#e0e0e0");
        $('.btnDEFENSIVOS').css("background-color", "#e0e0e0");
        $('.btnHABILIDADE').css("background-color", "#e0e0e0");
        $('.btnFISICO').css("background-color", "#e0e0e0");
    } if (buton == "GOLS") {
        $('.boxVideosTUDO').css("display", "none");
        $('.boxVideosHIGHLIGHTS').css("display", "none");
        $('.boxVideosGOLS').css("display", "flex");
        $('.boxVideosLANCES_DEFENSIVOS').css("display", "none");
        $('.boxVideosHABILIDADE').css("display", "none");
        $('.boxVideosFISICO').css("display", "none");

        $('.btnTUDO').css("background-color", "#e0e0e0");
        $('.btnHIGHLIGHTS').css("background-color", "#e0e0e0");
        $('.btnGOLS').css("background-color", "rgba(194,255,71)");
        $('.btnDEFENSIVOS').css("background-color", "#e0e0e0");
        $('.btnHABILIDADE').css("background-color", "#e0e0e0");
        $('.btnFISICO').css("background-color", "#e0e0e0");
    } if (buton == "DEFENSIVOS") {
        $('.boxVideosTUDO').css("display", "none");
        $('.boxVideosHIGHLIGHTS').css("display", "none");
        $('.boxVideosGOLS').css("display", "none");
        $('.boxVideosLANCES_DEFENSIVOS').css("display", "flex");
        $('.boxVideosHABILIDADE').css("display", "none");
        $('.boxVideosFISICO').css("display", "none");

        $('.btnTUDO').css("background-color", "#e0e0e0");
        $('.btnHIGHLIGHTS').css("background-color", "#e0e0e0");
        $('.btnGOLS').css("background-color", "#e0e0e0");
        $('.btnDEFENSIVOS').css("background-color", "rgba(194,255,71)");
        $('.btnHABILIDADE').css("background-color", "#e0e0e0");
        $('.btnFISICO').css("background-color", "#e0e0e0");
    } if (buton == "HABILIDADE") {
        $('.boxVideosTUDO').css("display", "none");
        $('.boxVideosHIGHLIGHTS').css("display", "none");
        $('.boxVideosGOLS').css("display", "none");
        $('.boxVideosLANCES_DEFENSIVOS').css("display", "none");
        $('.boxVideosHABILIDADE').css("display", "flex");
        $('.boxVideosFISICO').css("display", "none");

        $('.btnTUDO').css("background-color", "#e0e0e0");
        $('.btnHIGHLIGHTS').css("background-color", "#e0e0e0");
        $('.btnGOLS').css("background-color", "#e0e0e0");
        $('.btnDEFENSIVOS').css("background-color", "#e0e0e0");
        $('.btnHABILIDADE').css("background-color", "rgba(194,255,71)");
        $('.btnFISICO').css("background-color", "#e0e0e0");
    }
    if (buton == "FISICO") {
        $('.boxVideosTUDO').css("display", "none");
        $('.boxVideosHIGHLIGHTS').css("display", "none");
        $('.boxVideosGOLS').css("display", "none");
        $('.boxVideosLANCES_DEFENSIVOS').css("display", "none");
        $('.boxVideosHABILIDADE').css("display", "none");
        $('.boxVideosFISICO').css("display", "flex");

        $('.btnTUDO').css("background-color", "#e0e0e0");
        $('.btnHIGHLIGHTS').css("background-color", "#e0e0e0");
        $('.btnGOLS').css("background-color", "#e0e0e0");
        $('.btnDEFENSIVOS').css("background-color", "#e0e0e0");
        $('.btnHABILIDADE').css("background-color", "#e0e0e0");
        $('.btnFISICO').css("background-color", "rgba(194,255,71)");
    }
}
function cooperTest(opc) {

    event.preventDefault()

    let buton = opc;

    if (buton == "true") {
        $('.cooperTestBody .cooperTestBox button .btnBox2 img:nth-child(1)').css("display", "none");
        $('.cooperTestBody .cooperTestBox button .btnBox2 img:nth-child(2)').css("display", "flex");
        $("#cooperTestBTN").val("false");
    }
    if (buton == "false") {
        $('.cooperTestBody .cooperTestBox button .btnBox2 img:nth-child(1)').css("display", "flex");
        $('.cooperTestBody .cooperTestBox button .btnBox2 img:nth-child(2)').css("display", "none");
        $("#cooperTestBTN").val("true");
    }
}
function avaliacoesTecnica(opc) {

    event.preventDefault()

    let buton = opc;

    if (buton == "true") {
        $('.avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox .avaliacoesTecnicaBodyBox1 .avaliacoesTecnicaBodyBox1Txt .maisMenos p:nth-child(1)').css("display", "none");
        $('.avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox .avaliacoesTecnicaBodyBox1 .avaliacoesTecnicaBodyBox1Txt .maisMenos p:nth-child(2)').css("display", "flex");
        $(".avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox .avaliacoesTecnicaBodyBox1 .avaliacoesTecnicaBodyBox1Txt").val("false");
    }
    if (buton == "false") {
        $('.avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox .avaliacoesTecnicaBodyBox1 .avaliacoesTecnicaBodyBox1Txt .maisMenos p:nth-child(1)').css("display", "flex");
        $('.avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox .avaliacoesTecnicaBodyBox1 .avaliacoesTecnicaBodyBox1Txt .maisMenos p:nth-child(2)').css("display", "none");
        $(".avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox .avaliacoesTecnicaBodyBox1 .avaliacoesTecnicaBodyBox1Txt").val("true");
    }
}
function ultimoVideo(opc) {

    event.preventDefault()

    let buton = opc;

    if (buton == "true") {
        $('.avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox #ultimoVideoBtn img:nth-child(4)').css("display", "none");
        $('.avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox #ultimoVideoBtn img:nth-child(5)').css("display", "flex");
        $(".avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox #ultimoVideoBtn").val("false");
    }
    if (buton == "false") {
        $('.avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox #ultimoVideoBtn img:nth-child(4)').css("display", "flex");
        $('.avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox #ultimoVideoBtn img:nth-child(5)').css("display", "none");
        $(".avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox #ultimoVideoBtn").val("true");
    }
}
function avaliacaoTecnica(opc) {

    event.preventDefault()

    let buton = opc;

    if (buton == "true") {
        $('.avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox #avaliacaoTecnicaBtn img:nth-child(4)').css("display", "none");
        $('.avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox #avaliacaoTecnicaBtn img:nth-child(5)').css("display", "flex");
        $(".avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox #avaliacaoTecnicaBtn").val("false");
    }
    if (buton == "false") {
        $('.avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox #avaliacaoTecnicaBtn img:nth-child(4)').css("display", "flex");
        $('.avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox #avaliacaoTecnicaBtn img:nth-child(5)').css("display", "none");
        $(".avaliacoesTecnicaBody .avaliacoesTecnicaBodyBox #avaliacaoTecnicaBtn").val("true");
    }
}

function cadastro() {

    event.preventDefault()

    var cadastrarSenha = document.getElementById("cadastrarSenha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    var nome = document.getElementById("nome").value;
    var nascimento = document.getElementById("nascimento").value;
    var esporte = document.getElementById("esporte");
    var option = esporte.options[esporte.selectedIndex];
    var email = document.getElementById("email").value;
    var termos = document.getElementById("termos");

    if (!nome) {
        alert("Preencha nome");
    } else if (!nascimento) {
        alert("Preencha data de nascimento");
    } else if (option.value == "selecione") {
        alert("Preencha esporte");
    } else if (!email) {
        alert("Preencha email");
    } else if (!cadastrarSenha) {
        alert("Preencha senha");
    } else if (!confirmarSenha) {
        alert("Preencha confirmar Senha");
    } else if (cadastrarSenha != confirmarSenha) {
        alert("Confirmação de senha deve ser igual a senha");
    } else if (!termos.checked) {
        alert("Concorde com os termos");
    } else { document.getElementById("formCadastro").submit(); }
}
function boxOque(opc) {

    event.preventDefault()

    let buton = opc;

    if (buton == "true") {
        $('.boxOque .boxOqueTxt .maisMenos p:nth-child(1)').css("display", "none");
        $('.boxOque .boxOqueTxt .maisMenos p:nth-child(2)').css("display", "flex");
        $(".boxOque .boxOqueTxt").val("false");
    }
    if (buton == "false") {
        $('.boxOque .boxOqueTxt .maisMenos p:nth-child(1)').css("display", "flex");
        $('.boxOque .boxOqueTxt .maisMenos p:nth-child(2)').css("display", "none");
        $(".boxOque .boxOqueTxt").val("true");
    }
}