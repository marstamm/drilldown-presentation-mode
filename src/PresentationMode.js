import {
  attr,
  classes
} from 'tiny-svg'

import "./styles.css"

const animationLength = 1000;

const root = document.documentElement;
root.style.setProperty('--animation-length', animationLength + "ms");


export default function PresentationMode(eventBus, canvas) {
  let currentRoot;

  eventBus.on('root.set', e => {
    const newRoot = e.element

    if(newRoot.isImplicit) {
      return;
    }

    console.log('root.set', e, currentRoot)

    if (currentRoot) {
      // Play animation
      var parentLayer = canvas.getLayer(currentRoot.layer);
      var childLayer = canvas.getLayer(newRoot.layer);

      attr(parentLayer, 'display', null);
      attr(childLayer, 'display', null);

      classes(parentLayer).add('fadeOut')
      classes(childLayer).add('fadeIn')

      setTimeout(() => {
        classes(parentLayer).remove('fadeOut')
        classes(childLayer).remove('fadeIn')
        attr(parentLayer, 'display', 'none');
      }, animationLength)
    }

    currentRoot = newRoot;
  })

}

PresentationMode.$inject = ['eventBus', 'canvas'];