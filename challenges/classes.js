// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass{
  constructor(cubeAttr){
    this.length = cubeAttr.length;
    this.width = cubeAttr.width;
    this.height = cubeAttr.height;
  }
// INSERT METHOODS
cuboidVol(){
  return this.length * this.width * this.height;
}
cuboidSurf(){
  return 2 * (this.length * this.width + this.length * this.width + this.width * this.height);
}
}

const cuboidClass = new CuboidMakerClass({
  length: 4,
  width: 5,
  height: 5
});

class CubeMaker extends CuboidMakerClass{
  constructor(length, width, height){
  super(length, width, height)
  }

  CubeVol(){
    return (this.width * this.height * this.length);
  }
  CubeSurf(){
    return 6 * (this.length * this.length );
  }
}
const cuboidtwo = new CubeMaker({
  length: 4,
  width: 5,
  height: 5
});

console.log(cuboidClass.cuboidVol()); // 100
console.log(cuboidClass.cuboidSurf()); // 130
console.log(cuboidtwo.CubeVol());
console.log(cuboidtwo.CubeSurf());


// Test your volume and surfaceArea methods by uncommenting the logs below:




// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas 
// for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


