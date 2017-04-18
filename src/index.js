import TopLoader from './top-loader'

export function start()
{
    if(typeof window != 'undefined')
    {

    }else 
    {
        console.error('top page loader only worked on client')
    }
}

export function end()
{
    if(typeof window != 'undefined')
    {

    }else 
    {
        console.error('top page loader only worked on client')
    }
}

export default function index()
{
    if(typeof window != 'undefined')
    {
        return {
            start, 
            end
        }
    }else 
    {
        console.error('top page loader only worked on client')
    }
}