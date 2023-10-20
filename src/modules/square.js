class Square {
   x;
   y;
   length;
   color;
   constructor (x, y, length, color) {
      this.x = x;
      this.y = y;
      this.length = length;
      this.color = color;
   }
   getColor() {
      return this.color;
   }
   setColor(color) {
      this.color = color;
   }
   draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.length, this.length);
   }
}

export { Square };
