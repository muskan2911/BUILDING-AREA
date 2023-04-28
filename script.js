
window.onload = function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const dept1Floors = parseInt(document.getElementById("dept1-floors").value);
      const dept1Rooms = parseInt(document.getElementById("dept1-rooms").value);
      const dept2Floors = parseInt(document.getElementById("dept2-floors").value);
      const dept2Rooms = parseInt(document.getElementById("dept2-rooms").value);
      const dept3Floors = parseInt(document.getElementById("dept3-floors").value);
      const dept3Rooms = parseInt(document.getElementById("dept3-rooms").value);
      const dept4Floors = parseInt(document.getElementById("dept4-floors").value);
      const dept4Rooms = parseInt(document.getElementById("dept4-rooms").value);
      const dept5Floors = parseInt(document.getElementById("dept5-floors").value);
      const dept5Rooms = parseInt(document.getElementById("dept5-rooms").value);
      
      const dept1Area = dept1Floors * dept1Rooms * 50;
      const dept2Area = dept2Floors * dept2Rooms * 50; 
      
      const dept3Area = dept3Floors * dept3Rooms * 50;
      const dept4Area = dept4Floors * dept4Rooms * 50; 
      
      const dept5Area = dept5Floors * dept5Rooms * 50; 
      document.getElementById("dept1-area").innerHTML = dept1Area;
      document.getElementById("dept2-area").innerHTML = dept2Area;
      document.getElementById("dept3-area").innerHTML = dept3Area;
      document.getElementById("dept4-area").innerHTML = dept4Area;
      
      document.getElementById("dept5-area").innerHTML = dept5Area;
    });
  };
  
