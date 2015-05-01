$.fn.spectrum = function(options) {
// Defining the variables
	var index = 0;
	var $element = $(this);

// Array of Colours
	var colourArray = [

		// Colour 1 - Orange
	    {
	        src: 'colour1',
	        // colour: 'rgb(252,115,49)'
	        colour: '#8A9FB5'
	    },

	    // Colour 2 - Pink
	    {
	        src: 'colour2',
	        // colour: 'rgb(236,0,140)'
	        colour: '#50E3C2'
	    },

	    // Colour 3 - Yellow
	    {
	       	src: 'colour3',
	        // colour: 'rgb(241,196,15)'
	        colour: '#FCDE2E'
	    },

	    // Colour 4 - Green
	   	{
	        src: 'colour4',
	        // colour: 'rgb(95,178,106)'
	        colour: '#88D3FF'
	    }// },

	    // // Colour 5 - Blue
	    // {
	    //     src: 'colour5',
	    //     // colour: 'rgb(113,137,255)'
	    //     colour: '#4A4949'
	    // }
	];

	//Use set interval to go through our colourArray
	//Each interval change the background colour of the element
	//Plugin is on, and increment the index.
	setInterval(function() {
		//Change background of selected $element to be
		//colourArray[index]
		//Increment index
		index = index + 1;
		//Make sure that index is not larger than the length of the colourArray
		//If so,
	},4000);

	// Create a style tag
	var style = $("<style>");

	for (var i = 0; i < colourArray.length; i++) {

		// Append a CSS rule to the style tag
		var currentColour = colourArray[i];
		var colorStyle =  " ."+currentColour.src+ " { background: "+currentColour.colour+"; } \n\n";

		style.append(colorStyle);
		// console.log(colourArray[i]);

	}; // end for loop

	var c = 0;
	var currentColour = setInterval(function(){
		// setColor();
		var className = colourArray[c].src;
		// console.log("We should change the class to ", className);
		$('#spectrumPlugin').removeClass().addClass(className + ' spectrumHeader banner');

		c++;

		if(c === colourArray.length) {
			c = 0;
		}

	}, 3600);

	// Appends the style tag in the body of the HTML document
	$('body').append(style);

};