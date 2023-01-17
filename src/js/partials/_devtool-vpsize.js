/* eslint-disable prettier/prettier */
/*
  Script to display the viewport size when working on responsive stuff.
  Adapted to vanilla JS by: Taylor Hunt - https://codepen.io/tigt/
*/

const el = document.createElement('output');
document.body.append(el);
Object.assign(el.style, {
	position: 'fixed',
	bottom: 0,
	left: 0,
	background: 'red',
	color: 'white',
	padding: '5px',
	fontSize: '14px',
	fontWeight: '600',
  opacity: 0.75
});
function updateOutput() {
	const html = document.documentElement;
  el.value = html.clientWidth + ' × ' + html.clientHeight;
};
window.addEventListener('resize', updateOutput);
updateOutput();
