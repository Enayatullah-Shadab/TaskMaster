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
    <div class="col-md-6 mt-4 ">
    <div class="card "
        class="d-flex justify-content-around align-items-center rounded-top bg-pizza text-light text-center p-3"
        style="width:50%;">
        <div class="card-header">
        ${this.name.name}
        </div>
        <div class="card-body">
            <ul>
                <div class="form-check d-flex flex-column">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" name="task" id="almond"
                            value="checkedValue" checked>
                            ${this.task}
                    </label>
                </div>
            </ul>
        </div>
        <div class="card-footer text-muted">
            <div> <input type="text" placeholder="Add Task"> <span><button type="submit"
                        class="btn btn-outline-success"> + </button></span>
            </div>
        </div>
    </div>
</div>
    
    `
  }
}