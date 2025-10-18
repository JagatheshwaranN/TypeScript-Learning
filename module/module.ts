export let appName="Calc";

export function add(a:number, b:number):number{
    return a+b;
}

export class Transform {

    static changeCase(data:string):string {
        return data.toUpperCase();
    }
}