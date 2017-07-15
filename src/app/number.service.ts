import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NumberService {

    private rootUrl: string;

    constructor(private http: Http) {
        this.rootUrl = `http://numbersapi.com/`;
    }

    resolveFact(number: number, type: string) {
        if (number == null) {
            number = 0;
        }
        const apiUrl = this.rootUrl + `${number}/${type}`;
        return new Promise(resolve => {
            this.http.get(apiUrl)
                .subscribe(data => {
                    resolve(data.text());
                    console.log('[resolveFact] Resolve: ', data);
                })
        });
    }
}
