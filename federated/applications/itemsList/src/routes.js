import Characters from './Characters'

export default [
    {
        path: '/characters',
        Component: Characters
    },
    {
        path: '*',
        Component: ()=><center>404</center>
    },
]
