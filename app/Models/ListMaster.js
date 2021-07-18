import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class ListMaster {
  constructor(name, color, id = generateId()) {
    this.name = name
    this.color = color
    this.id = id

  }
  get Template() {
    return `
        <div class="col-4 mt-3">
          <div class="bg-light rounded shadow-light">
            <div class="d-flex justify-content-around align-items-center rounded-top bg-colorful text-light text-center p-3">
                <h3>${this.name}</h3>
                <i class="fa fa-trash action text-danger" title="delete task" onclick="app.TaskMasterController.destroy('${this.id}')"></i>
            </div>

            <div class="p-2">
                <ul class="bg-gray lighten-40 p-2 pl-4">
                <label class="form-check-label form-check d-flex flex-column">
                    <input type="checkbox" class="form-check-input" name="" id="checkbox"
                        value="checkedValue" checked>

                </label>
                </ul>
            </div>
            <form onsubmit="app.TaskMasterController.addTask('${this.id}')"> 
              <input type="text" name="tasking" placeholder="tasking..." required>
              <button type="submit" class="btn btn-outline-success">+</button>
            </form>
          </div>
        </div>`
  }
}