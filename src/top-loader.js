import {injectCSS} from './helpers' 

export default class TopLoader{
    start(type = 'standart')
    {
        return 'starting toploader ...'
    }

    end()
    {
        return 'stop toploader ...'
    }
}

+function(){
    'use strict';
    //inject .css
    window.addEventListener('load', () => {
        console.log('css injection...');
        injectCSS('./dist/top-loader.css')
    })

    //create wrapper
    
    
    //declaration
    window.toploader = new TopLoader
}();

