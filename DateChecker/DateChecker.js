    var giorno;
    var mese;
    var anno;

/* dati caselle ---> variabili*/
function TestBisestile() {
    giorno = document.getElementById("InGiorno").value;
    mese = document.getElementById("InMese").value;
    anno = document.getElementById("InAnno").value;



    /* controllo anno bisestile */
    if (anno % 4 == 0){
        if (anno % 100 == 0){
            if (anno % 400 == 0)
                AnnoBisestile()
            else
                AnnoNonBisestile()
        }
        else
            AnnoBisestile()
    }
    else
        AnnoNonBisestile()
}


/* funzioni controllo mese + giorno*/
function AnnoBisestile() {
    if ((mese == 01) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else if ((mese == 02) && ((giorno >= 1) && giorno <= 29))
        TrueDate()
    else if ((mese == 03) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else if ((mese == 04) && ((giorno >= 1) && giorno <= 30))
        TrueDate()
    else if ((mese == 05) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else if ((mese == 06) && ((giorno >= 1) && giorno <= 30))
        TrueDate()
    else if ((mese == 07) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else if ((mese == 08) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else if ((mese == 09) && ((giorno >= 1) && giorno <= 30))
        TrueDate()
    else if ((mese == 10) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else if ((mese == 11) && ((giorno >= 1) && giorno <= 30))
        TrueDate()
    else if ((mese == 12) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else 
        FalseDate()
}

function AnnoNonBisestile() {
    if ((mese == 01) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else if ((mese == 02) && ((giorno >= 1) && giorno <= 28))
        TrueDate()
    else if ((mese == 03) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else if ((mese == 04) && ((giorno >= 1) && giorno <= 30))
        TrueDate()
    else if ((mese == 05) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else if ((mese == 06) && ((giorno >= 1) && giorno <= 30))
        TrueDate()
    else if ((mese == 07) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else if ((mese == 08) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else if ((mese == 09) && ((giorno >= 1) && giorno <= 30))
        TrueDate()
    else if ((mese == 10) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else if ((mese == 11) && ((giorno >= 1) && giorno <= 30))
        TrueDate()
    else if ((mese == 12) && ((giorno >= 1) && giorno <= 31))
        TrueDate()
    else 
        FalseDate()
}


/* funzioni dichiarazione data*/
function TrueDate(){
    document.getElementById("StateButton").value = "Data valida";
    document.getElementById("StateButton").style.backgroundColor = "rgb(55, 167, 182)";
}

function FalseDate(){
    document.getElementById("StateButton").value = "Data non valida";
    document.getElementById("StateButton").style.backgroundColor = "rgb(70, 43, 224)";
}
