var compose = function(functions)
{    
    return function(x)
    {
        while (functions.length !== 0)
        {
            fn = functions.pop()
            x = fn(x)
        }
        return (x)
    }
};