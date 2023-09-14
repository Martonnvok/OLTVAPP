import {oltasok, adatok} from "../adatok.js";
import Megjelenit from "../Megjelenit.js";

$(function () {
    const TAROLO = $(".tarolo");
    new Megjelenit(oltasok, adatok, TAROLO);
  });