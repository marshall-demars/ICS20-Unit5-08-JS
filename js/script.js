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
  let counter = 0
  let secondIntegerInt = parseInt(secondInteger)
  let firstIntegerInt = parseInt(firstInteger)

  if (firstIntegerInt < 0 || secondIntegerInt < 0) {
    document.getElementById("loop").innerHTML = "Please input a positive whole number!"
  } else {
      while (counter < secondIntegerInt) {
      console.log = ("loop: " + counter)
      total += firstIntegerInt - secondIntegerInt
      firstIntegerInt = total
      counter++
    }
    document.getElementById("loop").innerHTML = "The number is " + (total)
  }
}
    