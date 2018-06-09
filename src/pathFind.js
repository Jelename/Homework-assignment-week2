// function pathFind(path, object) {
//
// };



//
// function test(arrayOfStrings, object) {
//   let array = arrayOfStrings;
//   let n = array.length;
//   let pathFind = array => {
//     if (n = 0) {
//       return array[0];
//     }
//     return array[n-1].array[n-2];
//   }
//   return pathFind;
// };

//
//
// function merge(array) {
//   let names = {
//     milos: {
//       lela: {
//         ceda: {
//           nada: 'majka'
//         }
//       }
//     }
//   }
//   let arrayOfStrings = array;
//   let n = arrayOfStrings.length;
//   console.log(n);
//   //console.log(n);
//   let mergedNames = `names.${array[n-4]}.${array[n-3]}.${array[n-2]}.${array[n-1]}`;
//   return `${arrayOfStrings[0]}`;
// }
//
// console.log(merge(['milos', 'lela', 'ceda', 'nada']));
//
//
// function velikaFunkcija() {
// let names = {
//   milos: {
//     lela: {
//       ceda: {
//         nada: 'majka'
//       }
//     }
//   }
// }
let array = ['misa','lela','ceda'];
const names = {
    milos: {
      lela: {
        ceda: {
          nada: "majka"
        }
      }
    }
  }




const pathFind = (array, names) => {
  const newObject = array.reduceRight(
    (accumulator, item) => {
      const newAccumulator = {};
      newAccumulator[item] = Object.assign(
        {},
        accumulator
      );
      return newAccumulator;
    },
    {}
  );
  if (newObject === names) {
    return newObject;
  }
};


console.log(pathFind(array, names));




// function pathFind(array, object) {
//   //let arrayLength = array;
//   //let n = arrayLength.length;
//   //console.log(n); // 4
//   let i = 0;
//   //console.log(i);
//   function getLeaf(object) {
//     let b = array[i];
//     //console.log('hello');
//     i = i + 1;
//     //console.log(i);
//     if (object.b) {
//         console.log();
//         return getLeaf(object.b);
//     } else { // node must be a leaf node
//       //console.log(object);
//         return object;
//     }
//   }
//   //return object;
// }
//
//
// const names = {
//     milos: {
//       lela: {
//         ceda: {
//           nada: "majka"
//         }
//       }
//     }
//   }
// console.log(names);

//pathFind(['misa','lela','ceda','nada'], names);
// function getLeaf(node) {
//     if (node.leftChild) {
//         return getLeaf(node.leftChild);
//     } else if (node.rightChild) {
//         return getLeaf(node.rightChild);
//     } else { // node must be a leaf node
//         return node;
//     }
// }


//console.log(velikaFunkcija(names, array).data);
//
//
// console.log(test(['srbija', 'smederevo', 'kukoleca', 'slavica'], {
//   srbija: {
//     smederevo: {
//       kukoleca: {
//         slavica: 'majka'
//       }
//     }
//   }
// })
// )


// factorial(n) = n! = 1 * 2 * 3 * ... n
// function fac(n) {
//   if (n <= 1) return n
//   return n * fac(n - 1)
// }
//
// fac(10)








//module.exports = { pathFind };
