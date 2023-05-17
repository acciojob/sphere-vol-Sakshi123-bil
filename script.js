function volume_sphere() {
    //Write your code here
   var radius = document.getElementById("radius").value;

  // Calculate the volume of the sphere
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);

  // Display the volume in the output field
  document.getElementById("volume").value = volume;
	
		
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
