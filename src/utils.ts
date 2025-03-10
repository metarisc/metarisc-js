import { jwtDecode } from 'jwt-decode';

export class Utils {
    /**
     * Build URL with query params templates
     */
    static constructPath(data: { [key: string]: string }, url: string): string {
        const r = RegExp("{([^}]*)}", "g");
        let s = "";
        let idx = 0;

        for (let a; (a = r.exec(url)) !== null;) {
            s += url.substring(idx, r.lastIndex - a[0].length) + data[a[1]];
            idx = r.lastIndex;
        }

        if (idx < url.length) {
            s += url.substring(idx, url.length);
        }

        return s;
    }

    static tokenExpired(token: string): boolean {
        try {
            const decoded_token = jwtDecode(token);
            if (Date.now() >= decoded_token.exp * 1000) {
                return true;
            }
        } catch (e) {
            return true;
        }
        return false;
    }

    /**
     * Format date ISO 8601.
     * 
     * Can be used to format a date to be sent to the Metarisc API.
     * Output Example : 2021-09-01T12:00:00Z or 2021-09-01
     */
    static formatDate(date: Date): string {
        if(this.isDateTime(date)) {
            return (
                date.getUTCFullYear() + '-' +
                new String(date.getUTCMonth() + 1).padStart(2, '0') + '-' +
                new String(date.getUTCDate()).padStart(2, '0') + 'T' +
                new String(date.getUTCHours()).padStart(2, '0') + ':' +
                new String(date.getUTCMinutes()).padStart(2, '0') + ':' +
                new String(date.getUTCSeconds()).padStart(2, '0') + 'Z'
            );
        } else {
            return (
                date.getUTCFullYear() + '-' +
                new String(date.getUTCMonth() + 1).padStart(2, '0') + '-' +
                new String(date.getUTCDate()).padStart(2, '0')
            );
        }
    }

    /**
     * This function checks if the date string includes the 'T' character (commonly used in ISO
     * date strings to separate the date and time parts) and if the hours part is not zero.
     * If both conditions are true, it considers the string as a datetime.
     * 
     * If the date is a Date object, it checks if the hours, minutes and seconds are not zero.
     */
    static isDateTime(date: string | Date): boolean {
        if(!(date instanceof Date)) {
            if(!date.includes('T')) {
                return false;
            };
            date = new Date(date);
        }

        return !(date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0);
    }

    /**
     * Filtre un objet pour :
     * - enlever tous les champs "undefined"
     * - filtrer les dates
     */
    static payloadFilter<T extends object>(payload : T) : T {
        let filtered : T;
        
        Object.keys(payload).forEach((key) => {

            if (payload[key] === Object(payload[key])) {
                filtered[key] = Utils.payloadFilter(payload[key]);
            }

            if (payload[key] !== undefined) {
                filtered[key] = payload[key];
            }

            if(payload[key] instanceof Date) {
                filtered[key] = this.formatDate(payload[key]);
            }
        });
        
        return filtered;
    }
}
