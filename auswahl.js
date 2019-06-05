function saveHTMLContent() {
    document.getElementsByName('spieler1')[0].value = document.getElementById('spieler1').innerHTML;
    document.getElementsByName('spieler2')[0].value = document.getElementById('spieler2').innerHTML;
    document.getElementsByName('spieler3')[0].value = document.getElementById('spieler3').innerHTML;
    document.getElementsByName('spieler4')[0].value = document.getElementById('spieler4').innerHTML;
}

function checkSubmitButton() {
    var cb1 = document.getElementById('cb1'); 
    var cb2 = document.getElementById('cb2'); 
    var cb3 = document.getElementById('cb3'); 
    var cb4 = document.getElementById('cb4'); 
    var checkbox = [cb1,cb2,cb3,cb4];
    var counter = 0;

    for (var i = 0; i <= 4; i++) {
        if (checkbox[i].checked == true) {
            counter=counter+1;
        }
        if (counter < 2) {
            document.getElementById('submit').setAttribute('disabled','disabled');
        } else {
            document.getElementById('submit').removeAttribute('disabled');
        }
    }
}

function changeHTMLContent() {

    var cb1 = document.getElementById('cb1'); 
    var cb2 = document.getElementById('cb2'); 
    var cb3 = document.getElementById('cb3'); 
    var cb4 = document.getElementById('cb4'); 

    function deleteHTML(spieler) {
        document.getElementById(spieler).innerHTML = '';
    }
    function deleteValue(spieler) {
        document.getElementById(spieler).value = '';
    }

    if (cb1.checked == false && cb2.checked == false && cb3.checked == false && cb4.checked == false) {
        deleteHTML('spieler1');
        deleteHTML('spieler2');
        deleteHTML('spieler3');
        deleteHTML('spieler4');
    }
    //Auswahl des ersten Spielers
    if (cb1.checked == true && cb2.checked == false && cb3.checked == false && cb4.checked == false) {
        document.getElementById('spieler1').innerHTML = 'Spieler 1';
        deleteHTML('spieler2');
        deleteHTML('spieler3');
        deleteHTML('spieler4');
    }
    if (cb1.checked == false && cb2.checked == true && cb3.checked == false && cb4.checked == false) {
        document.getElementById('spieler2').innerHTML = 'Spieler 1';
        deleteHTML('spieler1');
        deleteHTML('spieler3');
        deleteHTML('spieler4');
    }
    if (cb1.checked == false && cb2.checked == false && cb3.checked == true && cb4.checked == false) {
        document.getElementById('spieler3').innerHTML = 'Spieler 1';
        deleteHTML('spieler1');
        deleteHTML('spieler2');
        deleteHTML('spieler4');
    }
    if (cb1.checked == false && cb2.checked == false && cb3.checked == false && cb4.checked == true) {
        document.getElementById('spieler4').innerHTML = 'Spieler 1';
        deleteHTML('spieler1');
        deleteHTML('spieler2');
        deleteHTML('spieler3');
    }

    //Auswahl des Zweiten Spielers
    if (cb1.checked == true && cb2.checked == true && cb3.checked == false && cb4.checked == false) {
            if (document.getElementById('spieler1').innerHTML == 'Spieler 1') {
                document.getElementById('spieler2').innerHTML = 'Spieler 2';
            } else {
                document.getElementById('spieler1').innerHTML = 'Spieler 2';
            }
        document.getElementById('spieler3').innerHTML = '';
        document.getElementById('spieler4').innerHTML = '';
    }
    if (cb1.checked == true && cb2.checked == false && cb3.checked == true && cb4.checked == false) {
            if (document.getElementById('spieler1').innerHTML == 'Spieler 1') {
                document.getElementById('spieler3').innerHTML = 'Spieler 2';
            } else {
                document.getElementById('spieler1').innerHTML = 'Spieler 2';
            }
        document.getElementById('spieler2').innerHTML = '';
        document.getElementById('spieler4').innerHTML = '';
    }
    if (cb1.checked == true && cb2.checked == false && cb3.checked == false && cb4.checked == true) {
            if (document.getElementById('spieler1').innerHTML == 'Spieler 1') {
                document.getElementById('spieler4').innerHTML = 'Spieler 2';
            } else {
                document.getElementById('spieler1').innerHTML = 'Spieler 2';
            }
        document.getElementById('spieler2').innerHTML = '';
        document.getElementById('spieler3').innerHTML = '';
    }

    if (cb1.checked == false && cb2.checked == true && cb3.checked == true && cb4.checked == false) {
            if (document.getElementById('spieler2').innerHTML == 'Spieler 1') {
                document.getElementById('spieler3').innerHTML = 'Spieler 2';
            } else {
                document.getElementById('spieler2').innerHTML = 'Spieler 2';
            }
        document.getElementById('spieler1').innerHTML = '';
        document.getElementById('spieler4').innerHTML = '';
    }
    if (cb1.checked == false && cb2.checked == true && cb3.checked == false && cb4.checked == true) {
            if (document.getElementById('spieler2').innerHTML == 'Spieler 1') {
                document.getElementById('spieler4').innerHTML = 'Spieler 2';
            } else {
                document.getElementById('spieler2').innerHTML = 'Spieler 2';
            }
        document.getElementById('spieler1').innerHTML = '';
        document.getElementById('spieler3').innerHTML = '';
    }
    if (cb1.checked == false && cb2.checked == false && cb3.checked == true && cb4.checked == true) {
            if (document.getElementById('spieler3').innerHTML == 'Spieler 1') {
                document.getElementById('spieler4').innerHTML = 'Spieler 2';
            } else {
                document.getElementById('spieler3').innerHTML = 'Spieler 2';
            }
        document.getElementById('spieler1').innerHTML = '';
        document.getElementById('spieler2').innerHTML = '';
    }

    //Auswahl des dritten Spielers
    if (cb1.checked == true && cb2.checked == true && cb3.checked == true && cb4.checked == false) {
        if (document.getElementById('spieler1').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler2').innerHTML == 'Spieler 2') {
                document.getElementById('spieler3').innerHTML = 'Spieler 3';
            } else {
                document.getElementById('spieler2').innerHTML = 'Spieler 3'; 
            }
        } else if (document.getElementById('spieler2').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler1').innerHTML == 'Spieler 2') {
                document.getElementById('spieler3').innerHTML = 'Spieler 3';
            } else {
                document.getElementById('spieler1').innerHTML = 'Spieler 3'; 
            }
        } else if (document.getElementById('spieler3').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler1').innerHTML == 'Spieler 2') {
                document.getElementById('spieler2').innerHTML = 'Spieler 3';
            } else {
                document.getElementById('spieler1').innerHTML = 'Spieler 3'; 
            }
        }
        document.getElementById('spieler4').innerHTML = '';
    }
    if (cb1.checked == true && cb2.checked == true && cb3.checked == false && cb4.checked == true) {
        if (document.getElementById('spieler1').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler2').innerHTML == 'Spieler 2') {
                document.getElementById('spieler4').innerHTML = 'Spieler 3';
            } else {
                document.getElementById('spieler2').innerHTML = 'Spieler 3'; 
            }
        } else if (document.getElementById('spieler2').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler1').innerHTML == 'Spieler 2') {
                document.getElementById('spieler4').innerHTML = 'Spieler 3';
            } else {
                document.getElementById('spieler1').innerHTML = 'Spieler 3'; 
            }
        } else if (document.getElementById('spieler4').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler1').innerHTML == 'Spieler 2') {
                document.getElementById('spieler2').innerHTML = 'Spieler 3';
            } else {
                document.getElementById('spieler1').innerHTML = 'Spieler 3'; 
            }
        }
        document.getElementById('spieler3').innerHTML = '';
    }

    if (cb1.checked == true && cb2.checked == false && cb3.checked == true && cb4.checked == true) {
        if (document.getElementById('spieler1').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler3').innerHTML == 'Spieler 2') {
                document.getElementById('spieler4').innerHTML = 'Spieler 3';
            } else {
                document.getElementById('spieler3').innerHTML = 'Spieler 3'; 
            }
        } else if (document.getElementById('spieler3').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler1').innerHTML == 'Spieler 2') {
                document.getElementById('spieler4').innerHTML = 'Spieler 3';
            } else {
                document.getElementById('spieler1').innerHTML = 'Spieler 3'; 
            }
        } else if (document.getElementById('spieler4').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler1').innerHTML == 'Spieler 2') {
                document.getElementById('spieler3').innerHTML = 'Spieler 3';
            } else {
                document.getElementById('spieler1').innerHTML = 'Spieler 3'; 
            }
        }
        document.getElementById('spieler2').innerHTML = '';
    }

    if (cb1.checked == false && cb2.checked == true && cb3.checked == true && cb4.checked == true) {
        if (document.getElementById('spieler2').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler3').innerHTML == 'Spieler 2') {
                document.getElementById('spieler4').innerHTML = 'Spieler 3';
            } else {
                document.getElementById('spieler3').innerHTML = 'Spieler 3'; 
            }
        } else if (document.getElementById('spieler3').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler2').innerHTML == 'Spieler 2') {
                document.getElementById('spieler4').innerHTML = 'Spieler 3';
            } else {
                document.getElementById('spieler2').innerHTML = 'Spieler 3'; 
            }
        } else if (document.getElementById('spieler4').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler2').innerHTML == 'Spieler 2') {
                document.getElementById('spieler3').innerHTML = 'Spieler 3';
            } else {
                document.getElementById('spieler2').innerHTML = 'Spieler 3'; 
            }
        }
        document.getElementById('spieler1').innerHTML = '';
    }

    //Auswahl des vierten Spielers
    if (cb1.checked == true && cb2.checked == true && cb3.checked == true && cb4.checked == true) {
        if (document.getElementById('spieler1').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler2').innerHTML == 'Spieler 2') {
                if (document.getElementById('spieler3').innerHTML == 'Spieler 3') {
                    document.getElementById('spieler4').innerHTML = 'Spieler 4';
                } else {
                    document.getElementById('spieler3').innerHTML = 'Spieler 4'; 
                }
            } else if (document.getElementById('spieler3').innerHTML == 'Spieler 2') {
                if (document.getElementById('spieler2').innerHTML == 'Spieler 3') {
                    document.getElementById('spieler4').innerHTML = 'Spieler 4';
                } else {
                    document.getElementById('spieler2').innerHTML = 'Spieler 4'; 
                } 
            } else if (document.getElementById('spieler4').innerHTML == 'Spieler 2') {
                if (document.getElementById('spieler2').innerHTML == 'Spieler 3') {
                    document.getElementById('spieler3').innerHTML = 'Spieler 4';
                } else {
                    document.getElementById('spieler2').innerHTML = 'Spieler 4'; 
                } 
            }
        } else if (document.getElementById('spieler2').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler1').innerHTML == 'Spieler 2') {
                if (document.getElementById('spieler3').innerHTML == 'Spieler 3') {
                    document.getElementById('spieler4').innerHTML = 'Spieler 4';
                } else {
                    document.getElementById('spieler3').innerHTML = 'Spieler 4'; 
                }
            } else if (document.getElementById('spieler3').innerHTML == 'Spieler 2') {
                if (document.getElementById('spieler1').innerHTML == 'Spieler 3') {
                    document.getElementById('spieler4').innerHTML = 'Spieler 4';
                } else {
                    document.getElementById('spieler1').innerHTML = 'Spieler 4'; 
                } 
            } else if (document.getElementById('spieler4').innerHTML == 'Spieler 2') {
                if (document.getElementById('spieler2').innerHTML == 'Spieler 3') {
                    document.getElementById('spieler3').innerHTML = 'Spieler 4';
                } else {
                    document.getElementById('spieler2').innerHTML = 'Spieler 4'; 
                } 
            }
        } else if (document.getElementById('spieler3').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler1').innerHTML == 'Spieler 2') {
                if (document.getElementById('spieler2').innerHTML == 'Spieler 3') {
                    document.getElementById('spieler4').innerHTML = 'Spieler 4';
                } else {
                    document.getElementById('spieler2').innerHTML = 'Spieler 4'; 
                }
            } else if (document.getElementById('spieler2').innerHTML == 'Spieler 2') {
                if (document.getElementById('spieler1').innerHTML == 'Spieler 3') {
                    document.getElementById('spieler4').innerHTML = 'Spieler 4';
                } else {
                    document.getElementById('spieler1').innerHTML = 'Spieler 4'; 
                } 
            } else if (document.getElementById('spieler4').innerHTML == 'Spieler 2') {
                if (document.getElementById('spieler2').innerHTML == 'Spieler 3') {
                    document.getElementById('spieler1').innerHTML = 'Spieler 4';
                } else {
                    document.getElementById('spieler2').innerHTML = 'Spieler 4'; 
                } 
            }
        } else if (document.getElementById('spieler4').innerHTML == 'Spieler 1') {
            if (document.getElementById('spieler1').innerHTML == 'Spieler 2') {
                if (document.getElementById('spieler3').innerHTML == 'Spieler 3') {
                    document.getElementById('spieler4').innerHTML = 'Spieler 4';
                } else {
                    document.getElementById('spieler3').innerHTML = 'Spieler 4'; 
                }
            } else if (document.getElementById('spieler2').innerHTML == 'Spieler 2') {
                if (document.getElementById('spieler1').innerHTML == 'Spieler 3') {
                    document.getElementById('spieler3').innerHTML = 'Spieler 4';
                } else {
                    document.getElementById('spieler1').innerHTML = 'Spieler 4'; 
                } 
            } else if (document.getElementById('spieler3').innerHTML == 'Spieler 2') {
                if (document.getElementById('spieler2').innerHTML == 'Spieler 3') {
                    document.getElementById('spieler1').innerHTML = 'Spieler 4';
                } else {
                    document.getElementById('spieler2').innerHTML = 'Spieler 4'; 
                } 
            }
        }
    }
    saveHTMLContent();
    checkSubmitButton();
}