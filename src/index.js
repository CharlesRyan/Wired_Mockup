// httpster -p 8080 -d /public

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import data from "../Articles.json";
// import { Router, Route, hashHistory } from "react-router";
import { HashRouter, Route, Link } from 'react-router-dom';

var activeCat;
var business = document.getElementById('bus');
var culture = document.getElementById('cul');
var design = document.getElementById('des');
var gear = document.getElementById('gea');
var science = document.getElementById('sci');
var security = document.getElementById('sec');
var transportation = document.getElementById('tra');
business.addEventListener("click", function(){activateCategory("business")});
culture.addEventListener("click", function(){activateCategory("culture")});
design.addEventListener("click", function(){activateCategory("design")});
gear.addEventListener("click", function(){activateCategory("gear")});
science.addEventListener("click", function(){activateCategory("science")});
security.addEventListener("click", function(){activateCategory("security")});
transportation.addEventListener("click", function(){activateCategory("transportation")});

function activateCategory(cat) {
  activeCat = cat;
  ReactDOM.render(
       <App activeCat={activeCat} />,
  document.getElementById('contentWrapper')
  );
}

ReactDOM.render((
     <App activeCat={activeCat} />
  ), document.getElementById('contentWrapper')
)


// Page Behavior
var lastScrollTop = 0;
var mired = document.getElementById('mired');
document.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 100) {
        var navCollapse = document.getElementById("navCollapse");
        if (st > lastScrollTop) {
            $(navCollapse).slideUp(150)
                setTimeout(function() {
                    $(mired).addClass("miredShrink");
                }, 100);
                setTimeout(function() {
                    $(mired).removeClass("miredSize");
                }, 100);

        } else {
            $(navCollapse).slideDown(150)
                setTimeout(function() {
                    $(mired).addClass("miredSize");
                }, 100);
                setTimeout(function() {
                    $(mired).removeClass("miredShrink");
                }, 100);
        }
        lastScrollTop = st;
    };
}, false);
