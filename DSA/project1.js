// 1. Write a JavaScript Function to Descending Order data converting using Bubble sort.

function bubblesort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
       
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let store = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = store;
            }
        }
    }
    return arr;
}

console.log(bubblesort([87,5,23,44,76,23,4,56,89,34]));

//output: [89, 87, 76, 56, 44,34, 23, 23,  5,  4]

// 2. Write a JavaScript Function to Ascending Order data converting using Merge sort. not use method.

let arr1 = [4,78,34,100,2,89,56,60,7,90,43];

function mergesort(arr1) {
    if (arr1.length <= 1) {
        return arr1;
    }

    let mid = Math.floor(arr1.length / 2);
    let left = mergesort(arr1.slice(0, mid));
    let right = mergesort(arr1.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergesort(arr1));

//output: [2,  4,  7, 34, 43,56, 60, 78, 89, 90,100]


// 3. Write a JavaScript Program 2-D array print and also print its's square of every element.

let arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let squarearray = (arr2) => {
    let res = [];
    for (let i = 0; i < arr2[0].length; i++) {
        res[i] = [];
        for (let j = 0; j < arr2.length; j++) {
            res[i][j] = arr2[j][i];
        }
    }
    return res;
}

console.log(squarearray(arr2));

// output: [1 ,4, 7],
//         [2, 5, 8],
//         [3, 6, 9]

