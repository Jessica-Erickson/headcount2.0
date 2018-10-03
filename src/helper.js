export default class DistrictRepository {
  constructor(data) {
    this.stats = this.cleanData(data);
  }

  cleanData = (garbage) => {
    let notGarbage = garbage.reduce((acc, datum) => {
      if (acc[datum.Location.toUpperCase()] === undefined) {
          acc[datum.Location.toUpperCase()] = {[datum.TimeFrame]: (Math.round(datum.Data * 1000) / 1000)}
      } else {
        Object.assign(acc[datum.Location.toUpperCase()], {[datum.TimeFrame]: (Math.round(datum.Data * 1000) / 1000)})
      }
      return acc;
    }, {});

    return notGarbage;
  }

  findByName = (name) => {
    if (name !== undefined && Object.keys(this.stats).includes(name.toUpperCase())) {
      return {
        location: name.toUpperCase(),
        stats: this.stats[name.toUpperCase()]
      };
    }
  }
}
