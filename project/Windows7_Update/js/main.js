$( function () {
    $( document )
        .keyup( function ( e ) {
            switch ( e.keyCode ) {
                case 13:
                    document.getElementById( "black" )
                        .style.display = "block";
                    setTimeout( 'document.getElementById("bsod").style.display="block";', 1100 );
                    break;
                case 8:
                    document.getElementById( "black" )
                        .style.display = "block";
                    setTimeout( 'document.getElementById("bsod").style.display="block";', 1100 );
                    break;
            }
        } );
} );
$( 'body' )
    .on( "contextmenu", function ( e ) {
        return false;
    } );
var message = "Sorry, right-click has been disabled";

function clickIE() {
    if ( document.all ) {
        ( message );
        return false;
    }
}

function clickNS( e ) {
    if ( document.layers || ( document.getElementById && !document.all ) ) {
        if ( e.which == 2 || e.which == 3 ) {
            ( message );
            return false;
        }
    }
}
if ( document.layers ) {
    document.captureEvents( Event.MOUSEDOWN );
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}
document.oncontextmenu = new Function( "return false" );


var count = 0;
var stage = 1;
var stage2 = 3;
var counter = setInterval( timer, 14830 ); //1000 will  run it every 1 second
var ref = "Configuring updates";

function timer() {
    count = count + 1;
    if ( count <= 0 ) {
        clearInterval( counter );
        return;
    }

    document.getElementById( "timer" )
        .innerHTML = count + '%';



    if ( count > 99 ) {
        stage = stage + 1;
        document.getElementById( "stage" )
            .innerHTML = stage + '';
        count = 0;
        return;
    }

    if ( stage > 3 ) {
        stage2 = 68;
        ref = "Installing Updates";
        document.getElementById( "ref" )
            .innerHTML = ref + '';
        document.getElementById( "stage2" )
            .innerHTML = stage2 + '';
        return;
    }

}
