import { defineStore } from "pinia";

export type Tier = "Kai" | "Magnakai" | "Grand Master"

export enum Rank {
  Novice = 1,
  Intuite,
  Doan,
  Acolyte,
  Initiate,
  Aspirant,
  Guardian,
  Journeyman,
  Savant
}

export type LearnedDiscipline = {
  name: string
  rank: Rank
  option: string[]
}

export type Discipline = {
  name: string
  description: string
  entry: string
  tier: Tier
  options?: string[]
  upgrades?: string[]
}

export interface IDisciplineStore {
  learnedDisciplines: LearnedDiscipline[]
  availableDisciplines: Discipline[]

  [key: string]: Discipline[] | LearnedDiscipline[]
}

export const useDisciplineStore = defineStore({
  id: 'disciplines',
  state: (): IDisciplineStore => ({
    learnedDisciplines: [],
    availableDisciplines: [
      {
        name: "Animal Kinship",
        description:
          "This skill enables the Kai to communicate with some animals and predict the behavior of others."
          + "In some cases, it can grant a Kai control over an animal's instincts or actions.",
        entry: "Animal Kinship",
        tier: "Kai",
      },
      {
        name: "Camoflage",
        description:
          "This Discipline enables a Kai Lord to blend in with their surroundings."
          + "In the countryside, they are able to hide undetected among trees and rocks, and pass close to an enemy without being seen."
          + "In a town or city, it enables them to blend in amongst the inhabitants, and it can help them to find shelter or a safe hiding place.",
        entry: "Camoflage",
        tier: "Kai",
      },
      {
        name: "Healing",
        description:
          "This Discipline can be used to restore ENDURANCE points lost in combat."
          + "If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section you pass through "
          + "in which you are not involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) "
          + "Be sure to remember that your ENDURANCE score cannot rise above its original level.",
        entry: "Healing: +1 ENDURANCE point for each section without combat.",
        tier: "Kai",
      },
      {
        name: "Hunting",
        description:
          "This skill ensures that a Kai Lord will never starve in the wild."
          + "They will always be able to hunt for food, except in areas of wasteland and desert."
          + "The skill also enables a Kai Lord to be able to move swiftly and stealthily.",
        entry: "Hunting: no need for a Meal when instructed to eat.",
        tier: "Kai",
      },
      {
        name: "Mind Over Matter",
        description:
          "Mastery of this Discipline enables a Kai to move small objects by focusing their concentration.",
        entry: "Mind Over Matter",
        tier: "Kai",
      },
      {
        name: "Mindblast",
        description:
          "This skill enables a Kai Lord to attack an enemy using the force of their mind. "
          + "It can be used at the same time as a normal combat weapon and adds an extra two points to your COMBAT SKILL. "
          + "Not all the creatures encountered on this adventure will be susceptible to Mindblast. You will be told if a creature is immune.",
        entry: "Mindblast: +2 COMBAT SKILL points.",
        tier: "Kai",
      },
      {
        name: "Mindshield",
        description:
          "Some of your enemies will have the ability to attack you using psychic force, i.e. the power of their mind."
          + "The Kai Discipline of Mindshield can protect you from losing any ENDURANCE points when subjected to this form of attack.",
        entry: "Mindshield: no points lost when attacked by Mindblast.",
        tier: "Kai",
      },
      {
        name: "Sixth Sense",
        description:
          "This skill may warn a Kai Lord of imminent danger."
          + "It may also reveal the true purpose of a stranger or strange object encountered in the adventure.",
        entry: "Sixth Sense",
        tier: "Kai",
      },
      {
        name: "Tracking",
        description:
          "This skill enables a Kai Lord to make the correct choice of a path in the wild, "
          + "to discover the location of a person or object in a town or city, "
          + " and to read the secrets of footprints or tracks.",
        entry: "Tracking",
        tier: "Kai",
      },
      {
        name: "Weaponskill",
        description:
          "Upon entering the Kai Monastery, each initiate is taught to master one type of weapon. "
          + "If Weaponskill is to be one of your Kai Disciplines, pick a number in the usual way from the Random Number Table, "
          + "and thenfind the corresponding weapon from the list below. This is the weapon in which you have proven skill. "
          + "When you enter combat carrying this weapon, you add 2 points to your COMBAT SKILL rating. "
          + "The fact that you are skilled with a weapon does not mean you set out on the adventure carrying that particular weapon. "
          + "However, you will have opportunities to acquire weapons in the course of your adventures. "
          + "You cannot carry more than two weapons. You may only use one weapon at a time. ",
        entry: "Weaponskill in <option>: +2 COMBAT SKILL if this weapon carried.",
        tier: "Kai",
        options: [
          "Dagger",
          "Short Sword",
          "Spear",
          "Mace",
          "Warhammer",
          "Sword",
          "Axe",
          "Sword",
          "Quarterstaff",
          "Broadsword"
        ],
      },
    ],
  }),
  actions: {},
  getters: {},
})
