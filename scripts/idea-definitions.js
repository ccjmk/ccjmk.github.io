/*Idea Definitions:
Ideas are defined here for use in the code; for each idea, the following values are included:

* id: a unique identifier, formed by the idea group (adm/dip/mil), followed by a sequential integer.
	If new ideas are to be added, they'll have the biggest integers regardless of where they are shown ingame.
* name: 	the name displayed in-game in english.
* description:  the description shown ingame; will be used for a floating tooltip in the future.
* group: the group this idea belongs to AKA the type of monarch point that takes to learn this idea. It's used to calculate the % of ideas in each group.
* valuePerLevel: if the idea has a flat value (like giving +1 of something), that value is shown here with an float. Negative values are acceptable.
	If the idea grants a percentage bonus, this should be "null".
* percentagePerLevel: if the idea has a percentage value (like giving +12.5% of something), that value is shown here with an float. Negative values are acceptable.
	If the idea grants a flat bonus, this should be "null".
* cost1, cost2, cost3, cost4: the base cost in monarch points for each level of the idea. If the idea has fewer than 4 levels, all unused values should be set to "null".

*/

var costModifierByOrder = [
	2,		//Tradition 1
	2,		//Tradition 2
	2,		//Idea 1
	1.8,	//Idea 2
	1.6,	//Idea 3
	1.4,	//Idea 4
	1.2,	//Idea 5
	1,		//Idea 6
	1,		//Idea 7
	1 		//Ambition
];

function compare(a,b) {
  if (a.name < b.name)
    return -1;
  else if (a.name > b.name)
    return 1;
  else 
    return 0;
}

var IdeasArray = [];

var AdmIdeasArray = [
//Administrative Ideas
	{
		id:"adm1",
		name:"National Tax Modifier",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"adm2",
		name:"Production Efficiency",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"adm3",
		name:"National Unrest",
		description:"tbd",
		group:"adm",
		valuePerLevel:-0.5,
		percentagePerLevel:null,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"adm4",
		name:"Stability Cost Modifier",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"adm5",
		name:"Missionaries",
		description:"tbd",
		group:"adm",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:15, cost2:50, cost3:null, cost4:null
	},
	{
		id:"adm6",
		name:"Yearly Inflation Reduction",
		description:"tbd",
		group:"adm",
		valuePerLevel:-0.05,
		percentagePerLevel:null,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"adm7",
		name:"Reduce Inflation Cost",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"adm8",
		name:"Interest per annum",
		description:"tbd",
		group:"adm",
		valuePerLevel:-1,
		percentagePerLevel:null,
		cost1:5, cost2:30, cost3:null, cost4:null
	},
	{
		id:"adm9",
		name:"Build Cost",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"adm10",
		name:"Development Cost",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:-10,
		cost1:5, cost2:30, cost3:null, cost4:null
	},
	{
		id:"adm11",
		name:"Missionary Strength",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:0.5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"adm12",
		name:"Yearly Prestige",
		description:"tbd",
		group:"adm",
		valuePerLevel:0.5,
		percentagePerLevel:null,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"adm13",
		name:"Prestige Decay",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:-0.5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"adm14",
		name:"Yearly Legitimacy",
		description:"tbd",
		group:"adm",
		valuePerLevel:0.5,
		percentagePerLevel:null,
		cost1:0, cost2:15, cost3:null, cost4:null
	},
	{
		id:"adm15",
		name:"Yearly Horde Unity",
		description:"tbd",
		group:"adm",
		valuePerLevel:0.5,
		percentagePerLevel:null,
		cost1:0, cost2:15, cost3:null, cost4:null
	},
	{
		id:"adm16",
		name:"Yearly Devotion",
		description:"tbd",
		group:"adm",
		valuePerLevel:0.5,
		percentagePerLevel:null,
		cost1:0, cost2:15, cost3:null, cost4:null
	},
	{
		id:"adm17",
		name:"Yearly Republican Tradition",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:0.5,
		cost1:30, cost2:140, cost3:null, cost4:null
	},
	{
		id:"adm18",
		name:"Technology Cost",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:5, cost2:30, cost3:null, cost4:null
	},
	{
		id:"adm19",
		name:"Idea Cost",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:3, cost2:18, cost3:null, cost4:null
	},
	{
		id:"adm20",
		name:"Advisor Costs",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"adm21",
		name:"Possible Advisors",
		description:"tbd",
		group:"adm",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:5, cost2:30, cost3:null, cost4:null
	},
	{
		id:"adm22",
		name:"Tolerance of the True Faith",
		description:"tbd",
		group:"adm",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:3, cost2:18, cost3:null, cost4:null
	},
	{
		id:"adm23",
		name:"Tolerance of Heretics",
		description:"tbd",
		group:"adm",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:3, cost2:18, cost3:null, cost4:null
	},
	{
		id:"adm24",
		name:"Tolerance of Heathens",
		description:"tbd",
		group:"adm",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:3, cost2:18, cost3:null, cost4:null
	},
	{
		id:"adm25",
		name:"Chance of new heir",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:25,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"adm26",
		name:"Hostile Core-Creation Cost on us",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:15,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"adm27",
		name:"Core-Creation Cost",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"adm28",
		name:"Income from Vassals",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"adm29",
		name:"Religious Unity",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"adm30",
		name:"Monthly Autonomy Change",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:5, cost2:30, cost3:null, cost4:null
	},
	{
		id:"adm31",
		name:"Imperial Autority",
		description:"tbd",
		group:"adm",
		valuePerLevel:null,
		percentagePerLevel:10,
		cost1:5, cost2:30, cost3:null, cost4:null
	},
	{
		id:"adm32",
		name:"Years of Separatism",
		description:"tbd",
		group:"adm",
		valuePerLevel:-5,
		percentagePerLevel:null,
		cost1:5, cost2:30, cost3:null, cost4:null
	}
];

