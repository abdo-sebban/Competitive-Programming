var MyObject = 
{
    toBe : function(val)
    {
        if (this.n === val)
            return (true);
        else
         throw "Not Equal";
    },
    notToBe : function(val)
    {
        if (this.n !== val)
            return (true);
        else
         throw "Equal";
    },
}

var expect = (val) => (MyObject.n = val, MyObject)