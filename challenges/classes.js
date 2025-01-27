
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. 
//Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker {
    constructor(props){
      this.length = props.length,
      this.width = props.width,
      this.height = props.height
    }
  
  
  
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
  
    volume(){
      return `${cuboid.length}` * `${cuboid.width}` * `${cuboid.height}`
    }
    
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
  
    surfaceArea(){
      return 2 * `${cuboid.length}` * `${cuboid.width}` + `${cuboid.length}` * `${cuboid.height}` + `${cuboid.width}` * `${cuboid.height}`
    }
  }
  // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker. 
// Test your work by logging out your volume and surface area.

  class ChildCuboidMaker extends CuboidMaker {
      constructor(params){
        super(params);

        this.length = params.length; 
        this.width = params.width;
        this.height = params.height;
      }

      resolveArea(){
        return `The area of the cuboid is ${cuboid.width * cuboid.length}`
      }
      resolveVolume(){
        return `The volume of the cuboid is ${cuboid.width * cuboid.length * cuboid.height}`
      }
  }
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  const cuboid = new CuboidMaker ({
    length: 4, 
    width: 5,
    height: 5
  });

  const childCuboid = new ChildCuboidMaker ({
    length: 4, 
    width: 5,
    height: 5
  });
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  console.log(childCuboid.resolveArea())
  console.log(childCuboid.resolveVolume())
  
  
  


