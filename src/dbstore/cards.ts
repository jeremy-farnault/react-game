import { Faction, ICard, ICardAssets, ICards } from '../core/models';
import { cardsIds } from './cardsIds';
import { heroesIds } from './heroesIds';

export const cards: ICards = {
  [cardsIds.aragorn]: {
    id: cardsIds.aragorn,
    cost: 5,
    effect: 'Reduce your threat to your starting threat level.',
    description: 'Sentinel',
    assets: {
      miniaturePath: require('../assets/cardsSmall/aragorn_small.png'),
      normalPath: require('../assets/cardsBig/aragorn_big.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [heroesIds.aragorn],
    available: 1,
    limitedTo: 1
  } as ICard,
  [cardsIds.arwen]: {
    id: cardsIds.arwen,
    cost: 3,
    effect: 'Discard a card.',
    description: 'Noble',
    assets: {
      normalPath: require('../assets/cardsBig/arwen_big.png'),
      miniaturePath: require('../assets/cardsSmall/arwen_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [heroesIds.arwen],
    available: 2,
    limitedTo: 10
  } as ICard,
  [cardsIds.barlimanButterbur]: {
    id: cardsIds.barlimanButterbur,
    cost: 3,
    effect: 'Damage may be assigned to Barliman.',
    description: 'Hobbit',
    assets: {
      normalPath: require('../assets/cardsBig/barlimanbutterbur_big.png'),
      miniaturePath: require('../assets/cardsSmall/barlimanbutterbur_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [],
    available: 3,
    limitedTo: 10
  } as ICard,
  [cardsIds.beregond]: {
    id: cardsIds.beregond,
    cost: 4,
    effect: 'Lower the cost of weapons by 2.',
    description: 'Gondor',
    assets: {
      normalPath: require('../assets/cardsBig/beregond_big.png'),
      miniaturePath: require('../assets/cardsSmall/beregond_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.bilbo]: {
    id: cardsIds.bilbo,
    cost: 3,
    effect: 'The first player gains control of Bilbo.',
    description: 'Hobbit',
    assets: {
      normalPath: require('../assets/cardsBig/bilbo_big.png'),
      miniaturePath: require('../assets/cardsSmall/bilbo_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 4,
    limitedTo: 10
  } as ICard,
  [cardsIds.billFerny]: {
    id: cardsIds.billFerny,
    cost: 5,
    effect: 'Raise threat by 1 for each non hero.',
    description: 'Bree',
    assets: {
      normalPath: require('../assets/cardsBig/billferny_big.png'),
      miniaturePath: require('../assets/cardsSmall/billferny_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.billThePony]: {
    id: cardsIds.billThePony,
    cost: 2,
    effect: 'Each hobbit gets +1 hit point.',
    description: 'Pony',
    assets: {
      normalPath: require('../assets/cardsBig/billpony_big.png'),
      miniaturePath: require('../assets/cardsSmall/billpony_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [],
    available: 2,
    limitedTo: 10
  } as ICard,
  [cardsIds.boromir]: {
    id: cardsIds.boromir,
    cost: 5,
    effect: 'Gondor allies get +1 hit point.',
    description: 'Warrior',
    assets: {
      normalPath: require('../assets/cardsBig/boromir_big.png'),
      miniaturePath: require('../assets/cardsSmall/boromir_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 3,
    limitedTo: 2
  } as ICard,
  [cardsIds.captainOfHarad]: {
    id: cardsIds.captainOfHarad,
    cost: 5,
    effect: 'Each Harad enemy gets +1 hit points.',
    description: 'Harad',
    assets: {
      normalPath: require('../assets/cardsBig/haradcaptain_big.png'),
      miniaturePath: require('../assets/cardsSmall/haradcaptain_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.caveTroll]: {
    id: cardsIds.caveTroll,
    cost: 7,
    effect: 'You must damage another character you control.',
    description: 'Troll',
    assets: {
      normalPath: require('../assets/cardsBig/cavetroll_big.png'),
      miniaturePath: require('../assets/cardsSmall/cavetroll_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 1,
    limitedTo: 1
  } as ICard,
  [cardsIds.celeborn]: {
    id: cardsIds.celeborn,
    cost: 4,
    effect: 'Gets +1 hit point for each Sylvan ally.',
    description: 'Silvan',
    assets: {
      normalPath: require('../assets/cardsBig/celeborn_big.png'),
      miniaturePath: require('../assets/cardsSmall/celeborn_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 2
  } as ICard,
  [cardsIds.crebain]: {
    id: cardsIds.crebain,
    cost: 3,
    effect: 'Encounter card effects cannot be canceled.',
    description: 'Creature',
    assets: {
      normalPath: require('../assets/cardsBig/crebain_big.png'),
      miniaturePath: require('../assets/cardsSmall/crebain_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.deadLord]: {
    id: cardsIds.deadLord,
    cost: 3,
    effect: 'Put an Undead card in your hand.',
    description: 'Undead',
    assets: {
      normalPath: require('../assets/cardsBig/deadlord_big.png'),
      miniaturePath: require('../assets/cardsSmall/deadlord_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 1
  } as ICard,
  [cardsIds.denethor]: {
    id: cardsIds.denethor,
    cost: 3,
    effect: 'Add 2 resources to your pool.',
    description: 'Steward',
    assets: {
      normalPath: require('../assets/cardsBig/denethor_big.png'),
      miniaturePath: require('../assets/cardsSmall/denethor_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 1
  } as ICard,
  [cardsIds.dunhere]: {
    id: cardsIds.dunhere,
    cost: 4,
    effect: 'Can target enemies in the staging area.',
    description: 'Rohan',
    assets: {
      normalPath: require('../assets/cardsBig/dunhere_big.png'),
      miniaturePath: require('../assets/cardsSmall/dunhere_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.durinsBane]: {
    id: cardsIds.durinsBane,
    cost: 27,
    effect: 'Regenerate. Indestructible.',
    description: 'Balrog',
    assets: {
      normalPath: require('../assets/cardsBig/durinsbane_big.png'),
      miniaturePath: require('../assets/cardsSmall/durinsbane_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 1
  } as ICard,
  [cardsIds.eagles]: {
    id: cardsIds.eagles,
    cost: 4,
    effect: 'Gets +1 hit point for each weapon.',
    description: 'Eagle',
    assets: {
      normalPath: require('../assets/cardsBig/eagles_big.png'),
      miniaturePath: require('../assets/cardsSmall/eagles_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [],
    available: 1,
    limitedTo: 3
  } as ICard,
  [cardsIds.elfhelm]: {
    id: cardsIds.elfhelm,
    cost: 4,
    effect: 'Each hero gets +1 life point.',
    description: 'Scout',
    assets: {
      normalPath: require('../assets/cardsBig/elfhelm_big.png'),
      miniaturePath: require('../assets/cardsSmall/elfhelm_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.elladan]: {
    id: cardsIds.elladan,
    cost: 4,
    effect: 'Pay 1 resource from your pool.',
    description: 'Noldor',
    assets: {
      normalPath: require('../assets/cardsBig/elladan_big.png'),
      miniaturePath: require('../assets/cardsSmall/elladan_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 1
  } as ICard,
  [cardsIds.elrohir]: {
    id: cardsIds.elrohir,
    cost: 4,
    effect: 'While Elladan is in play, Elrohir gets +2 hit points.',
    description: 'Noldor',
    assets: {
      normalPath: require('../assets/cardsBig/elrohir_big.png'),
      miniaturePath: require('../assets/cardsSmall/elrohir_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 1
  } as ICard,
  [cardsIds.elrond]: {
    id: cardsIds.elrond,
    cost: 4,
    effect: 'Spend resources from Elrond\'s pool for allies.',
    description: 'Noldor',
    assets: {
      normalPath: require('../assets/cardsBig/elrond_big.png'),
      miniaturePath: require('../assets/cardsSmall/elrond_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 1
  } as ICard,
  [cardsIds.eomer]: {
    id: cardsIds.eomer,
    cost: 4,
    effect: 'If an allie dies, Eomer gets +2 life points.',
    description: 'Rohan',
    assets: {
      normalPath: require('../assets/cardsBig/eomer_big.png'),
      miniaturePath: require('../assets/cardsSmall/eomer_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 3
  } as ICard,
  [cardsIds.eowyn]: {
    id: cardsIds.eowyn,
    cost: 3,
    effect: 'Discard 1 card from your hand.',
    description: 'Rohan',
    assets: {
      normalPath: require('../assets/cardsBig/eowyn_big.png'),
      miniaturePath: require('../assets/cardsSmall/eowyn_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.erkenbrand]: {
    id: cardsIds.erkenbrand,
    cost: 4,
    effect: 'If Erkenbrand is defending he gets +1 hit point.',
    description: 'Rohan',
    assets: {
      normalPath: require('../assets/cardsBig/erkenbrand_big.png'),
      miniaturePath: require('../assets/cardsSmall/erkenbrand_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [],
    available: 4,
    limitedTo: 10
  } as ICard,
  [cardsIds.faramir]: {
    id: cardsIds.faramir,
    cost: 5,
    effect: 'Ready an ally you control.',
    description: 'Ranger',
    assets: {
      normalPath: require('../assets/cardsBig/faramir_big.png'),
      miniaturePath: require('../assets/cardsSmall/faramir_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.farmerMaggot]: {
    id: cardsIds.farmerMaggot,
    cost: 2,
    effect: 'Deal 1 damage to an enemy engaged with you.',
    description: 'Hobbit',
    assets: {
      normalPath: require('../assets/cardsBig/maggot_big.png'),
      miniaturePath: require('../assets/cardsSmall/maggot_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [],
    available: 2,
    limitedTo: 10
  } as ICard,
  [cardsIds.fellRider]: {
    id: cardsIds.fellRider,
    cost: 6,
    effect: 'Cannot have non-Morgul attachments.',
    description: 'Nazgul',
    assets: {
      normalPath: require('../assets/cardsBig/fellrider_big.png'),
      miniaturePath: require('../assets/cardsSmall/fellrider_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.frodo]: {
    id: cardsIds.frodo,
    cost: 2,
    effect: 'Exhaust the One Ring and spend 1 resource.',
    description: 'Hobbit',
    assets: {
      normalPath: require('../assets/cardsBig/frodo_big.png'),
      miniaturePath: require('../assets/cardsSmall/frodo_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 10
  } as ICard,
  [cardsIds.galadriel]: {
    id: cardsIds.galadriel,
    cost: 4,
    effect: 'Galadriel cannot attack or defend.',
    description: 'Noldor',
    assets: {
      normalPath: require('../assets/cardsBig/galadriel_big.png'),
      miniaturePath: require('../assets/cardsSmall/galadriel_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 2
  } as ICard,
  [cardsIds.gandalf]: {
    id: cardsIds.gandalf,
    cost: 5,
    effect: 'Play with the top card of your deck face up.',
    description: 'Istari',
    assets: {
      normalPath: require('../assets/cardsBig/gandalf_big.png'),
      miniaturePath: require('../assets/cardsSmall/gandalf_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 1
  } as ICard,
  [cardsIds.gimli]: {
    id: cardsIds.gimli,
    cost: 5,
    effect: 'Gets +1 hit points for each damage he takes.',
    description: 'Dwarf',
    assets: {
      normalPath: require('../assets/cardsBig/gimli_big.png'),
      miniaturePath: require('../assets/cardsSmall/gimli_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 10
  } as ICard,
  [cardsIds.glorfindel]: {
    id: cardsIds.glorfindel,
    cost: 5,
    effect: 'Raise threat by 1.',
    description: 'Noldor',
    assets: {
      normalPath: require('../assets/cardsBig/glorfindel_big.png'),
      miniaturePath: require('../assets/cardsSmall/glorfindel_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 2
  } as ICard,
  [cardsIds.gollum]: {
    id: cardsIds.gollum,
    cost: 5,
    effect: 'Gollum attacks Bilbo Baggins.',
    description: 'Gollum',
    assets: {
      normalPath: require('../assets/cardsBig/gollum_big.png'),
      miniaturePath: require('../assets/cardsSmall/gollum_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 3,
    limitedTo: 1
  } as ICard,
  [cardsIds.grima]: {
    id: cardsIds.grima,
    cost: 3,
    effect: 'Lower the cost of the next card you play by 1.',
    description: 'Isengard',
    assets: {
      normalPath: require('../assets/cardsBig/grima_big.png'),
      miniaturePath: require('../assets/cardsSmall/grima_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 10
  } as ICard,
  [cardsIds.grishnakh]: {
    id: cardsIds.grishnakh,
    cost: 5,
    effect: 'Place a Captive underneath Isengard.',
    description: 'Orc',
    assets: {
      normalPath: require('../assets/cardsBig/grishnakh_big.png'),
      miniaturePath: require('../assets/cardsSmall/grishnakh_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 3
  } as ICard,
  [cardsIds.guardOfTheCitadel]: {
    id: cardsIds.guardOfTheCitadel,
    cost: 2,
    effect: 'Gets +2 life points.',
    description: 'Gondor',
    assets: {
      normalPath: require('../assets/cardsBig/citadelguard_big.png'),
      miniaturePath: require('../assets/cardsSmall/citadelguard_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [],
    available: 2,
    limitedTo: 10
  } as ICard,
  [cardsIds.haldir]: {
    id: cardsIds.haldir,
    cost: 3,
    effect: 'Resolves attacks against an ennemy not engaged.',
    description: 'Ranger',
    assets: {
      normalPath: require('../assets/cardsBig/haldir_big.png'),
      miniaturePath: require('../assets/cardsSmall/haldir_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [],
    available: 2,
    limitedTo: 10
  } as ICard,
  [cardsIds.hama]: {
    id: cardsIds.hama,
    cost: 4,
    effect: 'Return an event from your discard pile.',
    description: 'Rohan',
    assets: {
      normalPath: require('../assets/cardsBig/hama_big.png'),
      miniaturePath: require('../assets/cardsSmall/hama_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.haradrimElite]: {
    id: cardsIds.haradrimElite,
    cost: 3,
    effect: 'Makes an immediate attck from the staging area.',
    description: 'Harad',
    assets: {
      normalPath: require('../assets/cardsBig/haradrimelite_big.png'),
      miniaturePath: require('../assets/cardsSmall/haradrimelite_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 3,
    limitedTo: 10
  } as ICard,
  [cardsIds.haradrimSoldier]: {
    id: cardsIds.haradrimSoldier,
    cost: 4,
    effect: 'Makes an immadiate attack after engaging you.',
    description: 'Harad',
    assets: {
      normalPath: require('../assets/cardsBig/haradrimsoldier_big.png'),
      miniaturePath: require('../assets/cardsSmall/haradrimsoldier_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 3,
    limitedTo: 3
  } as ICard,
  [cardsIds.hillTroll]: {
    id: cardsIds.hillTroll,
    cost: 9,
    effect: 'Excess damage must be assigned as an increase of threat.',
    description: 'Troll',
    assets: {
      normalPath: require('../assets/cardsBig/hilltroll_big.png'),
      miniaturePath: require('../assets/cardsSmall/hilltroll_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 1,
    limitedTo: 1
  } as ICard,
  [cardsIds.imrahil]: {
    id: cardsIds.imrahil,
    cost: 4,
    effect: 'After a character dies, Imrahil gets ready.',
    description: 'Gondor',
    assets: {
      normalPath: require('../assets/cardsBig/imrahil_big.png'),
      miniaturePath: require('../assets/cardsSmall/imrahil_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.isengardOrc]: {
    id: cardsIds.isengardOrc,
    cost: 3,
    effect: 'Discard a random card or reveal an encounter card.',
    description: 'Orc',
    assets: {
      normalPath: require('../assets/cardsBig/isengardorc_big.png'),
      miniaturePath: require('../assets/cardsSmall/isengardorc_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 4,
    limitedTo: 10
  } as ICard,
  [cardsIds.isengardUruk]: {
    id: cardsIds.isengardUruk,
    cost: 4,
    effect: 'Archery. Assign 3 damage among characters you control.',
    description: 'Uruk-hai',
    assets: {
      normalPath: require('../assets/cardsBig/isengarduruk_big.png'),
      miniaturePath: require('../assets/cardsSmall/isengarduruk_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 3
  } as ICard,
  [cardsIds.knightsOfTheSwan]: {
    id: cardsIds.knightsOfTheSwan,
    cost: 1,
    effect: 'Each Outlands character gets +1 hit points.',
    description: 'Outlands',
    assets: {
      normalPath: require('../assets/cardsBig/swanknignts_big.png'),
      miniaturePath: require('../assets/cardsSmall/swanknights_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [],
    available: 2,
    limitedTo: 10
  } as ICard,
  [cardsIds.landroval]: {
    id: cardsIds.landroval,
    cost: 4,
    effect: 'Landroval cannot have restricted attachments.',
    description: 'Eagle',
    assets: {
      normalPath: require('../assets/cardsBig/landroval_big.png'),
      miniaturePath: require('../assets/cardsSmall/landroval_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 2
  } as ICard,
  [cardsIds.legolas]: {
    id: cardsIds.legolas,
    cost: 4,
    effect: 'Ranged. Place 2 progress tokens on the current quest.',
    description: 'Sylvan',
    assets: {
      normalPath: require('../assets/cardsBig/legolas_big.png'),
      miniaturePath: require('../assets/cardsSmall/legolas_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 1
  } as ICard,
  [cardsIds.lieutenantOfMordor]: {
    id: cardsIds.lieutenantOfMordor,
    cost: 5,
    effect: 'Allies cannot defend against Lieutenant of Mordor.',
    description: 'Mordor',
    assets: {
      normalPath: require('../assets/cardsBig/mordorlieutenant_big.png'),
      miniaturePath: require('../assets/cardsSmall/mordorlieutenant_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 2
  } as ICard,
  [cardsIds.lieutenantOfOrthanc]: {
    id: cardsIds.lieutenantOfOrthanc,
    cost: 5,
    effect: 'Enemy discards a card if a character dies.',
    description: 'Isengard',
    assets: {
      normalPath: require('../assets/cardsBig/orthanclieutenant_big.png'),
      miniaturePath: require('../assets/cardsSmall/orthanclieutenant_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 10
  } as ICard,
  [cardsIds.mablung]: {
    id: cardsIds.mablung,
    cost: 4,
    effect: 'Add 1 resource to Mablung\'s resource pool.',
    description: 'Ranger',
    assets: {
      normalPath: require('../assets/cardsBig/mablung_big.png'),
      miniaturePath: require('../assets/cardsSmall/mablung_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.merry]: {
    id: cardsIds.merry,
    cost: 2,
    effect: 'Exhaust Merry to reduce your threat.',
    description: 'Hobbit',
    assets: {
      normalPath: require('../assets/cardsBig/merry_big.png'),
      miniaturePath: require('../assets/cardsSmall/merry_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 3,
    limitedTo: 10
  } as ICard,
  [cardsIds.morgulOrc]: {
    id: cardsIds.morgulOrc,
    cost: 3,
    effect: 'Discard 1 random card from your hand.',
    description: 'Orc',
    assets: {
      normalPath: require('../assets/cardsBig/morgulorc_big.png'),
      miniaturePath: require('../assets/cardsSmall/morgulorc_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 2,
    limitedTo: 3
  } as ICard,
  [cardsIds.mumak]: {
    id: cardsIds.mumak,
    cost: 12,
    effect: 'No attachments can be attached to Mumak.',
    description: 'Harad',
    assets: {
      normalPath: require('../assets/cardsBig/mumak_big.png'),
      miniaturePath: require('../assets/cardsSmall/mumak_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 1
  } as ICard,
  [cardsIds.nazgulOfDolGuldur]: {
    id: cardsIds.nazgulOfDolGuldur,
    cost: 9,
    effect: 'Move Nazgul of Dol Guldur into the staging area.',
    description: 'Nazgul',
    assets: {
      normalPath: require('../assets/cardsBig/nazguldolguldur_big.png'),
      miniaturePath: require('../assets/cardsSmall/nazguldolguldur_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 2
  } as ICard,
  [cardsIds.orcAmbusher]: {
    id: cardsIds.orcAmbusher,
    cost: 3,
    effect: 'Discard 1 non-objective ally you control.',
    description: 'Orc',
    assets: {
      normalPath: require('../assets/cardsBig/orcambusher_big.png'),
      miniaturePath: require('../assets/cardsSmall/orcambusher_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 3,
    limitedTo: 10
  } as ICard,
  [cardsIds.orcRaiders]: {
    id: cardsIds.orcRaiders,
    cost: 3,
    effect: 'Player discards 2 attachments he controls.',
    description: 'Nazgul',
    assets: {
      normalPath: require('../assets/cardsBig/orcraiders_big.png'),
      miniaturePath: require('../assets/cardsSmall/orcraiders_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.pippin]: {
    id: cardsIds.pippin,
    cost: 2,
    effect: 'Raise your threat by 3 and returns it to the staging area.',
    description: 'Hobbit',
    assets: {
      normalPath: require('../assets/cardsBig/pippin_big.png'),
      miniaturePath: require('../assets/cardsSmall/pippin_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.radagast]: {
    id: cardsIds.radagast,
    cost: 3,
    effect: 'Collects 1 resource each resource phase.',
    description: 'Istari',
    assets: {
      normalPath: require('../assets/cardsBig/radagast_big.png'),
      miniaturePath: require('../assets/cardsSmall/radagast_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 2
  } as ICard,
  [cardsIds.restlessDead]: {
    id: cardsIds.restlessDead,
    cost: 2,
    effect: 'Return card to the staging area.',
    description: 'Undead',
    assets: {
      normalPath: require('../assets/cardsBig/restlessdead_big.png'),
      miniaturePath: require('../assets/cardsSmall/restlessdead_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.riderOfTheMark]: {
    id: cardsIds.riderOfTheMark,
    cost: 2,
    effect: 'Give control of Rider of the Mark to another player.',
    description: 'Rohan',
    assets: {
      normalPath: require('../assets/cardsBig/riderofthemark_big.png'),
      miniaturePath: require('../assets/cardsSmall/riderofthemark_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: [],
    available: 2,
    limitedTo: 10
  } as ICard,
  [cardsIds.ringwraith]: {
    id: cardsIds.ringwraith,
    cost: 5,
    effect: 'Deals an additionnal damage.',
    description: 'Nazgul',
    assets: {
      normalPath: require('../assets/cardsBig/ringwraith_big.png'),
      miniaturePath: require('../assets/cardsSmall/ringwraith_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 9
  } as ICard,
  [cardsIds.saruman]: {
    id: cardsIds.saruman,
    cost: 6,
    effect: 'Indestructible. Immune to player card effects.',
    description: 'Istari',
    assets: {
      normalPath: require('../assets/cardsBig/saruman_big.png'),
      miniaturePath: require('../assets/cardsSmall/saruman_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 1
  } as ICard,
  [cardsIds.shadowHostCaptain]: {
    id: cardsIds.shadowHostCaptain,
    cost: 6,
    effect: 'Gets +2 hit points and +2 life points.',
    description: 'Undead',
    assets: {
      normalPath: require('../assets/cardsBig/shadowhostcaptain_big.png'),
      miniaturePath: require('../assets/cardsSmall/shadowhostcaptain_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 2,
    limitedTo: 2
  } as ICard,
  [cardsIds.soldierOfIsengard]: {
    id: cardsIds.soldierOfIsengard,
    cost: 4,
    effect: 'Toughness. Archery. Place 1 progress on current quest.',
    description: 'Uruk-hai',
    assets: {
      normalPath: require('../assets/cardsBig/isengardsoldier_big.png'),
      miniaturePath: require('../assets/cardsSmall/isengardsoldier_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.southronCommander]: {
    id: cardsIds.southronCommander,
    cost: 6,
    effect: 'Southron Commander makes an immediate attack.',
    description: 'Harad',
    assets: {
      normalPath: require('../assets/cardsBig/southroncommander_big.png'),
      miniaturePath: require('../assets/cardsSmall/southroncommander_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 2
  } as ICard,
  [cardsIds.southronCompany]: {
    id: cardsIds.southronCompany,
    cost: 5,
    effect: 'Gets +2 life points and +2 hit points.',
    description: 'Harad',
    assets: {
      normalPath: require('../assets/cardsBig/southroncompany_big.png'),
      miniaturePath: require('../assets/cardsSmall/southroncompany_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.southronMercenary]: {
    id: cardsIds.southronMercenary,
    cost: 4,
    effect: 'Archery X. X is the number of players.',
    description: 'Harad',
    assets: {
      normalPath: require('../assets/cardsBig/southronmercenary_big.png'),
      miniaturePath: require('../assets/cardsSmall/southronmercenary_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 4
  } as ICard,
  [cardsIds.theoden]: {
    id: cardsIds.theoden,
    cost: 4,
    effect: 'Each hero gets +1 hit point.',
    description: 'Rohan',
    assets: {
      normalPath: require('../assets/cardsBig/theoden_big.png'),
      miniaturePath: require('../assets/cardsSmall/theoden_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 2
  } as ICard,
  [cardsIds.theodred]: {
    id: cardsIds.theodred,
    cost: 4,
    effect: 'Add 1 resource to a hero pool.',
    description: 'Rohan',
    assets: {
      normalPath: require('../assets/cardsBig/theodred_big.png'),
      miniaturePath: require('../assets/cardsSmall/theodred_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 3
  } as ICard,
  [cardsIds.treebeard]: {
    id: cardsIds.treebeard,
    cost: 5,
    effect: 'Cannot have restricted attachments.',
    description: 'Ent',
    assets: {
      normalPath: require('../assets/cardsBig/treebeard_big.png'),
      miniaturePath: require('../assets/cardsSmall/treebeard_small.png')
    } as ICardAssets,
    faction: Faction.good,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 2
  } as ICard,
  [cardsIds.ugluk]: {
    id: cardsIds.ugluk,
    cost: 6,
    effect: 'Toughness 3. Cannot have attachments.',
    description: 'Uruk-hai',
    assets: {
      normalPath: require('../assets/cardsBig/ugluk_big.png'),
      miniaturePath: require('../assets/cardsSmall/ugluk_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 1
  } as ICard,
  [cardsIds.ugluksUrukHai]: {
    id: cardsIds.ugluksUrukHai,
    cost: 5,
    effect: 'Peril. Toughness 1. Archery 1.',
    description: 'Uruk-hai',
    assets: {
      normalPath: require('../assets/cardsBig/ugluksurukhai_big.png'),
      miniaturePath: require('../assets/cardsSmall/ugluksurukhai_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 3
  } as ICard,
  [cardsIds.umbarAssassin]: {
    id: cardsIds.umbarAssassin,
    cost: 5,
    effect: 'Archery 2. Player must deal 3 damage to a hero.',
    description: 'Brigand',
    assets: {
      normalPath: require('../assets/cardsBig/umbarassassin_big.png'),
      miniaturePath: require('../assets/cardsSmall/umbarassassin_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 10
  } as ICard,
  [cardsIds.umbarCaptain]: {
    id: cardsIds.umbarCaptain,
    cost: 5,
    effect: 'Characters you control cannot attack Ship ennemies.',
    description: 'Corsair',
    assets: {
      normalPath: require('../assets/cardsBig/umbarcaptain_big.png'),
      miniaturePath: require('../assets/cardsSmall/umbarcaptain_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 2
  } as ICard,
  [cardsIds.umbarRaider]: {
    id: cardsIds.umbarRaider,
    cost: 4,
    effect: 'Gets +1 hit points for each resource on it.',
    description: 'Corsair',
    assets: {
      normalPath: require('../assets/cardsBig/umbarraider_big.png'),
      miniaturePath: require('../assets/cardsSmall/umbarraider_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 1,
    limitedTo: 2
  } as ICard,
  [cardsIds.urukHaiFighter]: {
    id: cardsIds.urukHaiFighter,
    cost: 3,
    effect: 'Toughness 2. Returns it to the staging area.',
    description: 'Uruk-hai',
    assets: {
      normalPath: require('../assets/cardsBig/urukhaifighter_big.png'),
      miniaturePath: require('../assets/cardsSmall/urukhaifighter_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 3,
    limitedTo: 10
  } as ICard,
  [cardsIds.urukLieutenant]: {
    id: cardsIds.urukLieutenant,
    cost: 3,
    effect: 'Add an Orc ennemy to the staging area.',
    description: 'Uruk',
    assets: {
      normalPath: require('../assets/cardsBig/uruklieutenant_big.png'),
      miniaturePath: require('../assets/cardsSmall/uruklieutenant_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 10
  } as ICard,
  [cardsIds.urukSoldier]: {
    id: cardsIds.urukSoldier,
    cost: 2,
    effect: 'Destroys a character.',
    description: 'Uruk-hai',
    assets: {
      normalPath: require('../assets/cardsBig/uruksoldier_big.png'),
      miniaturePath: require('../assets/cardsSmall/uruksoldier_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 2,
    limitedTo: 2
  } as ICard,
  [cardsIds.wargs]: {
    id: cardsIds.wargs,
    cost: 3,
    effect: 'Return Wargs to the staging area after it attacks.',
    description: 'Creature',
    assets: {
      normalPath: require('../assets/cardsBig/wargs_big.png'),
      miniaturePath: require('../assets/cardsSmall/wargs_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: [],
    available: 3,
    limitedTo: 10
  } as ICard,
  [cardsIds.witchKing]: {
    id: cardsIds.witchKing,
    cost: 11,
    effect: 'Player cannot play attachments on the Witch-King.',
    description: 'Nazgul',
    assets: {
      normalPath: require('../assets/cardsBig/witchking_big.png'),
      miniaturePath: require('../assets/cardsSmall/witchking_small.png')
    } as ICardAssets,
    faction: Faction.evil,
    linkedTo: ['Hero X', 'Hero Y'],
    available: 1,
    limitedTo: 1
  } as ICard
};

