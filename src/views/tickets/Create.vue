<template>
    <b-card>
    <form-wizard @on-complete="onComplete"
                 shape="square"
                 color="#3498db"
                title=""
                subtitle="">
        <tab-content title="Account"
                     icon="fa fa-user">
            <b-row>
                <b-col sm="12">
                    <b-card>
                        <b-form-group>
                            <label for="company">Company</label>
                            <b-form-input type="text" id="company" placeholder="Enter your company name"></b-form-input>
                        </b-form-group>
                        <b-row>
                            <b-col sm="8">
                                <b-form-group>
                                    <label for="vat">Job Title </label>
                                    <b-form-input type="text" id="vat" placeholder="PL1234567890"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group>
                                    <label for="postal-code">Category</label>
                                    <b-form-input type="text" id="po" placeholder="Category"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col sm="8">
                                <b-form-group>
                                    <label for="city">Due Date</label>
                                    <b-form-input type="text" id="duedate" placeholder="Due Date"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="4">
                                <b-form-group>
                                    <label for="postal-code">PO#</label>
                                    <b-form-input type="text" id="po" placeholder="PO"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </tab-content>
        <tab-content title="Item"
                     icon="fa fa-cart-plus">
            <b-card>

            <b-row>
                <b-col sm="6">
                    <b-form-group>
                        <h6>Size</h6>
                        <b-row>
                        <b-col sm="4">
                            <b-form-input type="text" placeholder="width"></b-form-input>
                        </b-col>
                        <b-col sm="4">
                            <b-form-input type="text" placeholder="height"></b-form-input>
                        </b-col>
                        </b-row>
                    </b-form-group>
                </b-col>
                <b-col sm="6">
                    <b-form-group>
                        <b-row>
                            <b-col sm="4">
                                <h6>Quantity</h6>
                                <b-form-input type="text" id="po" placeholder="qty"></b-form-input>                            </b-col>
                            <b-col sm="4">
                                <h6>Cost</h6>
                                <b-form-input type="text" placeholder="cost"></b-form-input>
                            </b-col>
                        </b-row>

                    </b-form-group>
                </b-col>
            </b-row>
            <h6 class="border-bottom pb-2 mt-3">Select Product</h6>
            <b-row>
                <b-col cols="6" sm="4" md="3" lg="2">
                    <div class="text-center" @click="setProduct('Banner')">
                    <i class="fa fa-circle fa-2x "
                       :class="{'text-primary': (product === 'Banner'), 'text-secondary': (product !== 'Banner')}"
                       ></i><br>Banner
                    </div>
                </b-col>
                <b-col cols="6" sm="4" md="3" lg="2">
                    <div class="text-center" @click="setProduct('Rigid')">
                      <i class="fa fa-circle fa-2x "
                         :class="{'text-primary': (product === 'Rigid'), 'text-secondary': (product !== 'Rigid')}"
                         ></i><br>Rigid
                    </div>
                </b-col>
                <b-col cols="6" sm="4" md="3" lg="2">
                    <div class="text-center" @click="setProduct('Textile')">
                      <i class="fa fa-circle fa-2x "
                         :class="{'text-primary': (product === 'Textile'), 'text-secondary': (product !== 'Textile')}"
                         ></i><br>Textile
                    </div>
                </b-col>
                <b-col cols="6" sm="4" md="3" lg="2">
                    <div class="text-center" @click="setProduct('Unmounted')">
                      <i class="fa fa-circle fa-2x "
                         :class="{'text-primary': (product === 'Unmounted'), 'text-secondary': (product !== 'Unmounted')}"
                         ></i><br>Unmounted
                    </div>
                </b-col>

            </b-row>
<div v-if="product !== ''">
                <h6 class="border-bottom pb-2 mt-3">Finishing</h6>
                <b-row>
                    <b-col cols="6" sm="4" md="3" lg="2">
                        <div class="text-center" @click="setFinishing('Finished')">
                            <i
                              class="fa fa-circle fa-2x"
                              :class="{'text-primary': (finishing === 'Finished'), 'text-secondary': (finishing !== 'Finished')}"
                            ></i><br>Finished
                        </div>
                    </b-col>
                    <b-col cols="6" sm="4" md="3" lg="2">
                        <div class="text-center"  @click="setFinishing('Framed')">
                            <i class="fa fa-circle fa-2x"
                               :class="{'text-primary': (finishing === 'Framed'), 'text-secondary': (finishing !== 'Framed')}"
                            ></i><br>Framed
                        </div>
                    </b-col>
                    <b-col cols="6" sm="4" md="3" lg="2">
                        <div class="text-center"  @click="setFinishing('Structure')">
                            <i class="fa fa-circle fa-2x"
                               :class="{'text-primary': (finishing === 'Structure'), 'text-secondary': (finishing !== 'Structure')}"
                            ></i><br>Structure
                        </div>
                    </b-col>

                </b-row>
