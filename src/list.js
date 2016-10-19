import React from 'react'
import ReactDOM from 'react-dom'

var divStyle = {
  backgroundImage: 'url("image/pokemonball.png")'
};


const Pokemon = React.createClass({
	render: function(){
    return (
	  <div style={divStyle}>
	  <img 
	  src="image/001.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Bulbasaur}/>
	  <img 
	  src="image/004.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Charmander}/>
	  <img 
	  src="image/007.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Squirtle}/>
	  <img 
	  src="image/010.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Caterpie}/>
	  <img 
	  src="image/011.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Metapod}/>
	  <img 
	  src="image/012.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Butterfree}/>

	  <img 
	  src="image/013.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Weedle}/>
	  <img 
	  src="image/014.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Kakuna}/>
	  <img 
	  src="image/015.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Beedrill}/>
	  <img 
	  src="image/016.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Pidgey}/>
	  <img 
	  src="image/017.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Pidgeotto}/>
	  <img 
	  src="image/018.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Pidgeot}/>

	  <img 
	  src="image/019.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Rattata}/>
	  <img 
	  src="image/020.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Raticate}/>
	  <img 
	  src="image/021.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Spearow}/>
	  <img 
	  src="image/022.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Fearow}/>
	  <img 
	  src="image/023.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Ekans}/>
	  <img 
	  src="image/025.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Pikachu}/>

	  <img 
	  src="image/032.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Nidoran}/>
	  <img 
	  src="image/035.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Clefairy}/>
	  <img 
	  src="image/039.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Jigglypuff}/>
	  <img 
	  src="image/041.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Zubat}/>
	  <img 
	  src="image/042.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Golbat}/>
	  <img 
	  src="image/043.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Oddish}/>

	  <img 
	  src="image/046.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Paras}/>
	  <img 
	  src="image/048.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Velonat}/>
	  <img 
	  src="image/049.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Venomoth}/>
	  <img 
	  src="image/052.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Meowth}/>
	  <img 
	  src="image/054.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Psyduck}/>
	  <img 
	  src="image/055.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Golduck}/>

	  <img 
	  src="image/069.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Bellsprout}/>
	  <img 
	  src="image/072.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Tentacool}/>
	  <img 
	  src="image/073.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Tentacruel}/>
	  <img 
	  src="image/074.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Geodude}/>
	  <img 
	  src="image/079.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Slowpoke}/>
	  <img 
	  src="image/080.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Slowbro}/>

	  <img 
	  src="image/096.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Drowzee}/>
	  <img 
	  src="image/098.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Krabby}/>
	  <img 
	  src="image/102.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Exeggcute}/>
	  <img 
	  src="image/104.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Cubone}/>
	  <img 
	  src="image/109.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Koffing}/>
	  <img 
	  src="image/114.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Tangela}/>

	  <img 
	  src="image/116.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Horsesea}/>
	  <img 
	  src="image/118.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Goldeen}/>
	  <img 
	  src="image/119.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Seaking}/>
	  <img 
	  src="image/120.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Staryu}/>
	  <img 
	  src="image/121.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Starmie}/>
	  <img 
	  src="image/126.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Magmar}/>

	  <img 
	  src="image/129.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Magikarp}/>
	  <img 
	  src="image/130.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Gyarados}/>
	  <img 
	  src="image/133.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Eevee}/>
	  <img 
	  src="image/135.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Jolteon}/>
	  <img 
	  src="image/147.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Dratini}/>
	  <img 
	  src="image/148.png"
	  height = "200px"
	  width = "200px"
	  onClick = {this.Dragonair}/>
  </div>
	);
	},
	Bulbasaur: function(){
	return alert(' Bulbasaur\n Weight: 12.05 kg\n Height: 0.85 m\n Type: Grass|Poison\n Candy Need to Evolve: 25 Bulbasaur Candy')
	},
	Charmander: function(){
	return alert(' Charmander\n Weight: 14.31 kg\n Height: 0.76 m\n Type: Fire\n Candy Need to Evolve: 25 Charmander Candy')	
	},
	Squirtle: function(){
	return alert(' Squirtle\n Weight: 10.6 kg\n Height: 0.56 m\n Type: Water\n Candy Need to Evolve: 25 Squirtle Candy')
	},
	Caterpie: function(){
	return alert(' Caterpie\n Weight: 2.21 kg\n Height: 0.27 m\n Type: Bug\n Candy Need to Evolve: 12 Caterpie Candy')
	},
	Metapod: function(){
	return alert(' Metapod\n Weight: 9.9 kg\n Height: 0.7 m\n Type: Bug\n Candy Need to Evolve: 50 Caterpie Candy')
	},
	Butterfree: function(){
	return alert(' Butterfree\n Weight: 9.5 kg\n Height: 1.03 m\n Type: Bug|Flying')
	},
	Weedle: function(){
	return alert(' Weedle\n Weight: 3.2 kg\n Height: 0.3 m\n Type: Bug|Poison\n Candy Need to Evolve: 12 Weedle Candy')
	},
	Kakuna: function(){
	return alert(' Kakuna\n Weight: 10.0 kg\n Height: 0.6 m\n Type: Bug|Poison\n Candy Need to Evolve: 50 Weedle Candy')	
	},
	Beedrill: function(){
	return alert(' Beedrill\n Weight: 52.15 kg\n Height: 1.33 m\n Type: Bug|Poison')
	},
	Pidgey: function(){
	return alert(' Pidgey\n Weight: 1.07 kg\n Height: 0.24 m\n Type: Normal|Flying\n Candy Need to Evolve: 12 Pidgey Candy')
	},
	Pidgeotto: function(){
	return alert(' Pidgeotto\n Weight: 30.0 kg\n Height: 1.1 m\n Type: Normal|Flying\n Candy Need to Evolve: 50 Pidgeotto Candy')
	},
	Pidgeot: function(){
	return alert(' Pidgeot\n Weight: 39.5 kg\n Height: 1.49 m\n Type: Bug|Flying')
	},
	Rattata: function(){
	return alert(' Rattata\n Weight: 3.5 kg\n Height: 0.3 m\n Type: Normal\n Candy Need to Evolve: 25 Rattata Candy')
	},
	Raticate: function(){
	return alert(' Raticate\n Weight: 18.39 kg\n Height: 0.75 m\n Type: Normal')	
	},
	Spearow: function(){
	return alert(' Spearow\n Weight: 1.61 kg\n Height: 0.28 m\n Type: Normal|Flying\n Candy Need to Evolve: 50 Spearow Candy')
	},
	Fearow: function(){
	return alert(' Fearow\n Weight: 7.29 kg\n Height: 0.89 m\n Type: Normal|Flying')
	},
	Ekans: function(){
	return alert(' Ekans\n Weight: 6.13 kg\n Height: 1.79 m\n Type: Poison\n Candy Need to Evolve: 50 Ekans Candy')
	},
	Pikachu: function(){
	return alert(' Pikachu\n Weight: 6.44 kg\n Height: 0.38 m\n Type: Electric\n Candy Need to Evolve: 50 Pikachu Candy')
	},
	Nidoran: function(){
	return alert(' Nidoran\n Weight: 4.86 kg\n Height: 0.4 m\n Type: Poison\n Candy Need to Evolve: 25 Nidoran Candy')
	},
	Clefairy: function(){
	return alert(' Clefairy\n Weight: 5.64 kg\n Height: 0.58 m\n Type: Fairy\n Candy Need to Evolve: 50 Clefairy Candy')	
	},
	Jigglypuff: function(){
	return alert(' Jigglypuff\n Weight: 6.89 kg\n Height: 0.54 m\n Type: Normal|Fairy\n Candy Need to Evolve: 50 Jigglypuff Candy')
	},
	Zubat: function(){
	return alert(' Zubat\n Weight: 7.5 kg\n Height: 0.8 m\n Type: Poison|Flying\n Candy Need to Evolve: 50 Zubat Candy')
	},
	Golbat: function(){
	return alert(' Golbat\n Weight: 52.56 kg\n Height: 1.43 m\n Type: Poison|Flying')
	},
	Oddish: function(){
	return alert(' Oddish\n Weight: 7.55 kg\n Height: 0.54 m\n Type: Grass|Poison\n Candy Need to Evolve: 25 Oddish Candy')
	},
	Paras: function(){
	return alert(' Paras\n Weight: 6.04 kg\n Height: 0.32 m\n Type: Bug|Grass\n Candy Need to Evolve: 50 Paras Candy')
	},
	Velonat: function(){
	return alert(' Velonat\n Weight: 27.72 kg\n Height: 0.93 m\n Type: Bug|Poison\n Candy Need to Evolve: 50 Velonat Candy')	
	},
	Venomoth: function(){
	return alert(' Venomoth\n Weight: 13.24 kg\n Height: 1.41 m\n Type: Bug|Poison')
	},
	Meowth: function(){
	return alert(' Meowth\n Weight: 2.16 kg\n Height: 0.31 m\n Type: Normal\n Candy Need to Evolve: 50 Meowth Candy')
	},
	Psyduck: function(){
	return alert(' Psyduck\n Weight: 19.6 kg\n Height: 0.8 m\n Type: Water\n Candy Need to Evolve: 50 Psyduck Candy')
	},
	Golduck: function(){
	return alert(' Golduck\n Weight: 23 kg\n Height: 1.97 m\n Type: Water')
	},
	Bellsprout: function(){
	return alert(' Bellsprout\n Weight: 6.12 kg\n Height: 0.81 m\n Type: Grass|Poison\n Candy Need to Evolve: 25 Bellsprout Candy')
	},
	Tentacool: function(){
	return alert(' Tentacool\n Weight: 45.5 kg\n Height: 0.9 m\n Type: Water|Poison\n Candy Need to Evolve: 50 Tentacool Candy')	
	},
	Tentacruel: function(){
	return alert(' Tentacruel\n Weight: 80.39 kg\n Height: 1.83 m\n Type: Water|Poison')
	},
	Geodude: function(){
	return alert(' Geodude\n Weight: 27.23 kg\n Height: 0.48 m\n Type: Rock|Ground\n Candy Need to Evolve: 25 Geodude Candy')
	},
	Slowpoke: function(){
	return alert(' Slowpoke\n Weight: 27.21 kg\n Height: 1.06 m\n Type: Water|Psychic\n Candy Need to Evolve: 50 Slowpoke Candy')
	},
	Slowbro: function(){
	return alert(' Slowbro\n Weight: 78.5 kg\n Height: 1.6 m\n Type: Water|Psychic')
	},
	Drowzee: function(){
	return alert(' Drowzee\n Weight: 32.42 kg\n Height: 0.9 m\n Type: Psychic\n Candy Need to Evolve: 50 Drowzee Candy')
	},
	Krabby: function(){
	return alert(' Krabby\n Weight: 8.09 kg\n Height: 0.44 m\n Type: Water\n Candy Need to Evolve: 50 Krabby Candy')	
	},
	Exeggcute: function(){
	return alert(' Exeggcute\n Weight: 1.78 kg\n Height: 0.38 m\n Type: Grass|Psychic\n Candy Need to Evolve: 50 Exeggcute Candy')
	},
	Cubone: function(){
	return alert(' Cubone\n Weight: 5.63 kg\n Height: 0.33 m\n Type: Ground\n Candy Need to Evolve: 50 Cubone Candy')
	},
	Koffing: function(){
	return alert(' Koffing\n Weight: 1.36 kg\n Height: 0.67 m\n Type: Poison\n Candy Need to Evolve: 50 Koffing Candy')
	},
	Tangela: function(){
	return alert(' Tangela\n Weight: 57.05 kg\n Height: 1.3 m\n Type: Grass')
	},
	Horsesea: function(){
	return alert(' Horsesea\n Weight: 8.08 kg\n Height: 0.44 m\n Type: Water\n Candy Need to Evolve: 50 Horsesea Candy')
	},
	Goldeen: function(){
	return alert(' Goldeen\n Weight: 15.0 kg\n Height: 0.6 m\n Type: Water\n Candy Need to Evolve: 50 Goldeen Candy')
	},
	Seaking: function(){
	return alert(' Seaking\n Weight: 33.69 kg\n Height: 1.16 m\n Type: Water')	
	},
	Staryu: function(){
	return alert(' Staryu\n Weight: 34.5 kg\n Height: 0.8 m\n Type: Water\n Candy Need to Evolve: 50 Staryu Candy')
	},
	Starmie: function(){
	return alert(' Starmie\n Weight: 64.69 kg\n Height: 0.98 m\n Type: Water|Psychic')
	},
	Magmar: function(){
	return alert(' Magmar\n Weight: 44.31 kg\n Height: 1.32 m\n Type: Fire')
	},
	Magikarp: function(){
	return alert(' Magikarp\n Weight: 10.0 kg\n Height: 0.9 m\n Type: Water\n Candy Need to Evolve: 400 Magikarp Candy')
	},
	Gyarados: function(){
	return alert(' Gyarados\n Weight: 179.21 kg\n Height: 5.52 m\n Type: Water|Flying')
	},
	Eevee: function(){
	return alert(' Eevee\n Weight: 9.77 kg\n Height: 0.32 m\n Type: Normal\n Candy Need to Evolve: 25 Eevee Candy')	
	},
	Jolteon: function(){
	return alert(' Squirtle\n Weight: 36.58 kg\n Height: 0.91 m\n Type: Electric')
	},
	Dratini: function(){
	return alert(' Dratini\n Weight: 3.3 kg\n Height: 1.8 m\n Type: Dragon\n Candy Need to Evolve: 12 Dratini Candy')
	},
	Dragonair: function(){
	return alert(' Dragonair\n Weight: 16.5 kg\n Height: 4.0 m\n Type: Dragon\n Candy Need to Evolve: 50 Dratini Candy')
	},
});

ReactDOM.render(
	<Pokemon/>, 
	document.getElementById('app')
);