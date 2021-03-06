// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(measure) {
//     this.length = measure.length;
//     this.width = measure.width;
//     this.height = measure.height;
//     CuboidMaker.prototype.cuboid = function() {
//         return 2 * (this.length * this.width * this.height);
//     }
//   }
  
//   const cuboid = new Cuboid ({
//       length:4,
//       width:5,
//       height:5,
//   })
    
  class CuboidMaker {
      constructor(cuboid) {
          this.length = cuboid.length;
          this.width = cuboid.width;
          this.height = cuboid.height;
      }
      volume() {
          return (this.length * this.width * this.height);
      }
      surfaceArea(){
          return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      }
  }

  const cuboid = new CuboidMaker ({
          length:4,
          width:5,
          height:5,
      })
        
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.