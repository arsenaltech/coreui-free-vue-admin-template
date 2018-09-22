<template>
    <b-card>
        <b-row>
            <b-col>
            <div id="items-hierarchy">
            <ol class="dd-list">
                <li class="dd-item" data-id="1">
                    <div class="dd-handle"><h5>Finishing</h5></div>
                </li>
                <li class="dd-item" data-id="4">
                    <div class="dd-handle">Finished</div>
                    <ol class="dd-list">
                        <li class="dd-item" data-id="1">
                            <div class="dd-handle"><h5>Side Option</h5></div>
                        </li>
                        <li class="dd-item" data-id="4">
                            <div class="dd-handle">Single Sided</div>
                            <ol class="dd-list">
                                <li class="dd-item" data-id="1">
                                    <div class="dd-handle"><h5>Lit Option</h5></div>
                                </li>
                                <li class="dd-item" data-id="4">
                                    <div class="dd-handle">Frontlit</div>
                                </li>
                                <li class="dd-item" data-id="5" data-foo="bar">
                                    <div class="dd-handle">Backlit</div>
                                </li>
                            </ol>
                        </li>
                        <li class="dd-item" data-id="5" data-foo="bar">
                            <div class="dd-handle">Double Sided</div>
                            <ol class="dd-list">
                                <li class="dd-item" data-id="1">
                                    <div class="dd-handle"><h5>Lit Option</h5></div>
                                </li>
                                <li class="dd-item" data-id="4">
                                    <div class="dd-handle">Frontlit</div>
                                </li>
                            </ol>
                        </li>


                    </ol>
                </li>
                <li class="dd-item" data-id="5" data-foo="bar">
                    <div class="dd-handle">Framed</div>
                </li>
                <li class="dd-item" data-id="5" data-foo="bar">
                    <div class="dd-handle">Structure</div>
                </li>

            </ol>
        </div>
            </b-col>
            <b-col>
                <b-card>
                    <div slot="header">
                        <strong>Finishing</strong> <small> Update</small>
                    </div>
                    <b-row>
                        <b-col sm="12">
                            <b-form-group>
                                <label for="name">Title</label>
                                <b-form-input type="text" id="name" placeholder="Finishing"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6">
                            <b-form-group>
                                <label for="ccnumber">Select Item Mapping</label>
                                <b-form-input type="text" id="mapping" placeholder="Item Auto Complete"></b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-col sm="6">
                            <b-form-group>
                                <label for="ccnumber">Enter Inventory Utilization Formula</label>
                                <b-form-input type="text" id="formula" placeholder="$qty*$width*$height"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6">
                            <b-form-group>
                                <label for="ccnumber">Select Item Mapping</label>
                                <b-form-input type="text" id="mapping" placeholder="Item Auto Complete"></b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-col sm="6">
                            <b-form-group>
                                <label for="ccnumber">Enter Inventory Utilization Formula</label>
                                <b-form-input type="text" id="formula" placeholder="$qty*$width*$height"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-button variant="outline-primary">+</b-button>

                </b-card>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
  import 'nestable2/dist/jquery.nestable.min.css'
  window.jQuery = require('jquery')
  require('nestable2')


  export default {
    name: 'products',
    components: {
    },
    data () {
      return {

      }
    },
    methods: {

    },

    mounted: function () {
      jQuery('#items-hierarchy').nestable({
            maxDepth: 10000
      });

    }
  }
</script>
