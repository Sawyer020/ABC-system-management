// ** Not suggested directly 'import .. from ..' in Type Declare file **
//'declare' is omitted 

//TS provides 'ReturnType' to get return value from function
type RootState = ReturnType<typeof import("@/store").getState>

interface Window{
    __REDUX_DEVTOOLS_EXTENSION__:function;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function;
}