import { jwtDecode } from 'jwt-decode';

export class Utils {
    /**
     * Build URL with query params templates
     */
    static constructPath(data: { [key: string]: string }, url: string): string {
        const r = RegExp("{([^}]*)}", "g");
        let s = "";
        let idx = 0;

        for (let a; (a = r.exec(url)) !== null; ) {
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
}
