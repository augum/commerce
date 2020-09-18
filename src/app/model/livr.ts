import { Llivr } from '../model/llivr';
export class Livr {
    id :number;
    annee : number;
    numero : number;
    code_client : number;
    lib_client : String;
    date : any;
    libelle : String;
    totht : number;
    tottva : number;
    totttc : number;
    mag:string;
    lcomms :Array<Llivr> =[];
    
}
