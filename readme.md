# Kevin M. Smith 2023 Lettering Scripts and Templates

##What is it?
This is an Adobe Illustrator 2020 Template file that comes with my layer set up and a compilation of various assets I use to letter my pages. These include balloons, some design elements and some tails. There are also some fonts, but I imagine they won't import with the file.

It also includes some scripts that I use to speed up the formatting of my balloons. A guide for using which is down below. 

##Guide:

###SpeechBubbleResize.jsx
This is designed to resize a balloon to properly fit the text. 
1. Create the general balloon shape you want
1. Create the text
1. Select both. Make sure the text is in front of the balloon
1. Run the script. It should resize the balloon and center the text within it, although, sometimes that centering doesn't work so you may have to do that manually. 

From here, you can design the balloon however you want. I am assuming you are using the layer method of lettering as I've found it very good practice to do so and there are a lot of ways to actually automate the set up of it, with Actions within Illustrator. I didn't include those here are they will be very specfic to the design you want. But generally, when this is done you want to have this be your set up:

- TEXT
- Balloon with a white fill
- Under balloon/balloon stroke. (I have two of these. If you get an error about a "fourthObject" this is why)

The idea is that your tail for the balloon will go inbetween the white fill and the black/stroked balloon.
Now you can use:

###OrganizeLayers.jsx
1. Select all 3/4 items (Text, White Balloon and up to two black balloons. No tail.)
1. Run the script.

It will move the top item to the "Lettering" layer. The second to the "Balloons" layer and the third and fourth to the "Under Balloons" layer. 

Thank you for checking out the scripts and tools. If anyone has any feedback, please feel free to reach out and feel free to pick up some of the books I'm lettering with these tool. 


#Find comics my books [here.](https://livewirecomics.gumroad.com/)