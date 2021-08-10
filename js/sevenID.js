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
function avaliacoes(opc) {

    event.preventDefault()

    let buton = opc;

    if (buton == "true") {
        $('.avaliacoesBody .avaliacoesBodyBox .avaliacoesBodyBox1 .avaliacoesBodyBox1Txt .maisMenos p:nth-child(1)').css("display", "none");
        $('.avaliacoesBody .avaliacoesBodyBox .avaliacoesBodyBox1 .avaliacoesBodyBox1Txt .maisMenos p:nth-child(2)').css("display", "flex");
        $(".avaliacoesBody .avaliacoesBodyBox .avaliacoesBodyBox1 .avaliacoesBodyBox1Txt").val("false");
    }
    if (buton == "false") {
        $('.avaliacoesBody .avaliacoesBodyBox .avaliacoesBodyBox1 .avaliacoesBodyBox1Txt .maisMenos p:nth-child(1)').css("display", "flex");
        $('.avaliacoesBody .avaliacoesBodyBox .avaliacoesBodyBox1 .avaliacoesBodyBox1Txt .maisMenos p:nth-child(2)').css("display", "none");
        $(".avaliacoesBody .avaliacoesBodyBox .avaliacoesBodyBox1 .avaliacoesBodyBox1Txt").val("true");
    }
}