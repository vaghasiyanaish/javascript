//linear search

let arr=[11,67,45,34,89,56,12,45,23,78]

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target is not found
}

let ans=linearSearch(arr, 45);

if (ans !== -1) 
{
    console.log(`Element found at index: ${ans}`);
}
else 
{
    console.log("Element not found");
}