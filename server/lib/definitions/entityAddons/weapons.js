const { combineStats, skillSet, makeAura } = require('../facilitators.js');
const { base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, smshskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');
function makeDualiaGun(l,w,a,x,y,deg,t) {
	return {
		LENGTH: 20*l,
		WIDTH: 20*w,
		ASPECT: a,
		X: x,
		Y: y,
		ANGLE: deg,
		DELAY: t,
	}
}
Class.dualiaWeapon_null = {
	PARENT: "genericTank",
	LABEL: "Null",
}
// Bullets
Class.dualiaWeapon_mono = {
	PARENT: "genericTank",
	LABEL: "Mono",
	GUNS: [
		{
			POSITION: makeDualiaGun(0.9,0.45,1,0,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic]),
				TYPE: "bullet"
			}
		}
	]
}
