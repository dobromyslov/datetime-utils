import {DateTime, IANAZone, Zone} from 'luxon';

const utcZone = IANAZone.create('UTC');

/**
 * Parses russian date into Luxon DateTime.
 * Always in UTC timezone for unification.
 *
 * @param russianDate format dd.MM.yyyy
 */
export function parseRussianDate(russianDate: string): DateTime {
  return DateTime.fromFormat(russianDate, 'dd.MM.yyyy');
}

/**
 * Parses russian datetime into Luxon DateTime.
 * @param russianDateTime format dd.MM.yyyy HH:mm:ss or dd.MM.yyyy HH:mm. Example: 30.01.2019 23:59:59
 * @param zone [optional] time zone. Default = Europe/Moscow.
 */
export function parseRussianDateTime(russianDateTime: string, zone: Zone = utcZone): DateTime {
  const datetimeParts = russianDateTime.split(' ');
  if (datetimeParts.length > 1) {
    const timeParts = datetimeParts[1].split(':');
    if (timeParts.length === 2) {
      return DateTime.fromFormat(russianDateTime, 'dd.MM.yyyy HH:mm', {zone});
    }

    if (timeParts.length === 3) {
      return DateTime.fromFormat(russianDateTime, 'dd.MM.yyyy HH:mm:ss', {zone});
    }
  }

  // If there is no time part then parse date
  // Dates are always unified in UTC timezone
  return parseRussianDate(russianDateTime);
}

/**
 * Parses time into Luxon DateTime
 * @param time format HH:mm:ss or HH:mm
 * @param zone [optional] time zone. Default = Europe/Moscow.
 */
export function parseTime(time: string, zone: Zone = utcZone): DateTime | null {
  return parseRussianDateTime('01.01.1970 ' + time, zone);
}
