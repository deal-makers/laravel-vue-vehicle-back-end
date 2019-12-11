<template>
  <div>
    <h2 class="style-title">Pregled reklamacija</h2>
    <vs-table data="users">

      <template slot="thead">
        <vs-th>Tehnologija</vs-th>
        <vs-th>Naziv</vs-th>
        <vs-th>Korisnički račun</vs-th>
        <vs-th>Datum</vs-th>
        <vs-th>Radnik</vs-th>
      </template>

      <template>
        <vs-tr key="indextr">
          <vs-td>4500317791</vs-td>
  				<vs-td>Verriegelungsblech RFID</vs-td>
  				<vs-td>5000524301</vs-td>
  				<vs-td>3.5.2016</vs-td>
          <vs-td>Antun Vrban</vs-td>
        </vs-tr>
        <vs-tr key="indextr2">
          <vs-td>4500317791</vs-td>
  				<vs-td>Verriegelungsblech RFID</vs-td>
  				<vs-td>5000524301</vs-td>
  				<vs-td>3.5.2016</vs-td>
          <vs-td>Antun Vrban</vs-td>
        </vs-tr>
      </template>

    </vs-table>
  </div>
</template>
