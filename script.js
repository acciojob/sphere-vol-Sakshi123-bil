function volume_sphere() {
    //Write your code here
    var radius=document.getElementById('radius').value;    
		document.getElementById('MyForm').value=(4/3)*(3.14)*((r)*(r)*(r));
	
		
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
