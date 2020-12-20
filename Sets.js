const mySet = function () {
  let array = [];

  this.has = (ele) => {
    return array.indexOf(ele) !== -1;
  };

  this.values = () => {
    return array;
  };

  this.add = (ele) => {
    if (!this.has(ele)) {
      array.push(ele);
      return true;
    }
    return false;
  };

  this.delete = (ele) => {
    if (this.has(ele)) {
      index = array.indexOf(ele);
      array.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = () => {
    return array.length;
  };
  this.union = function (setAkhor) {
    let unionSet = new mySet(),
      firstSet = this.values(),
      seSet = setAkhor.values();
    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    seSet.forEach((e) => {
      unionSet.add(e);
    });
    return unionSet;
  };

  this.intersection = function (setAkhor) {
    let intersection = new mySet(),
      firstSet = this.values();
    firstSet.forEach((e) => {
      if (setAkhor.has(e)) {
        intersection.add(e);
      }
    });

    return intersection;
  };

  this.difference = function (setAkhor) {
    let differenceSet = new mySet(),
      firstSet = this.values();
    firstSet.forEach((e) => {
      if (!setAkhor.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  this.subset = function (setAkhor) {
    let firstSet = this.values();
    return firstSet.every((value) => {
      return setAkhor.has(value);
    });
  };
};

let setA = new mySet();
let setB = new mySet();

// ? do some testing here
