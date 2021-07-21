function escolas(opc){

    let abaActive = opc;
    
    if (abaActive=="High-Schools"){
        $('#btnHigh-Schools').css("background-color", "rgba(194,255,71)");
        $('#P-High-Schools').css("opacity", "1");

        $('#btnUniversidades').css("background-color", "#ffffff");
        $('#P-Universidades').css("opacity", "0.6");

        $('.escolasBodyBox3').css("display", "flex");
        $('.escolasBodyBox2').css("display", "none");
        
    }
    if (abaActive=="Universidades"){
        $('#btnUniversidades').css("background-color", "rgba(194,255,71)");
        $('#P-Universidades').css("opacity", "1");

        $('#btnHigh-Schools').css("background-color", "#ffffff");
        $('#P-High-Schools').css("opacity", "0.6");

        $('.escolasBodyBox2').css("display", "flex");
        $('.escolasBodyBox3').css("display", "none");
    }
}