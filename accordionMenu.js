/*
* Code written by LocCode (Malik Khodjaev)
*
* Feel free to use this awful code, it's is 100% free
* for any commercial and non-commercial use
*
*/

class AccordionMenu {

    constructor(selector, config) {

        //Should be ID or ClassName
        this.selector = selector;

        this.config = {};

        this.init(config);

    }

    init(config) {

        if (this.isElementExists(this.selector)) {


            //Applying config
            this.applyConfig(config);

            //Binding click event on toggling submenus
            this.clickEventBind(

                $(`${this.selector} .submenu ${this.config.triggerElement}`),

                this.toggleSubmenus,
                {
                'oneTabMode' : this.config.oneTabMode,
                'toggleDataConfig' : this.getToggleAccordionConfig('close'),
                'submenu' : this.config.openingElement,
                'speed' : this.config.toggleSpeed,
                'activeClassTrigger' : this.config.activeClassTrigger,
                'activeClass' : this.config.activeClass

            });

        } else {

            console.error('[mAccordion] Given selector does not exist.');
            return false;

        }

    }

    applyConfig(config){

        if (this.isElementExists(config)){

            this.setCustomConfig(config);

            //Setup of the given work mode
            this.setWorkMode(this.config.workMode);

        }else{

            //Setup of the default config and work mode

            this.setDefaultConfig();

            this.setWorkMode(this.config.workMode);

        }

        //Activating open all button (if present)
        if (this.config.openAllAccordion){

            this.bindAccordionToggles($(this.config.openAllAccordion), 'open');

        }

        //Activating close all button (if present)
        if (this.config.closeAllAccordion){

            this.bindAccordionToggles($(this.config.closeAllAccordion), 'close');

        }

    }

    setCustomConfig(config){
        //Selector for element to be opened after trigger fired
        this.config.openingElement = !config.openingElement ? 'ul' : config.openingElement;
        //Trigger element for opening menu
        this.config.triggerElement = !config.triggerElement ? 'button' : config.triggerElement;
        //Speed of the toggling animation
        this.config.toggleSpeed = !config['toggleSpeed'] ? 400 : config['toggleSpeed'];
        //For future extending
        this.config.workMode = !config['workMode'] ? 'default' : config['workMode'];
        //Active class for toggled element
        this.config.activeClass = !config['activeClass'] ? '_active' : config['activeClass'];
        //Active class for triggerElement
        this.config.activeClassTrigger = !config['activeClassTrigger'] ? '_activeTrigger' : config['activeClassTrigger'];
        //Element for closing all elements of the accordion
        this.config.closeAllAccordion = !config['closeAllAccordion'] ? false : config['closeAllAccordion'];
        //Element for applying class on opening any accordion element
        this.config.elementOnOpeningAccordion = !config['classOnOpeningAccordion'] ? false : config['classOnOpening'];
        //Applied classname on opening any accordion element
        this.config.classOnOpening = !config['classOnOpening'] ? '_opened' : config['classOnOpening'];
        //Element for opening all elements of the accordion
        this.config.openAllAccordion = !config['openAllAccordion'] ? false : config['openAllAccordion'];
    }

    setDefaultConfig(){
        //Selector for element to be opened after trigger fired
        this.config.openingElement = 'ul';
        //Trigger element for opening menu
        this.config.triggerElement = 'button';
        //Speed of the toggling animation
        this.config.toggleSpeed = 400;
        //For future extending
        this.config.workMode = 'default';
        //Active class for toggled element
        this.config.activeClass = '_active';
        //Active class for triggerElement
        this.config.activeClassTrigger = '_activeTrigger';
        //Element for closing all elements of the accordion
        this.config.closeAllAccordion = false;
        //Element for applying class on opening any accordion element
        this.config.elementOnOpeningAccordion = false;
        //Applied classname on opening any accordion element
        this.config.classOnOpening = '_opened';
        //Element for opening all elements of the accordion
        this.config.openAllAccordion = false;
    }

    setWorkMode(workMode){

        let data = {
            state : 'open',
            openingElement : this.config.openingElement,
            selector: this.selector,
            speed : this.config.toggleSpeed
        }

        if (workMode === 'opened') {

            this.toggleAllAccordion(false, data);

        }

    }

    isElementExists(element) {

        if (!element || typeof element === 'undefined') {

            return false;

        }else{

            return element;

        }

    }

    bindAccordionToggles(element, state){

        if(element){

            let data = this.getToggleAccordionConfig(state)

            this.clickEventBind(element, this.toggleAllAccordion, data );

        }

    }

    getToggleAccordionConfig(state){

        return {
            state : state,
            triggerElement: this.config.triggerElement,
            activeClassTrigger: this.config.activeClassTrigger,
            openingElement : this.config.openingElement,
            selector: this.selector,
            speed : this.config.toggleSpeed
        }

    }

    clickEventBind(selector, methodName, data) {

        selector.on('click', (element) => {

            methodName( element, data );

        });

    }


    toggleSubmenus = (element, data) => {

        let nextToOpeningElement = $(element.currentTarget).next($(data.submenu));

        nextToOpeningElement.slideToggle(data.speed);

        $(element.currentTarget).toggleClass(data.activeClassTrigger);

        nextToOpeningElement.toggleClass(data.activeClass);

    }


   toggleAllAccordion( element = null, data ){

       let menuTabs = $(data.selector).find($(data.openingElement));

        if (data.state === 'open'){

            if (data.triggerElement){

                $(data.selector).find($(data.triggerElement)).addClass(data.activeClassTrigger);

            }

            menuTabs.slideDown(data.toggleSpeed);

        }else if (data.state === 'close'){

            if (data.triggerElement){

                $(data.selector).find($(data.triggerElement)).removeClass(data.activeClassTrigger);

            }

            menuTabs.slideUp(data.toggleSpeed);

        }
   }

}