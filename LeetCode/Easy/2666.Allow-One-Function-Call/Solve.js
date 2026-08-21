var once = function(fn)
{
    let a = true
    return function(...args)
    {
        if (a)
            return (a = false, fn(...args))
        else
            return (undefined)
    }
};
