import {oltasok, adatok, linkek} from "../model/adatok.js";
import Megjelenit from "../view/Megjelenit.js";

$(function () {
    const TAROLO = $(".tarolo");
    new Megjelenit(oltasok, adatok, TAROLO, linkek );
  });