var DipIdeasArray = [
//Diplomatic Ideas
	{
		id:"dip1",
		name:"Accepted Culture Threshold",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"dip2",
		name:"Culture Conversion Cost",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip3",
		name:"Morale of Navies",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"dip4",
		name:"Trade Efficiency",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"dip5",
		name:"Global Trade Power",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip6",
		name:"Provincial Trade Power Modifier",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip7",
		name:"Trade Steering",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip8",
		name:"Global Tariffs",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"dip9",
		name:"Diplomatic Reputation",
		description:"tbd",
		group:"dip",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:5, cost2:30, cost3:null, cost4:null
	},
	{
		id:"dip10",
		name:"Diplomatic Relations",
		description:"tbd",
		group:"dip",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:5, cost2:30, cost3:null, cost4:null
	},
	{
		id:"dip11",
		name:"Merchants",
		description:"tbd",
		group:"dip",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:30, cost2:140, cost3:null, cost4:null
	},
	{
		id:"dip12",
		name:"Colonists",
		description:"tbd",
		group:"dip",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:30, cost2:140, cost3:null, cost4:null
	},
	{
		id:"dip13",
		name:"Diplomats",
		description:"tbd",
		group:"dip",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:30, cost2:140, cost3:null, cost4:null
	},
	{
		id:"dip14",
		name:"Naval Maintenance Modifier",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"dip15",
		name:"Naval Force Limit Modifier",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:7.5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"dip16",
		name:"Ship Durability",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"dip17",
		name:"Monthly War Exhaustion",
		description:"tbd",
		group:"dip",
		valuePerLevel:-0.05,
		percentagePerLevel:null,
		cost1:5, cost2:30, cost3:null, cost4:null
	},
	{
		id:"dip18",
		name:"Cost of Reducing War Exhaustion",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip19",
		name:"Yearly Navy Tradition",
		description:"tbd",
		group:"dip",
		valuePerLevel:0.5,
		percentagePerLevel:null,
		cost1:0, cost2:15, cost3:null, cost4:null
	},
	{
		id:"dip20",
		name:"Yearly Navy Tradition Decay",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:-0.5,
		cost1:0, cost2:15, cost3:null, cost4:null
	},
	{
		id:"dip21",
		name:"Naval Leader Fire",
		description:"tbd",
		group:"dip",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:15, cost2:50, cost3:null, cost4:null
	},
	{
		id:"dip22",
		name:"Naval Leader Shock",
		description:"tbd",
		group:"dip",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:15, cost2:50, cost3:null, cost4:null
	},
	{
		id:"dip23",
		name:"Leader Naval Manuever",
		description:"tbd",
		group:"dip",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:15, cost2:50, cost3:null, cost4:null
	},
	{
		id:"dip24",
		name:"Spy Offense",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip25",
		name:"Global Spy Defence",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:10,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip26",
		name:"Global Ship Recruit Speed",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip27",
		name:"Blockade Efficiency",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:10,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip28",
		name:"Embargo Efficiency",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:10,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip29",
		name:"Prestige from Naval battles",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:25,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip30",
		name:"Colonial Range",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:10,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip31",
		name:"Global Settler Increase",
		description:"tbd",
		group:"dip",
		valuePerLevel:5,
		percentagePerLevel:null,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"dip32",
		name:"Aggressive Expansion Impact",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"dip33",
		name:"Privateer Efficiency",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:7.5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip34",
		name:"Diplomatic Annexation Cost",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"dip35",
		name:"Heavy Ship Cost",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"dip36",
		name:"Light Ship Cost",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip37",
		name:"Galley Cost",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip38",
		name:"Transport Cost",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip39",
		name:"Heavy Ship Power",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"dip40",
		name:"Light Ship Power",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"dip41",
		name:"Galley Combat Ability",
		description:"tbd",
		group:"dip",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	}
];

