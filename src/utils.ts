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
     */
    static formatDate(date: Date): string {
        return (
            date.getUTCFullYear() + '-' +
            new String(date.getUTCMonth() + 1).padStart(2, '0') + '-' +
            new String(date.getUTCDate()).padStart(2, '0') + 'T' +
            new String(date.getUTCHours()).padStart(2, '0') + ':' +
            new String(date.getUTCMinutes()).padStart(2, '0') + ':' +
            new String(date.getUTCSeconds()).padStart(2, '0') + 'Z'
        );
    }

    /**
     * Filtre un objet pour :
     * - enlever tous les champs "undefined"
     * - filtrer les dates
     */
    static payloadFilter(payload : any) : object {
        const filtered : any = {};
        // Filtre sur tous les champs "undefined"
        Object.keys(payload).forEach((key) => {
            if (payload[key] === Object(payload[key])) {
                filtered[key] = Utils.payloadFilter(payload[key]);
            }
            else if (payload[key] !== undefined) {
                filtered[key] = payload[key];
            }
        });
        // Filtre sur la date
        Object.keys(filtered).forEach((key) => {
            if(filtered[key] instanceof Date) {
                filtered[key] = this.formatDate(payload[key]);
            }
        });
        return filtered;
    }
}
