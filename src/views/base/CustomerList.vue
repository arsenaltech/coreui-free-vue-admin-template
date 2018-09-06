<template>
  <div class="animated fadeIn">
    <b-form-group>
      <b-input-group>
        <!-- Attach Left button -->
        <b-input-group-prepend>
          <b-button variant="primary">
            <i class="fa fa-search"></i> Search
          </b-button>
        </b-input-group-prepend>
        <b-form-input type="text" placeholder="Customer name"></b-form-input>
      </b-input-group>
    </b-form-group>

    <b-row>

      <b-col lg="12">
        <c-table striped caption="<i class='fa fa-align-justify'></i> Customers"></c-table>
      </b-col><!--/.col-->
    </b-row><!--/.row-->


  </div>

</template>

<script>
  import cTable from './CustomerTable.vue'

  export default {
    name: 'tables',
    components: {cTable}
  }
</script>
