+function(){
    'use strict';
    //inject .css
    window.addEventListener('load', () => {
        console.log('css injection...');
    })

    //create wrapper
    

    // main toploader
    class TopLoader{
        start(type = 'standart')
        {
            return 'starting toploader ...'
        }
        end()
        {
            return 'stop toploader ...'
        }
    }
    //declaration
    window.toploader = new TopLoader
}();

