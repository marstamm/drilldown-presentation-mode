import {
  attr,
  classes
} from 'tiny-svg'

import "./styles.css"

const animationLength = 1000;

const root = document.documentElement;
root.style.setProperty('--animation-length', animationLength + "ms");

var animation = ['zoomInParent', 'zoomInChild']
export default function PresentationMode(eventBus, canvas, elementRegistry) {
  let currentRoot;

  eventBus.on('root.set', e => {
    const newRoot = e.element

    if(newRoot.isImplicit) {
      return;
    }


    if (currentRoot) {
      root.classList.add('animating');
      var parents = allParents(newRoot.businessObject);
      var zoomIn = parents.includes(currentRoot.businessObject)

      // Play animation
      var center = zoomIn ? elementRegistry.get(newRoot.businessObject.id) : elementRegistry.get(currentRoot.businessObject.id);
      var transformOrigin = (center.x + center.width/2) + 'px ' + (center.y + center.height/2) + 'px'

      var parentLayer = canvas.getLayer(currentRoot.layer);
      var childLayer = canvas.getLayer(newRoot.layer);

      attr(parentLayer, 'display', null);
      attr(childLayer, 'display', null);

      attr(childLayer, 'transform-origin', transformOrigin);
      attr(parentLayer, 'transform-origin', transformOrigin);

      classes(parentLayer).add(animation[zoomIn ? 0 : 1]);
      classes(childLayer).add(animation[zoomIn ? 1 : 0]);
      classes(parentLayer).toggle('reverse', !zoomIn)
      classes(childLayer).toggle('reverse', !zoomIn)

      setTimeout(() => {
        root.classList.remove('animating');
        classes(parentLayer).remove(animation[zoomIn ? 0 : 1])
        classes(childLayer).remove(animation[zoomIn ? 1 : 0])
        attr(parentLayer, 'display', 'none');
      }, animationLength)
    }

    currentRoot = newRoot;
  })

}
var allParents = function(bo) {
  var parents = []
  var parent = bo.$parent
  while (parent) {
    parents.push(parent)
    parent = parent.$parent
  }
  return parents
}

PresentationMode.$inject = ['eventBus', 'canvas', 'elementRegistry'];