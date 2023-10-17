const canvas = document.getElementById("game");

if (canvas.getContext) {
   const ctx = canvas.getContext("2d");
} else {
   print("Error getting context of canvas\n");
}
