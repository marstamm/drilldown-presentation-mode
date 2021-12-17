import {
  attr,
  classes
} from 'tiny-svg'

import "./styles.css"

const animationLength = 1000;

const root = document.documentElement;
root.style.setProperty('--animation-length', animationLength + "ms");

var animation = ['zoomInParent', 'zoomInChild']

let enabled = false;

export default function PresentationMode(eventBus, canvas, elementRegistry) {
  // Add toggle

  var container = canvas.getContainer();
  var toggle = document.createElement('a');
  toggle.classList.add('presentationToggle');
  toggle.innerHTML = `<i class="comment outline icon"></i>`;
  toggle.title = "Enable/Disable Presentation Mode";
  toggle.classList.add('presentationToggle', 'comment', 'outline', 'icon')
  container.appendChild(toggle);

  toggle.addEventListener('click', () => {
    enabled = !enabled;
    root.classList.toggle('presenting', enabled);
  })

  let currentRoot;

  // var container = canvas.getContainer();
  // container.appendChild(document.createElement('i'<i class="comment outline icon"></i>')
  // let currentRoot;

  eventBus.on('root.set', e => {
    const newRoot = e.element

    if(newRoot.isImplicit) {
      return;
    }

    if (enabled && currentRoot) {
      root.classList.add('animating');
      var parents = allParents(newRoot.businessObject);
      var zoomIn = parents.includes(currentRoot.businessObject)

      // Play animation
      var center = zoomIn ? elementRegistry.get(newRoot.businessObject.id) : elementRegistry.get(currentRoot.businessObject.id);
      var centerGfx = elementRegistry.getGraphics(center);
      var transformOrigin = (center.x + center.width/2) + 'px ' + (center.y + center.height/2) + 'px'

      var parentLayer = canvas.getLayer(currentRoot.layer);
      var childLayer = canvas.getLayer(newRoot.layer);

      attr(parentLayer, 'display', null);
      attr(childLayer, 'display', null);

      attr(childLayer, 'transform-origin', transformOrigin);
      attr(parentLayer, 'transform-origin', transformOrigin);

      classes(parentLayer).add(animation[zoomIn ? 0 : 1]);
      classes(childLayer).add(animation[zoomIn ? 1 : 0]);
      root.classList.toggle('reverse', !zoomIn)

      classes(centerGfx).add('transformCenter');

      setTimeout(() => {
        root.classList.remove('animating');
        classes(parentLayer).remove(animation[zoomIn ? 0 : 1])
        classes(childLayer).remove(animation[zoomIn ? 1 : 0])
        classes(centerGfx).remove('transformCenter');
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