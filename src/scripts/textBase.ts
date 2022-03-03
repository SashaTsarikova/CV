type ISoft = {
  [id:string]: string,
};

interface ItextBase {
  town: string,
  roleS: string,
  aboutMe: string,
  hardSkills: any,
  softSkills: ISoft,
}

const textBaseEng: ItextBase = {
  town: 'Minsk city',
  roleS: 'Frontend developer',
  aboutMe: "Good time of day! I'm Sasha. I have always loved to create new and interesting things, bring joy to others and help them solve important issues. Frontend programming helps me to realize all these qualities. I have already learned the “magic” of core JS and TS. The framework is next in line. My current goal is to improve my skills and find a job with possibilities for professional growth.",
  hardSkills: [
    [
      'IT languages', [
        'HTML5',
        'CSS / SCSS',
        'JS / TS',
        'SQL / MySQL',
        'Basic',
      ]],
    [
      'Other skills', [
        'GIT',
        'Figma',
        'Chrome DevTools',
        'webpack',
      ]],
    ['Lenguages', [
      'Russian (native)',
      'Belorussian (native)',
      'English (B1)']],
  ],
  softSkills: {
    'communication skills': 'I like to communicate with people. I have the ability to talk, speak, convince and explain.',
    'research skills': "I can't work without analises of projects I involved in, so I always on the way of serching of comparativly better solotion",
    responsibility: 'An integral trait of every professional is his ability to make decisions and take responsibility for them. I definitely have this trait.',
    'teamwork ability': "I'm ensure that a team could do more then a single person. I worked as a part of team on RSLang project (placed bellow)",
  },
};

export default textBaseEng;
