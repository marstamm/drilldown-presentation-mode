import Modeler from 'bpmn-js/lib/Modeler';

import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";

import "./styles.css";

import exampleXml from './example.bpmn.js';

import PresentationMode from '../src/index.js';

// import NyanModule from 'bpmn-js-nyan';


(async function() {
  // create a modeler
  const modeler = new Modeler({ 
    container: '#canvas',
    keyboard: {
      bindTo: document
    },
    additionalModules: [
      PresentationMode,
      
      // NyanModule
    ]
   });

  // import diagram
  try {
    await modeler.importXML(exampleXml);
    // ...
  } catch (err) {
    // err...
  }
})()