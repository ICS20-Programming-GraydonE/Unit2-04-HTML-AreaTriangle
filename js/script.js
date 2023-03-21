// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  let height = parseInt(document.getElementById('height-of-triangle').value);
  let base = parseInt(document.getElementById('base-of-triangle').value);

  // process
  let area = base / 2 * height;

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
