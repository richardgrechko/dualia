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
			POSITION: dualia.gun(0.9,0.45,1,0,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic]),
				TYPE: "bullet"
			}
		}
	]
}
//// Tier 1 Bullets
Class.dualiaWeapon_sniper = {
	PARENT: "genericTank",
	LABEL: "Sniper",
	BODY: {
		FOV: 1.15
	},
	GUNS: [
		{
			POSITION: dualia.gun(1.1,0.45,1,0,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
				TYPE: "bullet"
			}
		},
		{
			POSITION: dualia.gun(0.3,0.45,-1.25,0.35,0,0,0),
		},
	]
}
Class.dualiaWeapon_dual = {
	PARENT: "genericTank",
	LABEL: "Dual",
	GUNS: [
		{
			POSITION: dualia.gun(0.9,0.4,1,0,-0.55,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
				TYPE: "bullet"
			}
		},
		{
			POSITION: dualia.gun(0.9,0.4,1,0,0.55,0,0.5),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
				TYPE: "bullet"
			}
		},
	]
}
Class.dualiaWeapon_machinist = {
	PARENT: "genericTank",
	LABEL: "Machinist",
	GUNS: [
		{
			POSITION: dualia.gun(0.6,0.4,1.3,0.4,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
				TYPE: "bullet"
			}
		},
	]
}
Class.dualiaWeapon_flank = {
	PARENT: "genericTank",
	LABEL: "Flank",
	GUNS: weaponArray({
		POSITION: dualia.gun(0.9,0.45,1,0,0,0,0),
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
			TYPE: "bullet"
		}
	},3),
}
Class.dualiaWeapon_unnamed1 = {
	PARENT: "genericTank",
	LABEL: "Unnamed1",
	TOOLTIP: "This weapon is currently unnamed, decide a name for this",
	GUNS: [
		{
			POSITION: dualia.gun(0.9,0.45,1,0,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic]),
				TYPE: "bullet"
			}
		},
		{
			POSITION: dualia.gun(0.3,0.4,1.3,0.35,0,180,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.drone]),
				TYPE: "drone",
				MAX_CHILDREN: 4
			}
		}
	]
}
Class.dualiaWeapon_guard = {
	PARENT: "genericTank",
	LABEL: "Guard",
	GUNS: [
		{
			POSITION: dualia.gun(0.9,0.45,1,0,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic]),
				TYPE: "bullet"
			}
		},
		{
			POSITION: dualia.gun(0.6,0.4,1,0,0,180,0),
		},
		{
			POSITION: dualia.gun(0.15,0.4,1.4,0.6,0,180,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap]),
				TYPE: "trap"
			}
		}
	]
}
//// Tier 2 Bullets
Class.dualiaWeapon_assassin = {
	PARENT: "genericTank",
	LABEL: "Assassin",
	BODY: {
		FOV: 1.25
	},
	GUNS: [
		{
			POSITION: dualia.gun(1.25,0.45,1,0,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
				TYPE: "bullet"
			}
		},
		{
			POSITION: dualia.gun(0.3,0.45,-1.25,0.35,0,0,0),
		},
	]
}
Class.dualiaWeapon_trial = {
	PARENT: "genericTank",
	LABEL: "Trial",
	GUNS: [
		{
			POSITION: dualia.gun(0.7,0.4,1,0,-0.6,0,0.5),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
				TYPE: "bullet"
			}
		},
		{
			POSITION: dualia.gun(0.7,0.4,1,0,0.6,0,0.5),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
				TYPE: "bullet"
			}
		},
		{
			POSITION: dualia.gun(0.9,0.4,1,0,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
				TYPE: "bullet"
			}
		},
	]
}
//// Tier 3 Bullets
Class.dualiaWeapon_ranger = {
	PARENT: "genericTank",
	LABEL: "Ranger",
	BODY: {
		FOV: 1.4
	},
	GUNS: [
		{
			POSITION: dualia.gun(1.4,0.45,1,0,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
				TYPE: "bullet"
			}
		},
		{
			POSITION: dualia.gun(0.5,0.45,-1.15,0.35,0,0,0),
		},
		{
			POSITION: dualia.gun(0.4,0.55,-1.25,0.25,0,0,0),
		},
	]
}
Class.dualiaWeapon_quadral = {
	PARENT: "genericTank",
	LABEL: "Quadral",
	GUNS: [
		{
			POSITION: dualia.gun(0.7,0.25,1,0,-0.75,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
				TYPE: "bullet"
			}
		},
		{
			POSITION: dualia.gun(0.7,0.25,1,0,0.75,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
				TYPE: "bullet"
			}
		},
		{
			POSITION: dualia.gun(0.9,0.25,1,0,-0.5,0,0.5),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
				TYPE: "bullet"
			}
		},
		{
			POSITION: dualia.gun(0.9,0.25,1,0,0.5,0,0.5),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
				TYPE: "bullet"
			}
		},
	]
}
// Traps
Class.dualiaWeapon_trapper = {
	PARENT: "genericTank",
	LABEL: "Trapper",
	GUNS: [
		{
			POSITION: dualia.gun(0.75,0.4,1,0,0,0,0),
		},
		{
			POSITION: dualia.gun(0.15,0.4,1.4,0.75,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap]),
				TYPE: "trap"
			}
		}
	]
}
//// Tier 1 Traps
Class.dualiaWeapon_Unnamed2 = {
	PARENT: "genericTank",
	LABEL: "Unnamed2",
	GUNS: [
		{
			POSITION: dualia.gun(0.75,0.4,1,0,0,0,0),
		},
		{
			POSITION: dualia.gun(0.15,0.4,1.4,0.75,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap]),
				TYPE: "trap"
			}
		}
	]
}
Class.dualiaWeapon_arsenal = {
	PARENT: "genericTank",
	LABEL: "Arsenal",
	GUNS: [
		{
			POSITION: dualia.gun(0.75,0.4,1,0,0,0,0),
		},
		{
			POSITION: dualia.gun(0.15,0.4,1.4,0.75,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap]),
				TYPE: "dualiaProjectile_trapbox",
				MAX_CHILDREN: 4
			}
		},
		{
			POSITION: dualia.gun(0.3,0.6,-1.1,0.25,0,0,0),
		},
	]
}
Class.dualiaWeapon_caltrop = {
	PARENT: "genericTank",
	LABEL: "Caltrop",
	GUNS: [
		{
			POSITION: dualia.gun(0.75,0.4,1,0,0,0,0),
		},
		{
			POSITION: dualia.gun(0.15,0.4,1.4,0.75,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap]),
				TYPE: "trap"
			}
		},
		{
			POSITION: dualia.gun(0.3,0.4,1.3,0.35,0,180,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.drone]),
				TYPE: "drone",
				MAX_CHILDREN: 4
			}
		}
	]
}
// Drones
Class.dualiaWeapon_hangar = {
	PARENT: "genericTank",
	LABEL: "Hangar",
	GUNS: [
		{
			POSITION: dualia.gun(0.3,0.4,1.3,0.35,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.drone]),
				TYPE: "drone",
				MAX_CHILDREN: 4
			}
		}
	]
}
//// Tier 1 Drones
Class.dualiaWeapon_overseer = {
	PARENT: "genericTank",
	LABEL: "Overseer",
	GUNS: [
		{
			POSITION: dualia.gun(0.3,0.4,1.3,0.35,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.drone]),
				TYPE: "drone",
				MAX_CHILDREN: 4
			}
		},
		{
			POSITION: dualia.gun(0.3,0.4,1.3,0.35,0,180,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.drone]),
				TYPE: "drone",
				MAX_CHILDREN: 4
			}
		},
	]
}
Class.dualiaWeapon_director = {
	PARENT: "genericTank",
	LABEL: "Director",
	GUNS: [
		{
			POSITION: dualia.gun(0.3,0.55,1.3,0.35,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.drone, g.pounder]),
				TYPE: "drone",
				MAX_CHILDREN: 3
			}
		}
	]
}
//// Tier 2 Drones
Class.dualiaWeapon_chief = {
	PARENT: "genericTank",
	LABEL: "Chief",
	GUNS: [
		{
			POSITION: dualia.gun(0.4,0.75,1.3,0.35,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.drone, g.pounder, g.destroyer]),
				TYPE: "drone",
				MAX_CHILDREN: 2
			}
		}
	]
}
//// Tier 3 Drones
Class.dualiaWeapon_executioner = {
	PARENT: "genericTank",
	LABEL: "Executioner",
	GUNS: [
		{
			POSITION: dualia.gun(0.45,1,1.3,0.35,0,0,0),
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.drone, g.pounder, g.destroyer, g.annihilator]),
				TYPE: "drone",
				MAX_CHILDREN: 1
			}
		}
	]
}
