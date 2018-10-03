export default class DistrictRepository {
  constructor(data) {
    this.stats = this.cleanData(data);
  }

  cleanData = (rawData) => {
    return rawData.reduce((acc, datum) => {
      const { Location , TimeFrame , Data } = datum;
      const betterLocation = Location.toUpperCase();

      if (acc[betterLocation] === undefined) {
          acc[betterLocation] = {[TimeFrame]: (Math.round(Data * 1000) / 1000) || 0}
      } else {
        Object.assign(acc[betterLocation], {[TimeFrame]: (Math.round(Data * 1000) / 1000) || 0})
      }
      return acc;

    }, {});
  }

  findByName = (name) => {
    if (name !== undefined && Object.keys(this.stats).includes(name.toUpperCase())) {
      const betterName = name.toUpperCase();
      return {
        location: betterName,
        stats: this.stats[betterName]
      };
    }
  }

  findAllMatches = (name) => {
    const allSchools = Object.keys(this.stats).map(school => this.findByName(school));
    if (name) {
      return allSchools.filter(school => school.location.includes(name.toUpperCase()));
    } else {
      return allSchools;
    }
  }

  findAverage = (name) => {
    const schoolInfo = this.findByName(name).stats;
    const years = Object.keys(schoolInfo);
    let average = years.reduce((acc, year) => {
      return acc += (schoolInfo[year] / years.length);
    }, 0)
    return Math.round(average * 1000) / 1000;
  }

  compareDistrictAverages = (name1, name2) => {
    const betterNames = [name1.toUpperCase(), name2.toUpperCase()];
    const averages = [this.findAverage(name1), this.findAverage(name2)];
    const ratio = Math.round((averages[0]/averages[1]) * 1000) / 1000;
    return {[betterNames[0]]: averages[0], [betterNames[1]]: averages[1], compared: ratio};
  }
}
