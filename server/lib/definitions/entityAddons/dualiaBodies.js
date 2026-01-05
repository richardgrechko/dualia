const { combineStats, skillSet, makeAura, makeAuto, makeRadialAuto } = require('../facilitators.js');
const { base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, smshskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');
const dualia = {
	gun(l,w,a,x,y,deg,t) {
		return {
			LENGTH: 20*l,
			WIDTH: 20*w,
			ASPECT: a,
			X: 20*x,
			Y: 10*y,
			ANGLE: deg,
			DELAY: t,
		}
	},
	turret(s,x,y,an,arc,l) {
		return {
			SIZE: 20*s,
			X: 10*x,
			Y: 5*y,
			ANGLE: an,
			ARC: 2*arc,
			LAYER: l,
		}
	},
	prop(s,x,y,an,l) {
		return {
			SIZE: 20*s,
			X: 10*x,
			Y: 10*y,
			ANGLE: an,
			LAYER: l,
		}
	},
}
Class.dualiaBody_null = {
	PARENT: "genericTank",
	LABEL: "",
	PROPS: [
		{
			POSITION: dualia.prop(0.5,0,0,0,1),
			TYPE: ["genericTank", {COLOR: {
				BASE: "mirror",
				BRIGHTNESS_SHIFT: 15
			}}]
		}
	]
}
