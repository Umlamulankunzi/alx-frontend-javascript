/**
 * Class named HolbertonCourse.
 */
export default class HolbertonCourse {
  /**
   * Creates new @see {@link HolbertonCourse}.
   *
   * @param {String} name - Name of the course.
   * @param {Number} length - Duration of course (in months).
   * @param {String[]} students - Student names enrolled in course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Get name of course.
   */
  get name() {
    return this._name;
  }

  /**
   * Set name course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Get length of course in months.
   */
  get length() {
    return this._length;
  }

  /**
   * Set length of course in months.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Get names of students in course.
   */
  get students() {
    return this._students;
  }

  /**
   * Set names of students in course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
