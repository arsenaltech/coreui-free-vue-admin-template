<template>
    <div class="row justify-content-center">
        <b-card header="Kanban Management" class="col-10 p-0">
            <div slot="header">
                Kanban Management
                <router-link to="/calendar"><h5 class="pull-right"><i class="fa fa-calendar"></i></h5>
                </router-link>
            </div>

            <b-row>
                <b-col>
                    <strong>QUICK FILTERS:</strong>
                <b-dropdown id="ddown1" variant="primary" text="Department" class="m-2">
                    <b-dropdown-item>Printing</b-dropdown-item>
                    <b-dropdown-item>Framing</b-dropdown-item>
                    <b-dropdown-item>Finishing</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="ddown1" variant="primary" text="Assignee" class="m-2">
                    <b-dropdown-item>Steve Rogers</b-dropdown-item>
                    <b-dropdown-item>Peter Parker</b-dropdown-item>
                    <b-dropdown-item>Bruce Banner</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="ddown1" variant="primary" text="Client" class="m-2">
                    <b-dropdown-item>Disney</b-dropdown-item>
                    <b-dropdown-item>Pixar</b-dropdown-item>
                    <b-dropdown-item>Warner Bros</b-dropdown-item>
                </b-dropdown>
                </b-col>
                <b-col>
                    <b-row>

                    <b-col cols="4" sm="4" md="2" lg class="mb-3 mb-xl-0">
                        <b-button pressed block variant="outline-dark" aria-pressed="true">Due Today</b-button>
                    </b-col>
                    <b-col cols="4" sm="4" md="2" lg class="mb-3 mb-xl-0">
                        <b-button block variant="outline-dark">Exclude Done</b-button>
                    </b-col>
                    <b-col cols="4" sm="4" md="2" lg class="mb-3 mb-xl-0">
                        <b-button block variant="outline-dark">Assigned to me</b-button>
                    </b-col>

                    </b-row>
                </b-col>
            </b-row>


            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion1>
                        <i class="fa fa-bars pull-left"></i>
                        <strong>Nut Job 2 Banner and Bus Shelters</strong> [Due in 3 Days]
                        <span class="badge badge-primary pull-right">Printing</span>
                    </b-btn>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="board">
                            <div class="boardColumn boardColumn--TODO">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">To do</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Printing</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div>
                                                <span class="taskCard__id">REACT-5</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Building</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-6</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>

                                </div>
                            </div>
                            <div class="boardColumn boardColumn--INPROGRESS">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">In Progress</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Pre Process</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-4</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                            <div class="boardColumn boardColumn--DONE">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">Done</h1></header>

                                <div class="boardColumn__taskList">

                                    <div class="taskCard taskCard--HIGH">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Done Job</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">HIGH</span>
                                            <div><span class="taskCard__id">REACT-3</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion2>
                        <i class="fa fa-bars pull-left"></i>
                        <strong>Nut Job 1 Banner </strong> [Due Tomorrow]
                        <span class="badge badge-success pull-right">Finishing</span>
                    </b-btn>
                </b-card-header>
                <b-collapse id="accordion2" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="board">
                            <div class="boardColumn boardColumn--TODO">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">To do</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Printing</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div>
                                                <span class="taskCard__id">REACT-5</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Building</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-6</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>

                                </div>
                            </div>
                            <div class="boardColumn boardColumn--INPROGRESS">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">In Progress</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Pre Process</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-4</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                            <div class="boardColumn boardColumn--DONE">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">Done</h1></header>

                                <div class="boardColumn__taskList">

                                    <div class="taskCard taskCard--HIGH">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Done Job</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">HIGH</span>
                                            <div><span class="taskCard__id">REACT-3</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion3>
                        <i class="fa fa-bars pull-left"></i>
                        <strong>Nut Job 3 Banner </strong> [Due Tomorrow]
                        <span class="badge badge-success pull-right">Finishing</span>
                    </b-btn>
                </b-card-header>
                <b-collapse id="accordion3" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="board">
                            <div class="boardColumn boardColumn--TODO">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">To do</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Printing</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div>
                                                <span class="taskCard__id">REACT-5</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Building</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-6</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>

                                </div>
                            </div>
                            <div class="boardColumn boardColumn--INPROGRESS">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">In Progress</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Pre Process</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-4</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                            <div class="boardColumn boardColumn--DONE">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">Done</h1></header>

                                <div class="boardColumn__taskList">

                                    <div class="taskCard taskCard--HIGH">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Done Job</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">HIGH</span>
                                            <div><span class="taskCard__id">REACT-3</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion4>
                        <i class="fa fa-bars pull-left"></i>
                        <strong>Nut Job 4 Banner </strong> [Due Tomorrow]
                        <span class="badge badge-success pull-right">Finishing</span>
                    </b-btn>
                </b-card-header>
                <b-collapse id="accordion4" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="board">
                            <div class="boardColumn boardColumn--TODO">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">To do</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Printing</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div>
                                                <span class="taskCard__id">REACT-5</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Building</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-6</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>

                                </div>
                            </div>
                            <div class="boardColumn boardColumn--INPROGRESS">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">In Progress</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Pre Process</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-4</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                            <div class="boardColumn boardColumn--DONE">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">Done</h1></header>

                                <div class="boardColumn__taskList">

                                    <div class="taskCard taskCard--HIGH">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Done Job</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">HIGH</span>
                                            <div><span class="taskCard__id">REACT-3</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion5>
                        <i class="fa fa-bars pull-left"></i>
                        <strong>Nut Job 5 Banner </strong> [Due Tomorrow]
                        <span class="badge badge-success pull-right">Finishing</span>
                    </b-btn>
                </b-card-header>
                <b-collapse id="accordion5" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="board">
                            <div class="boardColumn boardColumn--TODO">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">To do</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Printing</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div>
                                                <span class="taskCard__id">REACT-5</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Building</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-6</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>

                                </div>
                            </div>
                            <div class="boardColumn boardColumn--INPROGRESS">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">In Progress</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Pre Process</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-4</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                            <div class="boardColumn boardColumn--DONE">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">Done</h1></header>

                                <div class="boardColumn__taskList">

                                    <div class="taskCard taskCard--HIGH">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Done Job</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">HIGH</span>
                                            <div><span class="taskCard__id">REACT-3</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion6>
                        <i class="fa fa-bars pull-left"></i>
                        <strong>Nut Job 6 Banner </strong> [Due Tomorrow]
                        <span class="badge badge-success pull-right">Finishing</span>
                    </b-btn>
                </b-card-header>
                <b-collapse id="accordion6" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="board">
                            <div class="boardColumn boardColumn--TODO">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">To do</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Printing</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div>
                                                <span class="taskCard__id">REACT-5</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Building</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-6</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>

                                </div>
                            </div>
                            <div class="boardColumn boardColumn--INPROGRESS">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">In Progress</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Pre Process</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-4</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                            <div class="boardColumn boardColumn--DONE">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">Done</h1></header>

                                <div class="boardColumn__taskList">

                                    <div class="taskCard taskCard--HIGH">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Done Job</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">HIGH</span>
                                            <div><span class="taskCard__id">REACT-3</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion7>
                        <i class="fa fa-bars pull-left"></i>
                        <strong>Nut Job 7 Banner </strong> [Due Tomorrow]
                        <span class="badge badge-success pull-right">Finishing</span>
                    </b-btn>
                </b-card-header>
                <b-collapse id="accordion7" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="board">
                            <div class="boardColumn boardColumn--TODO">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">To do</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Printing</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div>
                                                <span class="taskCard__id">REACT-5</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Building</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-6</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>

                                </div>
                            </div>
                            <div class="boardColumn boardColumn--INPROGRESS">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">In Progress</h1></header>

                                <div class="boardColumn__taskList">
                                    <div class="taskCard taskCard--MEDIUM">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Pre Process</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">MEDIUM</span>
                                            <div><span class="taskCard__id">REACT-4</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                            <div class="boardColumn boardColumn--DONE">
                                <header class="boardColumn__header"><h1 class="boardColumn__title">Done</h1></header>

                                <div class="boardColumn__taskList">

                                    <div class="taskCard taskCard--HIGH">
                                        <header class="taskCard__header"><h4 class="taskCard__title">Done Job</h4>
                                            <div class="taskCard__epicLink-wrapper"><span
                                                    class="taskCard__epicLink-title">React buidings</span></div>
                                        </header>
                                        <footer class="taskCard__footer"><span class="taskCard__type">HIGH</span>
                                            <div><span class="taskCard__id">REACT-3</span>
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </b-card>
    </div>
</template>

<script>
  export default {
    name: 'tooltips',
    data() {
      return {
        show: true,
        disabled: false
      }
    },
    methods: {
      onOpen() {
        this.$refs.tooltip.$emit('open')
      },
      onClose() {
        this.$refs.tooltip.$emit('close')
      },
      disableByRef() {
        if (this.disabled) {
          this.$refs.tooltip2.$emit('enable')
        } else {
          this.$refs.tooltip2.$emit('disable')
        }
      }
    }
  }
</script>