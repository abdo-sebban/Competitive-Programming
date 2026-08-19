var createCounter = (init) =>
{
    var MyObject = new Object();

    MyObject.init = init;
    MyObject.increment = () =>
    {
        MyObject.init += 1;
        return (MyObject.init)
    };
    MyObject.decrement = () =>
    {
        MyObject.init -= 1;
        return (MyObject.init)
    };
    MyObject.reset = () =>
    {
        MyObject.init = init;
        return (MyObject.init)
    };
    return (MyObject);  
};
