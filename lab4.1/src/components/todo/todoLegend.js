

function TodoLegend() {
    return (
        <div class="col-sm-12">
            <div class="card">
                <div class="card-body container justify-content-start">
                    <h4 class="row">Приоритеты элементов ToDo:</h4>
                    <div class="row justify-content-start">
                        <h4><span class="badge badge-light border font-weight-normal">обычный</span></h4>
                        <h4><span class="badge badge-warning border border font-weight-normal">важный</span>
                        </h4>
                        <h4><span class="badge badge-danger border border font-weight-normal">критический</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}