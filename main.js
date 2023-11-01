
import Controller from "./MCV/controller/Controller.js";
import Bcontroller from "./MCV/controller/Bcontroller.js";
import UrlapController from "./MCV/controller/UrlapController.js";

$(function () {
  new Controller($(".tarolo"), $(".ujadat"));
  new Bcontroller($(".bejelentkezes"));
  new UrlapController();
});