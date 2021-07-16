// export default class Value {
//     constructor(data) {
//         this.title = data.title
//     }

//     get Template() {

//         return /*html*/`
//         <div class="card p-2 value">
//             ${this.title}
//         </div>
//         `
//     }
// }















export default class TaskMaster {
    constructor(listName, color,) {
        this.listName = listName
        this.color = color

        console.log("Hello form constructor of model")
    }
    get Template() {
        return `
    div class="col-6">
                <div class="card w-60" style="width:50%;">
                    <div class="card-header">
                        Catagories
                    </div>
                    <div class="card-body">
                        <ul>
                            <div class="form-check d-flex flex-column">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" name="" id="almond"
                                        value="checkedValue" checked>
                                    Almond milk
                                </label>
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" name="" id="coconut"
                                        value="checkedValue" checked>
                                    Coconut water
                                </label>
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" name="" id="cucumber"
                                        value="checkedValue" checked>
                                    Cucumber
                                </label>
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" name="" id="apple"
                                        value="checkedValue" checked>
                                    Green apples
                                </label>
                            </div>
                        </ul>
                    </div>
                    <div class="card-footer text-muted">
                        <div> <input type="text" placeholder="Add Task"><span id="plus" class="pl-0"> + </span> </div>
                    </div>
                </div>  `

    }
}