var MilIdeasArray = [
//Military Ideas
	{
		id:"mil1",
		name:"Morale of Armies",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"mil2",
		name:"Discipline",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:2.5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"mil3",
		name:"Land Maintenance Modifier",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"mil4",
		name:"Mercenary Cost",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"mil5",
		name:"Mercenary Maintenance",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"mil6",
		name:"Possible Mercenaries",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:12.5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"mil7",
		name:"Land Force Limit Modifier",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:7.5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"mil8",
		name:"National Manpower Modifier",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:7.5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"mil9",
		name:"Manpower Recovery Speed",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"mil10",
		name:"Reinforce Speed",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:7.5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"mil11",
		name:"Attrition for Enemies",
		description:"tbd",
		group:"mil",
		valuePerLevel:0.5,
		percentagePerLevel:null,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"mil12",
		name:"Yearly Army Tradition",
		description:"tbd",
		group:"mil",
		valuePerLevel:0.5,
		percentagePerLevel:null,
		cost1:0, cost2:15, cost3:null, cost4:null
	},
	{
		id:"mil13",
		name:"Yearly Army Tradition Decay",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:-0.5,
		cost1:0, cost2:15, cost3:null, cost4:null
	},
	{
		id:"mil14",
		name:"Land Leader Fire",
		description:"tbd",
		group:"mil",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:30, cost2:140, cost3:null, cost4:null
	},
	{
		id:"mil15",
		name:"Land Leader Shock",
		description:"tbd",
		group:"mil",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:30, cost2:140, cost3:null, cost4:null
	},
	{
		id:"mil16",
		name:"Land Leader Manuever",
		description:"tbd",
		group:"mil",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:15, cost2:50, cost3:null, cost4:null
	},
	{
		id:"mil16",
		name:"Land Leader Siege",
		description:"tbd",
		group:"mil",
		valuePerLevel:1,
		percentagePerLevel:null,
		cost1:30, cost2:140, cost3:null, cost4:null
	},
	{
		id:"mil17",
		name:"Global Regiment Recruit Speed",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"mil18",
		name:"Prestige from Land battles",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:25,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"mil19",
		name:"Fort Defense",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"mil20",
		name:"Siege Ability",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"mil21",
		name:"Vassal Force Limit Contribution",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:50,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"mil22",
		name:"Infantry Combat Ability",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"mil23",
		name:"Cavalry Combat Ability",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"mil24",
		name:"Artillery Combat Ability",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:5,
		cost1:0, cost2:5, cost3:15, cost4:30
	},
	{
		id:"mil25",
		name:"Infantry Cost",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"mil26",
		name:"Cavalry Cost",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"mil27",
		name:"Artillery Cost",
		description:"tbd",
		group:"mil",
		valuePerLevel:null,
		percentagePerLevel:-5,
		cost1:0, cost2:3, cost3:9, cost4:18
	},
	{
		id:"mil28",
		name:"May Recrute Female General",
		description:"tbd",
		group:"mil",
		valuePerLevel:"YES",
		percentagePerLevel:null,
		cost1:15, cost2:null, cost3:null, cost4:null
	}
];