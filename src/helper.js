export default class DistrictRepository {
  constructor(data) {
    this.stats = this.cleanData(data);
  }

  cleanData = (garbage) => {
    let notGarbage = garbage.reduce((acc, datum) => {
      if (acc[datum.Location] === undefined) {
          acc[datum.Location] = {[datum.TimeFrame]: datum.Data}
      } else {
        Object.assign(acc[datum.Location], {[datum.TimeFrame]: datum.Data})
      }
      return acc;
    }, {});

    return notGarbage;
  }

  findByName = (name) => {
    if (name === '') {
      return undefined;
    } else if (!Object.keys(this.stats).includes(name)) {
      return undefined;
    }
  }
}
