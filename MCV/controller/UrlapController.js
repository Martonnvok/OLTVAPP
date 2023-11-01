import UrlapModel from "../model/Rmodel/UrlapModel.js";
import UrlapView from "../view/Rview/UrlapView.js";

class UrlapController {
  constructor() {
    const URLAPMODEL = new UrlapModel();
    const URLAPVIEW = new UrlapView($(".urlap"), URLAPMODEL.leiro);
    console.log(URLAPVIEW.urlapAdat)

  }
}
export default UrlapController;
