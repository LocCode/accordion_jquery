# Customizable Accordion (Jquery)
Easily Configurable Accordion Menu (Jquery)

Customize this accordion menu using both Javascript and CSS.

<h2>How to use it?</h2>

Firstly, I recommend to check the demo by opening ```accordion.html```.<br> 
But if you want to customize it and feel the flexibility of this library - just follow the steps mentioned below, good luck!

<b>1.</b> All you need is to add <b>accordionMenu.js</b> file to your project and include it in any part of your HTML (better just before </<b>body</b>> tag):

<code><script type="text/javascript" src="accordionMenu.js"></script></code>


<b>2.</b> Now you are ready to use it where ever you want just adding this code into your Javascript files (.js):

```new AccordionMenu('.accoridon-example');```

Also, do not forget about HTML structure. If you use default config it should be like that:

```
  <ul class="accordion-example">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
    <li class="submenu">
        <button>Submenu list</button>
        <ul>
            <li>Submenu Item</li>
            <li>Submenu Item</li>
            <li>Submenu Item</li>
        </ul>
    </li>
    <li>Item</li>
    <li class="submenu">
        <button>Submenu list</button>
        <ul>
            <li>Submenu Item</li>
            <li>Submenu Item</li>
            <li>Submenu Item</li>
        </ul>
    </li>
</ul>
```

![Screenshot_1](https://user-images.githubusercontent.com/5232966/125171926-47dc5000-e1d0-11eb-8d64-c6c84f6a1ba9.png)
<i>Don't be aware of this design. You are free to fully customize it through CSS :)</i>


<h2>Custom configuration</h2>

Sometimes you need more than standard accordion, so you are free to set your own configuration for each accordion which you have created. Just send your configuration as a parameter:

```
new AccordionMenu('.accordion-example', {
        'openingElement': 'ul',
        'triggerElement': 'button',
        'activeClassTrigger': '_activeTrigger',
        'toggleSpeed': 400,
        'workMode': 'default',
        'openAllAccordion': '.open-all-accordion',
        'closeAllAccordion': '.close-all-accordion',
    });
```

Let's take a look at each property more closely:

1. ```'openingElement'``` — (.classname, #id, htmlElement) element which should be opened (changed display:none -> display:block) when the user clicks on ```'triggerElement'```.
  
2. ```'triggerElement'``` — (.classname, #id, htmlElement) main element or group of elements which waits for user click on it then toggles the state of child ```'openingElement'```.

3.  ```'activeClassTrigger'``` — (any className without dot before it) the className which will be added to the ```triggerElement``` after being clicked. This can be useful for working with CSS animations and other situations when you need to be sure that one of the elements is opened.

4.  ```'toggleSpeed'``` — (any number) you may set your custom animation speed for toggling ```'openingElement'``` state. Given number represents milliseconds.

5.  ```'workMode'``` — ('default' or 'opened') just for case when you need your accordion to be opened by default or not.

6.  ```'openAllAccordion'``` — (.classname, #id, htmlElement) you may set any element here and after beeing clicked your accordion will be fully opened.

7.  ```'closeAllAccordion'``` — (.classname, #id, htmlElement) the same as ```'openAllAccordion'```, but your accordion will be fully closed.

<h2>Attention!</h2>

If you find any bugs or suggestions just write to my email: loc.root.123@gmail.com or better fork it and fix them by yourself :)

<h6><b>This documentation is actual for 1.0 version which is the latest now. So, sooner I may add some extra changes for it.</b></h6>

