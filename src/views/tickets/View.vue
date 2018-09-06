<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
          <b-tabs v-model="tabIndex[0]">
            <b-tab active>
              <template slot="title">
                <i class="icon-docs"></i> {{tabs[0]}}
              </template>
              <b-row>
                <b-col sm="6" md="6">
                <b-card header="WB Exhibitor Service - ML">
                  <strong>Contact : Warner Bros</strong><br />
                  Michael Lynch <br />
                  3903 W Oliver Ave, Rm 2434 <br />
                  Burbank CA 91522

                </b-card>
              </b-col>
                <b-col sm="6" md="6">
                  <b-card header="Status">
                    <b-row>
                      <b-col sm="6" md="6">
                        <h1 class="text-primary">Finishing</h1>
                        <h3>Due in 3 days</h3>
                      </b-col>
                      <b-col class="border-left" sm="6" md="6">
                          <b-row class="pb-1">
                            <h4>Order Date:</h4>
                            <span class="p-1">Aug 15th 2018</span>

                          </b-row>
                          <b-row class="border-top pt-3">
                            <h4>Ship Date:</h4>
                            <span class="p-1">Sep 08th 2018</span>
                          </b-row>
                      </b-col>
                    </b-row>


                  </b-card>
                </b-col>

              </b-row>
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="icon-layers"></i> {{tabs[1]}}
              </template>
              <br>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </b-tab>
          </b-tabs>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    data () {
      return {
        tabIndex: [0, 0],
        tabs: [
          'Dolby Orlando Event [802272]',
          'Related Records']
      }
    }
  }
</script>
