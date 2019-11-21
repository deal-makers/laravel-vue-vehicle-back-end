<template>
	<div class="max-width-500">
		<h2 class="style-title">Unos Radnog Naloga</h2>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input class="w-full" type="text" label="Nalog" />
	    </div>
	  </div>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input class="w-full" type="text" label="Radnik" />
	    </div>
	  </div>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input class="w-full" type="number" label="Komada" />
	    </div>
	  </div>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
				<vs-select
		      class="w-full"
		      label="Radnja"
		      >
		      <vs-select-item key="item" value="item" text="Odaberi radnju"/>
		    </vs-select>
	    </div>
	  </div>
	  <div class="vx-row">
	    <div class="vx-col w-full">
	      <vs-button class="mr-3 mb-2">Spremi</vs-button>
	    </div>
	  </div>
	</div>
</template>
