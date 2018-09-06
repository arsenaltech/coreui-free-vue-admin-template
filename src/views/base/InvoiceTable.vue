<template>
    <b-card :header="caption">
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm"
                 :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
            <template slot="status" slot-scope="data">
                <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
            </template>
        </b-table>
        <nav>
            <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev"
                          next-text="Next" hide-goto-end-buttons/>
        </nav>
    </b-card>
</template>

<script>
  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  export default {
    name: 'c-table',
    props: {
      caption: {
        type: String,
        default: 'Table'
      },
      hover: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      return {
        items: shuffleArray([
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},

          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},

          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},

          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},

          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},
          {username: 'Pantelion', registered: '2018/01/01', duedate: '2018/02/01',  jobid: '805553',description:'Overboar @ South Gate', status: 'Costing',},


        ]),
        fields: [
          {key: 'jobid', label: 'Job#'},
          {key: 'registered', label: 'Date'},
          {key: 'username', label: 'Client'},
          {key: 'duedate', label: 'Due Date'},
          {key: 'description', label: 'Description'},
          {key: 'status', label: 'Status'},

        ],
        currentPage: 1,
        perPage: 10,
        totalRows: 0
      }
    },
    methods: {
      getBadge(status) {
        return status === 'Active' ? 'success'
          : status === 'Inactive' ? 'secondary'
            : status === 'Pending' ? 'warning'
              : status === 'Banned' ? 'danger' : 'primary'
      },
      getRowCount(items) {
        return items.length
      }
    }
  }
</script>
