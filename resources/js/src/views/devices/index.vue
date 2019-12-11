<template>
  <div>
    <div>
      <h2 class="style-title">Devices</h2>
      <vs-button class="mr-3 mb-2" href="#">Add New Device</vs-button>
    </div>

    <vs-table data="users">

      <template slot="thead">
        <vs-th>ID</vs-th>
        <vs-th>Group</vs-th>
        <vs-th>Description</vs-th>
      </template>

      <template>
        <vs-tr key="indextr">
          <vs-td>Abdeckung Zahnstange</vs-td>
  				<vs-td>0008010</vs-td>
  				<vs-td>500</vs-td>
        </vs-tr>
				<vs-tr key="indextr1">
          <vs-td>Abdeckung Zahnstange</vs-td>
  				<vs-td>0008010</vs-td>
  				<vs-td>500</vs-td>
        </vs-tr>
      </template>

    </vs-table>
  </div>
</template>

export default {
  
}