</div>
              <div  v-if="finishing !== ''">
                <h6 class="border-bottom pb-2 mt-3">Sides</h6>
                <b-row>
                    <b-col cols="6" sm="4" md="3" lg="2">
                        <div class="text-center"  @click="setSides('Single Sided')">
                            <i class="fa fa-circle fa-2x "
                               :class="{'text-primary': (sides === 'Single Sided'), 'text-secondary': (sides !== 'Single Sided')}"></i><br>Single Sided
                        </div>
                    </b-col>
                    <b-col cols="6" sm="4" md="3" lg="2">
                        <div class="text-center" @click="setSides('Double Sided')">
                            <i class="fa fa-circle fa-2x "
                               :class="{'text-primary': (sides === 'Double Sided'), 'text-secondary': (sides !== 'Double Sided')}"
                            ></i><br>Double Sided
                        </div>
                    </b-col>

                </b-row>
              </div>
              <div  v-if="sides !== ''">

                <h6 class="border-bottom pb-2 mt-3">Lite</h6>
                <b-row>
                    <b-col cols="6" sm="4" md="3" lg="2">
                        <div class="text-center"  @click="setLight('Frontlit')">
                            <i class="fa fa-circle fa-2x "
                               :class="{'text-primary': (light === 'Frontlit'), 'text-secondary': (light !== 'Frontlit')}"
                            ></i><br>Frontlit
                        </div>
                    </b-col>
                    <b-col cols="6" sm="4" md="3" lg="2">
                        <div class="text-center"  @click="setLight('Backlit')">
                            <i class="fa fa-circle fa-2x"
                               :class="{'text-primary': (light === 'Backlit'), 'text-secondary': (light !== 'Backlit')}"
                            ></i><br>Backlit
                        </div>
                    </b-col>

                </b-row>
              </div>

            </b-card>

          <b-card header="Notes & Attachment">

            <b-row>
              <b-col sm="6">
                  <textarea class="form-control" rows="3"></textarea>
              </b-col>

              <b-col sm="6">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="customFile">
                  <label class="custom-file-label" for="customFile">Choose file</label>
                </div>
              </b-col>
            </b-row>


          </b-card>

        </tab-content>
        <tab-content title="Review Items"
                     icon="fa fa-cart-arrow-down">
          <table id="cart" class="table table-hover table-condensed">
            <thead>
            <tr>
              <th style="width:50%">Product</th>
              <th style="width:10%">Price</th>
              <th style="width:8%">Quantity</th>
              <th style="width:22%" class="text-right">Subtotal</th>
              <th style="width:10%"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td data-th="Product">
                <div class="row">
                  <div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div>
                  <div class="col-sm-10">
                    <h4 class="nomargin">Banner 1</h4>
                    <p>
                      <strong>Size:</strong> 100x120<br/>
                      <strong>Finishing:</strong> Framed<br/>
                      <strong>Sides:</strong> Single Sided<br/>
                      <strong>Lit:</strong> Frontlit<br/>
                    </p>
                  </div>
                </div>
              </td>
              <td data-th="Price">$1.99</td>
              <td data-th="Quantity">
                <input type="number" class="form-control text-center" value="1">
              </td>
              <td data-th="Subtotal" class="text-right">$1.99</td>
              <td class="actions" data-th="">
                <button class="btn btn-info btn-sm"><i class="fa fa-copy" title="Clone item"></i></button>
                <button class="btn btn-info btn-sm"><i class="fa fa-edit"></i></button>
                <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
              </td>
            </tr>
            <tr>
              <td colspan="3" class="hidden-xs"></td>
              <td class="hidden-xs text-right"><strong>Total $1.99</strong></td>
              <td></td>
            </tr>
            </tbody>


          </table>
        </tab-content>
        <tab-content title="Other Information"
                     icon="fa fa-info">
            <b-row>
                <b-col sm="6">
                    <b-card header="Shipping Information">
                        <textarea class="form-control" rows="3"></textarea>
                    </b-card>
                </b-col>

                <b-col sm="6">
                    <b-card header="Installation">
                        <textarea class="form-control" rows="3"></textarea>
                    </b-card>
                </b-col>
            </b-row>
          <b-card header="Notes & Attachment">

            <b-row>
              <b-col sm="6">
                <textarea class="form-control" rows="3"></textarea>
              </b-col>

              <b-col sm="6">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="customFile">
                  <label class="custom-file-label" for="customFile">Choose file</label>
                </div>
              </b-col>
            </b-row>


          </b-card>
        </tab-content>
        <tab-content title="Confirmation"
                     icon="fa fa-check">

          <h4>Job ticket #1234 is successfully created! It's due on Feb 15th 2019. </h4>


        </tab-content>



    </form-wizard>
    </b-card>




</template>

<script>
  import {FormWizard, TabContent} from 'vue-form-wizard'
  import 'vue-form-wizard/dist/vue-form-wizard.min.css'
  import 'nestable2/dist/jquery.nestable.min.css'
  //component code


  export default {
    name: 'forms',
    components: {
      FormWizard,
      TabContent
    },
    data () {
      return {
        selected: [], // Must be an array reference!
        show: true,
        product: '',
        finishing: '',
        sides: '',
        light: ''
      }
    },
    methods: {
      setProduct (value) {
        this.product = value
        this.finishing = ''
        this.sides = ''
        this.light = ''
        // do nothing
      },
      setFinishing (value) {
        this.finishing = value;
        this.sides = ''
        this.light = ''
        // do nothing
      },
      setSides (value) {
        this.sides = value
        this.light = ''
        // do nothing
      },
      setLight (value) {
        this.light = value
        // do nothing
      }
    },

    mounted: function () {


    }
  }
</script>
