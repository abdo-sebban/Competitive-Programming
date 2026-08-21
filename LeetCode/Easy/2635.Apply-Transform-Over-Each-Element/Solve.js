var map = function(arr, fn)
{
    var array = []
    for (let i = 0; i < arr.length; i++)
        array.push(fn(arr[i],i));
    console.log(array)
    return (array)
};