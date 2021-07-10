/*
* Code written by LocCode (Malik Khodjaev)
*
* Feel free to use this awful code, it's is 100% free
* for any commercial and non-commercial use
*
*/

/*
* Default values of the accordion:
*
* openingElement - 'ul'
* triggerElement - 'button'
* activeClassTrigger - '_activeTrigger'
* toggleSpeed - 400
* workMode - 'default | opened'
*
* You may easily use them as params for the config
*
*  */

$(function() {

    new AccordionMenu('#accordion-1', {
        'openAllAccordion': '.open-all-accordion',
        'closeAllAccordion': '.close-all-accordion',
    });

});
