$(document)
  .ready(function() {

    var
      changeSides = function() {
        $('.ui.shape')
          .eq(0)
            .shape('flip over')
            .end()
          .eq(1)
            .shape('flip over')
            .end()
          .eq(2)
            .shape('flip back')
            .end()
          .eq(3)
            .shape('flip back')
            .end()
        ;
      },
      validationRules = {
        firstName: {
          identifier  : 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter an e-mail'
            },
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        }
      }
    ;

    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
    ;

    $('.ui.form')
      .form(validationRules, {
        on: 'blur'
      })
    ;

    $('.masthead .information')
      .transition('scale in', 1000)
    ;

    setInterval(changeSides, 3000);

  })
;
//Resize header //

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
