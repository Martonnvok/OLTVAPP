
import Controller from "./MCV/controller/Controller.js";
import Bcontroller from "./MCV/controller/Bcontroller.js";

$(function () {
    new Controller($(".tarolo"), $(".ujadat"));
    new Bcontroller($(".bejelentkezes"));
  });