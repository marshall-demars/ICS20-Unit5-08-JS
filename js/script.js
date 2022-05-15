// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: May 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-08-JS/sw.js", {
    scope: "/ICS20-Unit5-08-JS/",
  })
}

'use strict'

/**
 * This function calculates long division
 */
function myButtonClicked() {
  // input
  var firstInteger = document.getElementById("integer-one").value
  var secondInteger = document.getElementById("integer-two").value

  // process
  var total = 0
  var firstIntegerAsInt = parseInt(firstInteger)
  var secondIntegerAsInt = parseInt(secondInteger)
  var remainder = firstIntegerAsInt


  if ((firstIntegerAsInt > 0) && (secondIntegerAsInt > 0)) {
    while (remainder >= secondIntegerAsInt) {
      remainder = remainder - secondIntegerAsInt
      total++
    }
  } else if ((firstIntegerAsInt < 0) && (secondIntegerAsInt < 0)) {
    remainder = Math.abs(remainder)
    secondIntegerAsInt = Math.abs(secondIntegerAsInt)
    while (remainder >= secondIntegerAsInt) {
      remainder = remainder - secondIntegerAsInt
      total++
    }
  } else {
    remainder = Math.abs(remainder)
    secondIntegerAsInt = Math.abs(secondIntegerAsInt)
    while (remainder >= secondIntegerAsInt) {
      remainder = remainder - secondIntegerAsInt
      total++
    }
    total = -Math.abs(total)
  }

  // output
  document.getElementById("loop").innerHTML = firstInteger + " ÷ " + secondInteger + " = " + total + " R " + remainder
}